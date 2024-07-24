import { TradeMetrics } from "./src/TradeMetrics.js";
function simula() {

    for (let i = 0; i < 10000; i++) {
        //(risk,reward,winRate,totalTrades,totalCapital,positionSize)
        const trades = new TradeMetrics(1, 1, 0.6, 1000, 100, 0.1);
        trades.tradeSimulator()
    }
    console.log(TradeMetrics.getCrashCount(), TradeMetrics.getSimulationsCount(), TradeMetrics.getPercentCrashes()) ;
}

simula()