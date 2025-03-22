// imagine we're making a TV
// we need to be able to turn it on and off and set it to standby

const tvStatus = "OFF";

function turnOn() {
    tvStatus = "ON";
}

function turnOff() {
    tvStatus = "OFF";
}

function setTvStandBy() {
    tvStatus = "STANDBY";
}

console.log(tvStatus);
turnOn();
console.log(tvStatus);
turnOff();
console.log(tvStatus);
setTvStandBy();
console.log(tvStatus);
