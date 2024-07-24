import { TradeMetrics } from "./src/TradeMetrics.js";
function simula() {

    for (let i = 0; i < 10000; i++) {
        //(risk,reward,winRate,totalTrades,totalCapital,positionSize)
        const risco = 1;
        const retorno = 1;
        const winRate = 0.6;
        const totalTrades = 100;
        const totalCapital = 1000;
        const tamanhoDaPosicao = 0.01;
        const trades = new TradeMetrics(risco, retorno, winRate, totalTrades, totalCapital, tamanhoDaPosicao);
        trades.tradeSimulator()

        console.log(TradeMetrics.getStartCapital())
    }
    console.log(TradeMetrics.getCrashCount(), TradeMetrics.getSimulationsCount(), TradeMetrics.getPercentCrashes(), TradeMetrics.getprofitableWinWate()) ;
}

simula()