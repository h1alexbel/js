export function chunk(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    chunked.push(chunk);
  }
  return chunked;
}
