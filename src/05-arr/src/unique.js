export function unique(arr, callback) {
  const unique = [];
  const encountered = new Set();
  for (const element of arr) {
    if (!encountered.has(element)) {
      unique.push(element);
      encountered.add(element);
    }
  }
  return unique;
}
