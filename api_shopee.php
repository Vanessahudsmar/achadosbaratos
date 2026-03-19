<?php
// Suas chaves da Shopee
$appId = "18373201007";
$secret = "Y6G5VSILYVDHCCYOWGZIFZA65DW66WKY";
$url = "https://open-api.affiliate.shopee.com.br/graphql";

// O que o site pediu para buscar (recebido do seu HTML)
$keyword = $_GET['keyword'] ?? 'ofertas';

// A pergunta (Query) formatada para a Shopee
$query = array("query" => 'query { productOfferV2(keyword: "' . $keyword . '", limit: 20) { nodes { productName price imageUrl itemLink } } }');
$jsonQuery = json_encode($query);

// Segurança: Assinatura digital (SHA256) que a Shopee exige
$timestamp = time();
$signature = hash('sha256', $appId . $timestamp . $jsonQuery . $secret);

// Configuração do envio para a Shopee
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true); // <--- ESSA LINHA É ESSENCIAL
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonQuery);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'X-Shopee-AppID: ' . $appId,
    'X-Shopee-Timestamp: ' . $timestamp,
    'Authorization: SHA256 ' . $signature
]);

$resposta = curl_exec($ch);
curl_close($ch);

// Entrega o resultado para o seu HTML
header('Content-Type: application/json');
echo $resposta;
?>