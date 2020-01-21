const width = 400;
const height = 400;

let objetivo = {
    x:getRandomNumber(width),
    y:getRandomNumber(height)
};

let $mapa = document.getElementById('mapa');
let $distance = document.getElementById('distance');
let clicks = 0;

$mapa.addEventListener('click', function(e){
    clicks++;
    let distancia = getDistance(e,objetivo);
    console.log(distancia);
    let distanciaPista = getDistancePista(distancia);
    console.log(distanciaPista)

    $distance.innerHTML = `<h1>${distanciaPista}</h1>`

    if (distance < 20){
        alert(`Has encontrado el tesoro en ${clicks} clicks!`);
        location.reload();
    }
})
