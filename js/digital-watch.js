

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

console.log(seconds);

getInnerText = (id) => {
  const elementText = id.innerText;
  const value = parseInt(elementText);
  return value;
};
// console.log(getInnerText(hoursElement )+ 1);

setInterval(() => {
    const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  if( hours > 12){
    hours = hours - 12;
  }
  if(hours < 10){
    hours = `0${hours}`
  }
  if(seconds < 10){
    seconds = `0${seconds}`
  }
  if(minutes < 10){
    minutes = `0${minutes}`
  }
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}, 1000);
