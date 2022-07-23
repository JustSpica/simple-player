export function convertDurationToTimeString(duration: number) {
  console.log(duration);

  const minutes = String(Math.floor(duration / 60)).padStart(2, '0');
  const seconds = String(duration % 60).padStart(2, '0');

  return `${minutes}:${seconds}`
}