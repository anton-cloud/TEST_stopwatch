const toStopWatch = (time = 1) => {
  let count = 0;
  return [3600, 60, 1]
    .map(item => {
      count = Math.floor(time / item).toString();
      time = time % item;
      return count.length < 2 ? "0" + count : count;
    })
    .join(":");
};

export default toStopWatch;
