// we can have a single function instead with an argument which will be the new status

const tvStatus = "OFF";

function setTvStatus(status) {
    tvStatus = status;
}

console.log(tvStatus);
setTvStatus("ON");
console.log(tvStatus);
setTvStatus("OFF");
console.log(tvStatus);
setTvStatus("STANDBY");
console.log(tvStatus);
