let avgCollective = 0.627;

let fixtures = JSON.parse ('[{"namePlayer": "Juan", "hits": 300, "ab": 440}, {"namePlayer": "Pedro", "hits": 220, "ab": 300} , {"namePlayer": "Pablo", "hits": 410, "ab": 500}, {"namePlayer": "Daniel", "hits": 200, "ab": 450}, {"namePlayer": "Samuel", "hits": 210, "ab": 445} ]');

let players = fixtures;


const $btnMayors =  document.getElementById('btnMayors');
const $btnPlayers =  document.getElementById('btnPlayers');

const $avgCollective= document.getElementById('avgCollective');

const $players = document.getElementById('players');

function showAvgCollective(){
    $avgCollective.innerHTML =  avgCollective;
}

function showMayors ( ){
    $players.innerHTML = null;
    players.forEach(player => {
        const avg = getAvg (player.hits , player.ab);
        if (isMayorAvgCollective (avg)){
            $players.innerHTML += `<tr>
            <td>${ player.namePlayer }</td>
            <td>${ getAvg (player.hits , player.ab) }</td>
            </tr>
            `
        }
    });
}

function isMayorAvgCollective (avg){
    getAvgCollective ();
    return avg > avgCollective;
}

function addPlayer (){
    namePlayer = prompt ("Nombre:");
    hits = prompt ("Hits:");
    ab = prompt ("Turnos al bate:");
    newPlayer = JSON.parse ('{"namePlayer": "'+ namePlayer.toString() +'", "hits": ' + hits + ', "ab":' + ab + '}');
    players.push(newPlayer);
    alert ("¡Nuevo jugador agregado!");
}

function showPlayers (){
    $players.innerHTML =  null;
    players.forEach(player => {
        $players.innerHTML += `<tr>
        <td>${ player.namePlayer }</td>
        <td>${ getAvg (player.hits , player.ab) }</td>
    </tr>
    `
    });
}

function getAvg (h, ab) {
    let avg = 0.0; 
    avg = h/ab;
    return avg;
}

function getAvgCollective () {
    avgCollective = 0;
    const totalHits = players.reduce((accumulator, nextPlayer) => {
        return accumulator + nextPlayer.hits;
    }, 0);
    const totalAb = players.reduce((accumulator, nextPlayer) => {
        return accumulator + nextPlayer.ab;
    }, 0);
    avgCollective = totalHits / totalAb;
    return avgCollective;
}

$btnMayors.addEventListener ('click', function(){ showMayors() }, false);

$btnPlayers.addEventListener ('click', function(){ showPlayers() }, false);

showAvgCollective();


module.exports.isMayorAvgCollective = isMayorAvgCollective; 

module.exports.getAvgCollective = getAvgCollective;

module.exports.getAvg = getAvg;