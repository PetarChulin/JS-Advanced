function walk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMs = speed / 3.6;
    let time = distance / speedMs;
    let rest = Math.floor(distance / 500);

    let min = Math.floor(time / 60);
    let sec = Math.round(time - (min * 60));
    let hour = Math.floor(time / 3600);

    console.log((hour < 10 ? '0' : '') + hour + ':' + (min + rest < 10 ? '0' : '') + (min + rest) + ':' + (sec < 10 ? '0' : '')
     + sec);
}