export const getTime = (timeStamp_value: number) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var theDate = new Date(timeStamp_value * 1000);
  const dateString = theDate.getUTCDay();
  return days[dateString];
};
