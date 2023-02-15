export function createTimer(job, duration) {
  let timeoutId = setTimeout(job, duration);

  return {
    kill() {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    },
  };
}
