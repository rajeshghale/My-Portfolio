type ClassValue = string | false | null | undefined;

/** Combines conditional class names without introducing a runtime dependency. */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
