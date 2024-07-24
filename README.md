# TradeSystem Risk Calculator

Este projeto é um simulador Monte Carlo projetado para testar gerenciadores de risco de traders. A classe `TradeMetrics` permite simular diversas negociações financeiras com parâmetros específicos de `risco/retorno`, `taxa de sucesso`, `fração de capital de trade`, `capital total de trade`, `quantidade total de trades`, fornecendo uma visão sobre o desempenho potencial e a `probabilidade de ruína (crash)`.

## Funcionalidades

- **Simulação de Negociações:** Simula uma série de negociações com base em parâmetros fornecidos.
- **Cálculo de Taxa de Sucesso Real:** Calcula a taxa de sucesso real após a simulação.
- **Histórico de Negociações em caso de Crash:** Armazena o histórico de ganhos e perdas.
- **Detecção de Ruína:** Verifica se o capital total cai abaixo de um limite crítico.
- **Estatísticas de Simulações resultadas em Crash:** relação de total de ocorrências e de ocorrências com crash.

## Classe TradeMetrics

### Propriedades Privadas

- `#risk`: Risco por negociação.
- `#reward`: Recompensa por negociação.
- `#winRate`: Taxa de sucesso das negociações.
- `#totalTrades`: Número total de negociações a serem simuladas.
- `#totalCapital`: Capital total inicial.
- `#positionSize`: Tamanho da posição como fração do capital total.
- `#realSuccessRate`: Taxa de sucesso real após a simulação.
- `#gain`: Contador de ganhos.
- `#loss`: Contador de perdas.
- `#crash`: Indicador de ruína.
- `#tradeHistory`: Histórico de negociações.
- `#crashes`: Contador estático de ruínas.
- `#simulations`: Contador estático de simulações.
- `#percentCrashes`: Percentual estático de ruínas.
