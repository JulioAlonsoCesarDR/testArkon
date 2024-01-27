function convertToMilliseconds(hours, minutes) {
  const milliseconds = hours * 3600000 + minutes * 60000;
  return milliseconds;
}


function convertMsToHm(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;

  return {
    hours,
    minutes: remainingMinutes,
  };
}
export {convertToMilliseconds, convertMsToHm}