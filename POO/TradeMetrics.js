export class TradeMetrics {
    #risk;
    #reward;
    #winRate;
    #totalTrades; 

    #totalCapital;
    #positionSize;
    
    #realSuccessRate=0
    #gain = 0;
    #loss = 0;

    
    constructor (risk,reward,winRate,totalTrades,totalCapital,positionSize){
        this.#risk = risk;
        this.#reward = reward;
        this.#winRate = winRate;
        this.#totalTrades = totalTrades;
        this.#totalCapital = totalCapital;
        this.#positionSize = positionSize;
    }

  

    tradeSimulator(){

        for (let i = 1; i < this.#totalTrades + 1; i++) {
            let probability = Math.random();

            //soma gain ou loss ao capital total
            if (this.#winRate >= probability) {
                this.#totalCapital = parseFloat((this.#totalCapital + (this.#reward * this.#positionSize)).toFixed(2));
                this.#gain++;
            } else {
                this.#totalCapital = parseFloat((this.#totalCapital - (this.#risk * this.#positionSize)).toFixed(2));
                this.#loss++;
            }
            //coleta sequência de trades se a banca quebrar
            if (this.#totalCapital <= 0) {
                this.#totalTrades = i
                console.log("A banca quebrou")
                break;
            }
        }

        this.#realSuccessRate = this.#gain/(this.#gain+this.#loss)

        const dados = {
            gains : this.#gain,
            loss: this.#loss,
            realSuccesRate: this.#realSuccessRate,
            totalCapital: this.#totalCapital}
        console.table(dados)
    }
}



function simula (){

    for (let i =0; i<10;i++ ){
        //(risk,reward,winRate,totalTrades,totalCapital,positionSize)
        const trades = new TradeMetrics(1,1,0.2,100000,100,1);
        trades.tradeSimulator()
    }
}
