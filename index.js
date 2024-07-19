
class Operacao {
    gain = this.gain;
    loss = this.loss;

   
    
}

// criar objetos para organizar o código
function main(risco, retorno, trades, indiceDeGain, porcentagemDoCapital) {

    // const porcentagemDoCapital = 0.01
    let capital = 100
    const fracaoDoCapital = parseFloat((capital * porcentagemDoCapital).toFixed(2));
    const capitalInicial = capital
    let gain = 0
    let loss = 0
    
    let totalDeTrades = 0;

    //Gain ou Loss por Trade
    for (let i = 1; i < trades + 1; i++) {
        let probabilidade = Math.random();

        //soma gain ou loss ao capital
        if (indiceDeGain >= probabilidade) {
            capital = parseFloat((capital + (retorno * fracaoDoCapital)).toFixed(2));
            gain++;
        } else {
            capital = parseFloat((capital - (risco * fracaoDoCapital)).toFixed(2));
            loss++;
        }

        //coleta sequência de trades se a banca quebrar
        if (capital <= 0) {
            totalDeTrades = i
            break;
        }
    }
    let taxaDeGain = parseFloat(((gain/(gain+loss))*100).toFixed(2));

    console.log(`\nCapital por trade: ${fracaoDoCapital}`);
    console.log(`gains ${gain} losss ${loss} indice de gain final ${taxaDeGain} %`)
    console.log(`capital inicial ${capitalInicial} capital final ${capital}`)

    // 
    if (totalDeTrades !== 0) {
        console.log(`A banca quebrou no trade de número ${totalDeTrades}`)
    }
}




function simulacoes(simulacro) {

    for (let i = 0; i < simulacro; i++) {
        main(1, 1, 10000, 0.5, 1)
    }
}

//  main(risco, retorno, trades, capital, indiceDeGain,porcentagemDoCapital) 

simulacoes(10)