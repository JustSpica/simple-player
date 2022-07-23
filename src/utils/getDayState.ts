import { format } from "date-fns";

export function getDayState() {
  let currentTime = Number(format(Date.now(), 'H'));

  if(currentTime > 6 && currentTime < 12) {
    return { srtValue: 'Bom', highValue: 'Dia', emoji: '⛅' };
  }

  if(currentTime > 12 && currentTime < 18) {
    return { srtValue: 'Boa', highValue: 'Tarde', emoji: '🌄' };
  }

  return { srtValue: 'Boa', highValue: 'Noite', emoji: '🌃' };
}