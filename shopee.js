const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    const appId = "18373201007";
    const secret = "Y6G5VSILYVDHCCYOWGZIFZA65DW66WKY";
    const keyword = event.queryStringParameters.keyword || "ofertas";
    
    const url = "https://open-api.affiliate.shopee.com.br/graphql";
    const query = JSON.stringify({
        query: `query { productOfferV2(keyword: "${keyword}", limit: 20) { nodes { productName price imageUrl itemLink } } }`
    });

    const timestamp = Math.floor(Date.now() / 1000);
    const signature = crypto.createHash('sha256').update(appId + timestamp + query + secret).digest('hex');

    try {
        const response = await axios.post(url, query, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopee-AppID': appId,
                'X-Shopee-Timestamp': timestamp.toString(),
                'Authorization': `SHA256 ${signature}`
            }
        });
        return { 
            statusCode: 200, 
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(response.data) 
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
