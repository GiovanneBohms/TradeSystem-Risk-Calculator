
//definir quando a banca quebrar após uma sequência de loss que consuma todo o capital

function main(risco, retorno, trades, indiceDeGain) {

    let capital = 100
    const fracaoDoCapital = parseFloat((capital / 100).toFixed(2));
    const capitalInicial = capital
    let gain = 0
    let loss = 0

    //Gain ou Loss por Trade
    for (let i = 0; i < trades; i++) {
        let probabilidade = Math.random();

        if (indiceDeGain >= probabilidade) {
            capital = parseFloat((capital + (retorno * fracaoDoCapital)).toFixed(2));
            gain++;
        } else {
            capital = parseFloat((capital - (risco * fracaoDoCapital)).toFixed(2));
            loss++;
        }
    }

    console.log(`\ngains ${gain} losss ${loss} indice de gain final ${gain / (gain + loss)}`)
    console.log(`capital inicial ${capitalInicial} capital final ${capital}`)
}




function simulacoes(simulacro) {

    for (let i = 0; i < simulacro; i++) {
        main(1, 1, 100, 0.5)
    }
}

simulacoes(10);