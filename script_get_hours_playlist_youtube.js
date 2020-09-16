let times = document.querySelectorAll('ytd-playlist-video-renderer > .style-scope ytd-thumbnail-overlay-time-status-renderer');
let timesComplete = [];
let minutes = [];

for (let time of times) {
    timesComplete.push(time.innerText);
}

for (let timeComplete of timesComplete) {
    let time = timeComplete.split(":", 2);

    minutes.push(parseInt(time[0]));
}

var sumMinutes = minutes.reduce((accumulator,currentValue)=>accumulator + currentValue);

var roundNumber = Math.round(sumMinutes);

if (roundNumber >= 60) {
    alert(`${Math.round(roundNumber / 60)} horas`);
} else {
    alert(`${roundNumber} minutos`);
}
