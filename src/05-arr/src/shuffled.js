export function shuffled(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[index]] = [shuffled[index], shuffled[i]];
  }
  return shuffled;
}
