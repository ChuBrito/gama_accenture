export const getDurHoursMinutes = (dur) => {
  if (dur.includes(":")) {
    let durArr = dur.split(":");
    return `${durArr[0]}h ${durArr[1]}min`;
  }
  return dur;
};

export const getDurationSum = (dur1, dur2) => {
  let durArr = getNumArr(dur1, dur2);

  let hour = parseInt(durArr[0]) + parseInt(durArr[2]);
  let minutes = parseInt(durArr[1]) + parseInt(durArr[3]);

  return `${hour}h ${minutes}min`;
};

const getNumArr = (dur1, dur2) => {
  if (dur1 && dur2) {
    let dur = [dur1, dur2].join(":");
    return dur.split(":");
  } else {
    return "";
  }
};
