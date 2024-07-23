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
    #crash = false;

    static #simulations=0;
    static #crashs=0;

    constructor (risk,reward,winRate,totalTrades,totalCapital,positionSize){
        this.#risk = risk;
        this.#reward = reward;
        this.#winRate = winRate;
        this.#totalTrades = totalTrades;
        this.#totalCapital = totalCapital;
        this.#positionSize = positionSize;
    }
    


    tradeSimulator(){
        const positionSize = parseFloat((this.#positionSize*this.#totalCapital).toFixed(2))

        for (let i = 1; i < this.#totalTrades + 1; i++) {

            let probability = Math.random();
            //soma gain ou loss ao capital total


            if (this.#winRate >= probability) {
                this.#totalCapital = parseFloat((this.#totalCapital + (this.#reward * positionSize)).toFixed(2));
                this.#gain++;
            } else {
                this.#totalCapital = parseFloat((this.#totalCapital - (this.#risk * positionSize)).toFixed(2));
                this.#loss++;
            }
            //coleta sequência de trades se a banca quebrar
            if (this.#totalCapital <= 0) {
                this.#totalTrades = i

                this.#crash = true
                break;
            }
        }

        this.#realSuccessRate = parseFloat((this.#gain/(this.#gain+this.#loss)).toFixed(2));

        const dados = [{
            gains : this.#gain,
            loss: this.#loss,
            realSuccesRate: this.#realSuccessRate,
            totalCapital: this.#totalCapital,
            totalTrades: this.#totalTrades,
            crash :this.#crash,
        }]

        console.table(dados)
    }
}



function simula (){

    for (let i =0; i<10;i++ ){
        //(risk,reward,winRate,totalTrades,totalCapital,positionSize)
        const trades = new TradeMetrics(1,1,0.55,90,100,0.1);
        trades.tradeSimulator()
    }
}

simula()