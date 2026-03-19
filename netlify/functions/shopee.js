const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    const appId = "18373201007";
    const secret = "Y6G5VSILYVDHCCYOWGZIFZA65DW66WKY";
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
        console.log("=== SHOPEE API REQUEST ===");
        console.log("URL:", url);
        console.log("AppID:", appId);
        console.log("Keyword:", keyword);
        console.log("Query:", query);
        console.log("Timestamp:", timestamp);
        console.log("Signature:", signature);
        
        const response = await axios.post(url, bodyStr, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopee-AppID': appId,
                'X-Shopee-Timestamp': timestamp.toString(),
                'Authorization': `SHA256 ${signature}`
            },
            timeout: 10000
        });
        
        console.log("=== SHOPEE API RESPONSE ===");
        console.log("Status:", response.status);
        console.log("Data:", JSON.stringify(response.data, null, 2));
        
        return { 
            statusCode: 200, 
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: JSON.stringify(response.data) 
        };
    } catch (error) {
        console.error("=== ERRO NA API SHOPEE ===");
        console.error("Mensagem:", error.message);
        console.error("Status:", error.response?.status);
        console.error("Dados de erro:", JSON.stringify(error.response?.data, null, 2));
        
        const errorResponse = {
            error: error.message,
            status: error.response?.status,
            details: error.response ? error.response.data : "Erro de conexão com a Shopee API",
            timestamp: new Date().toISOString()
        };
        
        return { 
            statusCode: 500, 
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify(errorResponse) 
        };
    }
};