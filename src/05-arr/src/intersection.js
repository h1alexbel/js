export function intersection(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
