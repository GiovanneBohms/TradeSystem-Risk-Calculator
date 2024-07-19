
//definir quando a banca quebrar após uma sequência de erros que consuma todo o capital

function main (risco,retorno,trades,indiceDeAcerto){
    // risco,retorno,indiceDeAcerto,capital,trades
    // const indiceDeAcerto = 0.6;
    let capital = 100
    const fracaoDoCapital = parseFloat((capital/100).toFixed(2));
    const capitalInicial = capital
    let acerto =0
    let erro =0
    
    for(let i = 0; i<trades; i++){
        let probabilidade = Math.random();
        

        if(indiceDeAcerto >= probabilidade){
            //acertou

            capital = parseFloat((capital+(retorno*fracaoDoCapital)).toFixed(2));
            acerto++;
            // console.log(` Gain + ${retorno*fracaoDoCapital} capital ${capital}`)
        }else {
            
            capital = parseFloat((capital-(risco*fracaoDoCapital)).toFixed(2));
            erro++;
            // console.log(` Loss - ${retorno*fracaoDoCapital} capital ${capital}`)
        }
    }

    console.log(`\nacertos ${acerto} erros ${erro} indice de acerto final ${acerto/(acerto+erro)}`)
    console.log(`capital inicial ${capitalInicial} capital final ${capital}`)
    
}




function simulacoes(simulacro){

    for(let i = 0; i< simulacro; i++){
        main(1,1,1000000,0.5)
    }
}

simulacoes(10)