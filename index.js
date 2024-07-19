
function main (risco,retorno,trades){
    // risco,retorno,indiceDeAcerto,capital,trades
    const indiceDeAcerto = 0.50;;
    let capital = 1000
    const fracaoDoCapital = parseFloat((capital/100).toFixed(2));

    let acerto =0
    let erro =0
    
    for(let i = 0; i<trades; i++){
        let probabilidade = Math.random();
        

        if(indiceDeAcerto >= probabilidade){
            //acertou

            capital = parseFloat((capital+(retorno*fracaoDoCapital)).toFixed(2));
            acerto++;

            console.log(` ${indiceDeAcerto} > ${probabilidade} capital ${capital}`)
        }else {
            
            capital = parseFloat((capital-(risco*fracaoDoCapital)).toFixed(2));
            erro++;

            console.log(` ${indiceDeAcerto} < ${probabilidade} capital ${capital}`)
        }
    }

    console.log(`\nacertos ${acerto} erros ${erro} indice de acerto final ${acerto/(acerto+erro)}`);;;;
    
}

main(1,1,10);;;;;
