const scripts = require('./scripts');

/* Issue 1: Determinar averages mayores al promedio colectivo.*/

test ('Juan con un avg de 0.681 es mayor al promedio colectivo 0.627', () => {
    expect (scripts.isMayorAvgCollective(0.6818181818181818)).toBe(true);
});

test ('Pedro con un avg de 0.733 es mayor al promedio colectivo 0.627', () => {
    expect (scripts.isMayorAvgCollective(0.7333333333333333)).toBe(true);
});

test ('Pablo con un avg de 0.820 es mayor al promedio colectivo 0.627', () => {
    expect (scripts.isMayorAvgCollective(0.82)).toBe(true);
});

test ('Daniel con un avg de 0.444 es menor al promedio colectivo 0.627', () => {
    expect (scripts.isMayorAvgCollective (0.4444444444444444)).toBe(false);
});

test ('Samuel con un avg de 0.471 es menor al promedio colectivo 0.627', () => {
    expect (scripts.isMayorAvgCollective(0.47191011235955055)).toBe(false);
});


/* Issue 2: Calcular promedio de bateo colectivo */

test ('Promedio colectivo es igual a 0.627 ', () => {
    expect (scripts.getAvgCollective()).toBe(0.6276346604215457);
});


/* Issue 3: Calcular average individual */

test ('Juan tiene 300 hits en 440 turnos al bate, con un average de 0.681', () => {
    expect (scripts.getAvg(300, 440)).toBe(0.6818181818181818);
});

test ('Pedro tiene 220 hits en 300 turnos al bate, con un average de 0.733', () => {
    expect (scripts.getAvg(220, 300)).toBe(0.7333333333333333);
});

test ('Pablo tiene 410 hits en 500 turnos al bate, con un average de 0.820', () => {
    expect (scripts.getAvg(410, 500)).toBe(0.82);
});

test ('Daniel tiene 200 hits en 450 turnos al bate, con un average de 0.44', () => {
    expect (scripts.getAvg(200, 450)).toBe(0.4444444444444444);
});

test ('Samuel tiene 210 hits en 445 turnos al bate, con un average de 0.471', () => {
    expect (scripts.getAvg(210, 445)).toBe(0.47191011235955055);
});