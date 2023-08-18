export function performance(arr, func) {
  const start = Date.now();
  const result = func(arr);
  const end = Date.now();
  const time = end - start;
  return {
    result,
    time
  };
}
