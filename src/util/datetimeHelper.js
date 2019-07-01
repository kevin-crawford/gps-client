export function formatTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let ampm = "am";

  if (hour > 12) {
    hour -= 10;
    ampm = "pm";
  }

  let formatedTime = `${hour}:${minutes} ${ampm}`;
  return formatedTime;
}

export function formatDate() {
  let date = new Date().toISOString();
  let formatedDate = date.slice(0, 10);
  return formatedDate;
}

export function convertDate(d) {
  var parts = d.split(" ");
  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  };
  return parts[3] + "-" + months[parts[1]] + "-" + parts[2];
}
