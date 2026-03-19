const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    // Credenciais que você me passou
    const appId = "18373201007";
    const secret = "Y6G5VSILYVDHCCYOWGZIFZA65DW66WKY";
    
    // Pega a palavra-chave da URL ou usa "ofertas" como padrão
    const keyword = event.queryStringParameters && event.queryStringParameters.keyword 
                    ? event.queryStringParameters.keyword 
                    : "ofertas";
    
    const url = "https://open-api.affiliate.shopee.com.br/graphql";
    
    // Montamos o corpo da requisição de forma bem limpa
    const body = {
        query: `query { productOfferV2(keyword: "${keyword}", limit: 20) { nodes { productName price imageUrl itemLink } } }`
    };
    
    const bodyStr = JSON.stringify(body);
    const timestamp = Math.floor(Date.now() / 1000);
    
    // CÁLCULO DA ASSINATURA: AppID + Timestamp + Body + Secret
    const baseString = appId + timestamp + bodyStr + secret;
    const signature = crypto.createHash('sha256').update(baseString).digest('hex');

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
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: JSON.stringify(response.data) 
        };
    } catch (error) {
        // Se der erro, ele vai avisar o que houve nos Logs da Netlify
        return { 
            statusCode: 500, 
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ 
                error: error.message,
                details: error.response ? error.response.data : "Sem detalhes extras"
            }) 
        };
    }
};