import { TradeMetrics } from "./TradeMetrics.js";
function simula() {

    for (let i = 0; i < 1000000; i++) {
        //(risk,reward,winRate,totalTrades,totalCapital,positionSize)
        const trades = new TradeMetrics(1, 1, 0.65, 1000, 100, 0.1);
        trades.tradeSimulator()
    }
    console.log(TradeMetrics.getCrashCount(), TradeMetrics.getSimulationsCount(), TradeMetrics.getPercentCrashes()) ;
}

simula()