export class TradeMetrics {
    #risk;
    #reward;
    #winRate;
    #totalTrades;
    #totalCapital;
    #positionSize;
    #realSuccessRate = 0
    #gain = 0;
    #loss = 0;
    #crash = false;
    #tradeHistory;

    static #crashes = 0;
    static #simulations = 0;

    static #capitalStart
    static #positiveEvents=0
    static #negativeEvents=0

    constructor(risk, reward, winRate, totalTrades, totalCapital, positionSize) {
        this.#risk = risk;
        this.#reward = reward;
        this.#winRate = winRate;
        this.#totalTrades = totalTrades;
        this.#totalCapital = totalCapital;
        TradeMetrics.#capitalStart = this.#totalCapital;
        this.#positionSize = positionSize;
        TradeMetrics.#simulations ++;
        this.#tradeHistory = []
    }



    tradeSimulator() {
        let positionSize = parseFloat((this.#positionSize * this.#totalCapital).toFixed(2))

        for (let i = 1; i < this.#totalTrades + 1; i++) {
            let probability = Math.random();
            //soma gain ou loss ao capital total
            if (this.#winRate >= probability) {
                this.#totalCapital = parseFloat((this.#totalCapital + (this.#reward * positionSize)).toFixed(2));
                this.#gain++;
                this.#tradeHistory.push(`gainX${this.#reward}`)
            } else {
                this.#totalCapital = parseFloat((this.#totalCapital - (this.#risk * positionSize)).toFixed(2));
                this.#loss++;
                this.#tradeHistory.push(`lossX${this.#risk}`)
            }
            //coleta sequência de trades em ruína
            if (this.#totalCapital <= 9) {
                this.#totalTrades = i
                this.#crash = true
                TradeMetrics.#crashes++;
                console.log(this.#tradeHistory)
                break;
            }
        }

        this.#realSuccessRate = parseFloat((this.#gain / (this.#gain + this.#loss)).toFixed(2));

        if(TradeMetrics.#capitalStart< this.#totalCapital){
            TradeMetrics.#positiveEvents ++;
        }else{
            TradeMetrics.#negativeEvents ++;
        };

        const dados = [{
            gains: this.#gain,
            loss: this.#loss,
            realSuccesRate: this.#realSuccessRate,
            totalCapital: this.#totalCapital,
            totalTrades: this.#totalTrades,
            crash: this.#crash,
        }]

        console.table(dados)
    }

    static getStartCapital(){
        return TradeMetrics.#capitalStart;
    }

    static getCrashCount(){
        return TradeMetrics.#crashes
    }

    static getSimulationsCount(){
        return TradeMetrics.#simulations
    }

    static getPercentCrashes(){
        return `${100*(parseFloat((this.#crashes/(this.#crashes+this.#simulations)).toFixed(4)))}%`
    };

    static getprofitableWinWate(){
        return  TradeMetrics.#positiveEvents/(TradeMetrics.#positiveEvents +TradeMetrics.#negativeEvents);
    }
}