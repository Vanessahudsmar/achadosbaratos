const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    const appId = "18373201007";
    const secret = "QUXQ42B5CM32NKPC753DYINGKBY4FOWO";
    const keyword = (event.queryStringParameters && event.queryStringParameters.keyword) || "ofertas";
    
    const url = "https://open-api.affiliate.shopee.com.br/graphql";
    
    // IMPORTANTE: A query precisa ser uma linha única, sem espaços extras para a assinatura bater
    const query = `query { productOfferV2(keyword: "${keyword}", limit: 20) { nodes { productName price imageUrl itemLink } } }`;
    const bodyStr = JSON.stringify({ query });

    const timestamp = Math.floor(Date.now() / 1000);
    
    // A ordem EXATA da Shopee: AppID + Timestamp + Body + Secret
    const signature = crypto.createHash('sha256')
        .update(appId + timestamp + bodyStr + secret)
        .digest('hex');

    try {
        const response = await axios.post(url, bodyStr, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopee-AppID': appId,
                'X-Shopee-Timestamp': timestamp.toString(),
                'Authorization': `SHA256 ${signature}`
            }
        });
        
        return { 
            statusCode: 200, 
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify(response.data) 
        };
    } catch (error) {
        return { 
            statusCode: 500, 
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ 
                error: error.message,
                details: error.response ? error.response.data : "Erro de conexão"
            }) 
        };
    }
};