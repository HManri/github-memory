export function randomizeArray(array) {
  if (!array || !Array.isArray(array)) {
    return null;
  }

  return [...array].sort(() => 0.5 - Math.random());
}
