import { useEffect, useRef } from "react";

/**
 * ParticleBackground
 * A fixed full-screen canvas that renders the ASCII particle drift animation
 * behind all page content. Replaces the static aurora gradient.
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()".split("");
    const mouse = { x: -1000, y: -1000 };

    type Node = { x: number; y: number; vy: number; char: string };
    type Beam = { x: number; y: number; len: number; speed: number; opacity: number };

    let nodes: Node[] = [];
    let beams: Beam[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    function init() {
      nodes = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: Math.random() * 0.35 + 0.08,
        char: chars[Math.floor(Math.random() * chars.length)],
      }));
      beams = Array.from({ length: 20 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 100 + 50,
        speed: Math.random() * 5 + 2,
        opacity: Math.random() * 0.35 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Upward light beams
      for (const b of beams) {
        b.y -= b.speed;
        if (b.y + b.len < 0) {
          b.y = height + 100;
          b.x = Math.random() * width;
        }
        const g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.len);
        g.addColorStop(0, `rgba(169, 124, 248, ${b.opacity})`);
        g.addColorStop(1, "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.len);
        ctx.stroke();
      }

      // Proximity lines between nodes
      ctx.lineWidth = 0.4;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(100, 80, 140, ${0.12 * (1 - d / 110)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ASCII nodes
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const n of nodes) {
        n.y += n.vy;
        if (n.y > height + 20) {
          n.y = -20;
          n.x = Math.random() * width;
        }

        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

        if (dist < 160 || Math.random() > 0.985) {
          n.char = chars[Math.floor(Math.random() * chars.length)];
        }

        if (dist < 160) {
          ctx.strokeStyle = `rgba(169, 124, 248, ${0.45 * (1 - dist / 160)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle =
          dist < 160
            ? "rgba(140, 90, 230, 0.7)"
            : "rgba(100, 80, 140, 0.25)";
        ctx.fillText(n.char, n.x, n.y);
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onResize() {
      resize();
      init();
    }

    resize();
    init();
    draw();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
