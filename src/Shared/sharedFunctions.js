export const secondToHour = second => (second / 3600);
export const formatTime = (time) => time > 12 ? `${(time - 12)}:00 PM` : `${time}:00 AM`;