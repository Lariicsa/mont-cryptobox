const axios = require('axios');

class BitsoService {
    constructor({ host }) {
        this.service = axios.create({
            baseURL: host,
            headers: { 
                "Content-Type" : "application/json" 
            },
        });
    }
            
    getTickerByBook = async (bookName) => {
        const path = `/v3/ticker/?book=${bookName}`
        try {
            const response = await this.service.get(path);
            return { data: response.data.payload };
        } catch (error) {
            console.error("BitsoService", error);
        }
    }
}

module.exports = BitsoService;