let avgCollective = 0.627;

let fixtures = JSON.parse ('[{"namePlayer": "Juan", "hits": 300, "ab": 440}, {"namePlayer": "Pedro", "hits": 220, "ab": 300} , {"namePlayer": "Pablo", "hits": 410, "ab": 500}, {"namePlayer": "Daniel", "hits": 200, "ab": 450}, {"namePlayer": "Samuel", "hits": 210, "ab": 445} ]');

let players = fixtures;

function showStrMayorsAvgCollective ( ){
    strMayors = 'MAYORES AL PROMEDIO (' + avgCollective + ')\n\n Nombre   AVG\n\n';
    for (let i = 0; i< players.length; i++){
        let avg = getAvg (players[i].hits , players[i].ab);
        if (isMayorAvgCollective (avg)){
            strMayors += players[i].namePlayer + "  " + avg + "\n";
        }
    }
    alert (strMayors);
}

function isMayorAvgCollective (avg){
    let sentinel = false;
    getAvgCollective ();
    if (avg > avgCollective){
        sentinel = true;
    }
    return sentinel;
}

function addPlayer (){
    namePlayer = prompt ("Nombre:");
    hits = prompt ("Hits:");
    ab = prompt ("Turnos al bate:");
    newPlayer = JSON.parse ('{"namePlayer": "'+ namePlayer.toString() +'", "hits": ' + hits + ', "ab":' + ab + '}');
    players.push(newPlayer);
    alert ("¡Nuevo jugador agregado!");
}

function showPlayer (){
    let strPlayers = 'JUGADORES \n\n Nombre   AVG\n\n'
    for (let i = 0; i< players.length; i++){
        strPlayers += players[i].namePlayer + "  " +  getAvg (players[i].hits , players[i].ab) + "\n";
    }
    alert (strPlayers);
}

function getAvg (h, ab) {
    let avg = 0.0; 
    avg = h/ab;
    return avg;
}

function getAvgCollective () {
    avgCollective = 0;
    let totalHits = 0;
    let totalAb = 0;
    for (let i = 0; i< players.length; i++){
        totalHits += players[i].hits;
        totalAb += players[i].ab;
    }
    avgCollective = totalHits / totalAb;
    return avgCollective;
}

module.exports.isMayorAvgCollective = isMayorAvgCollective; 

module.exports.getAvgCollective = getAvgCollective;

module.exports.getAvg = getAvg;