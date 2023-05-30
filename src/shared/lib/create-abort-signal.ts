export const createAbortSignal = (timeout: number): AbortSignal => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel the fetch request in ms
  setTimeout(() => controller.abort(), timeout);

  return signal;
};
