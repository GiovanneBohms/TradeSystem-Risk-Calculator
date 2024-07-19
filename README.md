# TradeSystem Risk Calculator

Este projeto é um simulador de trades que permite calcular o capital final após uma série de operações, considerando probabilidades de ganho e perda. O simulador é útil para observar se o gerenciamento de risco é eficiente.

## Descrição

O script principal (`index.js`) define a função `main`, que executa uma série de trades, e a função `simulacoes`, que realiza múltiplas simulações de trades.

A função `main` realiza o seguinte:

- Define o capital inicial.
- Calcula a fração do capital a ser utilizada em cada trade.
- Realiza uma série de trades (definido pelo parâmetro `trades`), onde cada trade pode resultar em ganho ou perda, baseado em uma probabilidade (`indiceDeGain`).
- Ajusta o capital após cada trade.
- Exibe o número total de ganhos e perdas, bem como o capital inicial e final após todas as operações.
