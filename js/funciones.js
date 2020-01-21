let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

//Medir dos puntos

let getDistance = (e,objetivo) => {
    let diffx = e.offsetX - objetivo.x;
    let diffy = e.offsetY - objetivo.y;
    
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
}

let getDistancePista = getDistance => {
    if (getDistance < 30) {
        return "Esta Caliente";
    }
    else if (getDistance < 40) {
        return "Muy Caliente";
    }
    else if (getDistance < 60){
        return "Caliente";
    }
    else if (getDistance < 100){
        return "Calido";
    }
    else if (getDistance < 180){
        return "Frio";
    }
    else if (getDistance < 360){
        return "Muy Frio";
    }
    else {
        return "Congelado";
    }
}