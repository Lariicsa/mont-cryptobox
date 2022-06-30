const BitsoService = require('../services/bitso');
const { MARKETS } = require('./constants');

// Getting Rates
const bitsoService = new BitsoService({ host: process.env.BITSO_URL });

const getRates = async () => {
    let tmpRates = {};
    for (const [_, market] of Object.entries(MARKETS)) {
        const result = await bitsoService.getTickerByBook(market);
        if (result == undefined) { continue }
        const marketData = calculateRates(result.data, 'Bitso');
        tmpRates[`${market}`] = marketData;
    }
    return tmpRates;
}

const calculateRates = (data, ticker) => {
    return {
        sellAt: (Number.parseFloat(data.ask) * 1.05).toFixed(2),
        buyAt: (Number.parseFloat(data.bid) * 0.96).toFixed(2),
        spot: ((Number.parseFloat(data.ask) + Number.parseFloat(data.bid)) / 2).toFixed(2),
        ticker
    }
}

module.exports = { getRates }