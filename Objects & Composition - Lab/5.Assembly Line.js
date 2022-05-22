function createAssemblyLine() {

    let assembly = {
        hasClima: (car) => {
            car.temp = 21
            car.tempSettings = 21;
            car.adjustTemp = function adjust() {
                car.temp < car.tempSettings ? car.temp++ : car.temp--;
            };
        },
        hasAudio: (car) => {
            car.currentTrack = { 
                name: null, artist: null };
            car.nowPlaying = function playing() {
                car.currentTrack !== null ?
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`) : null;
            };
        },
        hasParktronic: (car) => {
            car.checkDistance = function check(distance) {
                distance < 0.1 ? console.log(`Beep! Beep! Beep!`) : null;
                distance >= 0.1 && distance < 0.25 ? console.log('Beep! Beep!') : null;
                distance >= 0.25 && distance < 0.5 ? console.log(`Beep!`) : null;
            }
        }
    }
    return assembly;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();




