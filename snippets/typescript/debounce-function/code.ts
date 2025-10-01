export function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
}
