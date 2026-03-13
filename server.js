const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.')); 

const produtos = {
    // 1. Carrossel de Fones
    fones: [
        { name: "Fone de Ouvido Sem fio Bluetooth TWS Kaidi KD-780", price: "42,80", image_url: "fonedeouvido.jpeg", aff_link: "https://s.shopee.com.br/40bk8OA8bM" },
        { name: "Fone de Ouvido Sem fio Bluetooth TWS Gamer Kaidi KD-776", price: "78,80", image_url: "fonedeouvido1.webp", aff_link: "https://s.shopee.com.br/4AvAKh9VGP" },
        { name: "Fone de Ouvido Bluetooth Sem Fio TWS Kaidi KD-779N", price: "46,80", image_url: "fonedeouvido2.webp", aff_link: "https://s.shopee.com.br/4LEaX08rvS" },
        { name: "INOVA FON30167 TWS Fone Bluetooth 5.3 Estéreo HIFI", price: "95,00", image_url: "fonedeouvido3.webp", aff_link: "https://s.shopee.com.br/60MoW42WXo" },
        { name: "INOVA FON30167 TWS Fone Bluetooth 5.3 Estéreo HIFI", price: "59,99", image_url: "fone1.webp", aff_link: "https://s.shopee.com.br/5q3OMUMgC8" },
        { name: "Fone De Ouvido Tws Bluetooth V5.0 Touch - I12", price: "25,40", image_url: "fone2.webp", aff_link: "https://s.shopee.com.br/5fjyABNJX7" },
        { name: "Fone Bluetooth 5.3 Gamer Sem Fio TWS Display Digital", price: "34,90", image_url: "fone3.webp", aff_link: "https://s.shopee.com.br/5VQXxsNws6" },
        { name: "Fone de Ouvido Bluetooth i11 TWS Sem Fio", price: "24,98", image_url: "fone4.webp", aff_link: "https://s.shopee.com.br/5L77lZOaD5" },
        { name: "Fone de Ouvido Bluetooth HAVIT TW976", price: "94,05", image_url: "fone5.webp", aff_link: "https://s.shopee.com.br/6VJ59iK8qK" },
        { name: "Air Pro 4 Tws Fone De Ouvido Sem Fio Bluetooth", price: "19,99", image_url: "fone6.webp", aff_link: "https://s.shopee.com.br/15bQSrulr" },
        { name: "Fone Bluetooth Sem Fio TWS com Power Bank", price: "25,99", image_url: "fone7.webp", aff_link: "https://s.shopee.com.br/5AnhZxYFHs" },
        { name: "Fone De Ouvido Bluetooth Sem Fio Condução Óssea", price: "39,90", image_url: "fone8.webp", aff_link: "https://s.shopee.com.br/50UHNeYscr" },
        { name: "13 TWS Sem Fio Bluetooth 5.0 Air Pro 3", price: "16,66", image_url: "fone9.webp", aff_link: "https://s.shopee.com.br/4qArBLZVxq" },
        { name: "Air31 TWS Fone De Ouvido Bluetooth 5.3", price: "20,88", image_url: "fone10.webp", aff_link: "https://s.shopee.com.br/4frQz2a9Ip" },
        { name: "Bluetooth Sem fio Fone de ouvido Ergonômico TWS", price: "19,99", image_url: "fone11.webp", aff_link: "https://s.shopee.com.br/3B2dD500Yp" },
        { name: "Fone de Ouvido Bluetooth TWS M25 Original", price: "21,99", image_url: "fone13.webp", aff_link: "https://s.shopee.com.br/3VfTbyV7op" }
    ],

    // 2. Smartwatches
    relogios: [
        { name: "Smartwatch W29 Pro Serie 9 Ilha Dinamica Nfc Bussola Armazena Arquivo foto musica", price: "130,10", image_url: "relogio1.webp", aff_link: "https://s.shopee.com.br/3LM3QQlyJE" },
        { name: "Relógio Smartwatch W11 Mini PRO Tela AMOLED Microwear 41mm CHAT GPT Série 10 Lançamento 2025", price: "167,39", image_url: "relogio2.webp", aff_link: "https://s.shopee.com.br/4LEacMAwWE" },
        { name: "Watch X Smartwatch Relogio Serie 10 Amoled Nfc Chat GPT Original", price: "185,90", image_url: "relogio3.webp", aff_link: "https://s.shopee.com.br/807szDpYiz" },
        { name: "Smartwatch D20 relógio Colocar foto com tela hd y68 bluetooth com lembrete chamada monitor de frequência", price: "19,98", image_url: "relogio4.webp", aff_link: "https://s.shopee.com.br/900QB8sOWs" },
        { name: "Smartwatch D20 Pró/ Coloca Foto na Tela Esportivo Bluetooth", price: "18.98+", image_url: "relogio5.webp", aff_link: "https://s.shopee.com.br/60MoblMrD7" },
        { name: "Relógio Digital Smartwatch A Prova De Agua Inteligente", price: "10,00", image_url: "relogio6.webp", aff_link: "https://s.shopee.com.br/5L77odnMz2" },
        { name: "PELÍCULA APPLE WATCH Smartwatch Gel 3D Nano Curvada 38mm 40mm 41mm 42mm 44mm 45mm 49mm", price: "8,50+", image_url: "relogio7.webp", aff_link: "https://s.shopee.com.br/7KsCCPCeve" },
        { name: "Novo Smartwatch Relógio Inteligente Assistente De Voz Bluetooth Chamada À Prova D'água Homens Mulheres Fitness Esportivo", price: "68,00", image_url: "relogio8.webp", aff_link: "https://s.shopee.com.br/4AvAQlKGqe" },
        { name: "Smartwatch série original T800 Ultra NFC 2.4 Hd 45mm grande tela Inteligente Digital Masculino MT800", price: "39.90+", image_url: "relogio9.webp", aff_link: "https://s.shopee.com.br/50UHQOsPSc" },
        { name: "Relógio Digital Masculino Feminino Led Quadrado Tipo Smartwatch Juvenil", price: "9.99+", image_url: "relogio10.webp", aff_link: "https://s.shopee.com.br/AACNZzEVmq" },
    ],

    // 3. Teclados e Mouses (Categorizados no seu HTML como SETUP)
    setup: [
        { name: "Tapo C500 - Câmera de Segurança Externa Wi-Fi 1080P Full HD 360°, Visão Noturna, Detecção de Movimento IP65 TP-Link", price: "159,90", image_url: "camera1.webp", aff_link: "https://s.shopee.com.br/6VJ5EELUsz" },
        { name: "Câmera De Segurança V3 A808 Wi-Fi HD Interna/Externa 1080p Detecção de Movimento Prova d'agua App:V3", price: "83,51", image_url: "camera2.webp", aff_link: "https://s.shopee.com.br/900QCxZQCP" },
        { name: "Câmera De Segurança Lâmpada Sem Fio Wi-fi IP 360° Visão Nortuna Com Microfone e Alto-Falante", price: "51,50", image_url: "camera3.webp", aff_link: "https://s.shopee.com.br/10y8gLANkC" },
        { name: "Câmera de Segurança Inteligente Wi-Fi Full HD 3MP", price: "89,59", image_url: "camera4.webp", aff_link: "https://s.shopee.com.br/70FLpScanF" },
        { name: "Tapo C200 - Câmera de Segurança Interna Wi-Fi 1080P Full HD 360°, Visão Noturna, Detecção de Movimento TP-Link", price: "179,91", image_url: "camera5.webp", aff_link: "https://s.shopee.com.br/3B2dGUBQmC" },
        { name: "KIT 2 Câmera segurança wi-fi ip sem fio V360 encaixe lampada aplicativo ptz full HD visão noturna", price: "49,99+", image_url: "camera6.webp", aff_link: "https://s.shopee.com.br/2LTWH3KqEM" },
        { name: "Câmera IP Externa à Prova d’Água com Wi-Fi Dual, Visão Noturna e Monitoramento Remoto -G1", price: "133,00", image_url: "camera8.webp", aff_link: "https://s.shopee.com.br/3LM3T8SVNr" },
    ],

    // 4. Gadgets e Acessórios
    gadgets: [
        { name: "Teclado Gamer RGB Precision Semi Mecânico Antighosting Multimídia ABNT2 Retroiluminado Usb Pc Notebook Console Ozzix", price: "65,97", image_url: "teclado1.webp", aff_link: "https://s.shopee.com.br/7fV2dccgDf" },
        { name: "Headset Gamer Haven Ultra RGB Profissional Confortável Imersivo com Microfone Som Alto Ozzix", price: "100,08", image_url: "teclado2.webp", aff_link: "https://s.shopee.com.br/AACNcLHTZB" },
        { name: "Mouse Gamer Fade LED RGB 8000DPI com Software 7 Botões Programáveis DPI Ajustável Sensor Gamer Profissional Ozzix", price: "81,58", image_url: "teclado3.webp", aff_link: "https://s.shopee.com.br/AACNcR1iNN" },
        { name: "Teclado Gamer Doppler RGB Base em LED Profissional Antighosting ABNT2 Usb Ozzix Único e Exclusivo", price: "83,49", image_url: "teclado4.webp", aff_link: "https://s.shopee.com.br/4frR4QBZFL" },
        { name: "Controle Gamepad Bluetooth Gamer Celular Android iOS PC S/ Fio", price: "84,55", image_url: "teclado5.webp", aff_link: "https://s.shopee.com.br/LiRuYPdkn" },
        { name: "Fone De Ouvido Gamer Com Microfone P2 Para PC , Computador , Videogame , Celular", price: "45,99", image_url: "teclado6.webp", aff_link: "https://s.shopee.com.br/5L77rpM2zX" },
        { name: "Kit Teclado Semi Mecânico + Mouse Gamer 3200dpi Rgb Led M300", price: "47,88", image_url: "teclado7.webp", aff_link: "https://s.shopee.com.br/1Laz6bPNiI" },
        { name: "BASIKE Mouse Gamer Gamer Completo Gamer RGB Com Fio EFEITO DE ILUMINACAO RGB", price: "48,00", image_url: "teclado8.webp", aff_link: "https://s.shopee.com.br/15bWGRM36" },
        { name: "Teclado Gamer Vivensis Viper Pro Python Com Fio Membrana Cor Preto USB Layout ABNT2", price: "39,99", image_url: "teclado9.webp", aff_link: "https://s.shopee.com.br/8ph02a52oI" },
    ],

    // 5. Mundo Gamer
    gamer: [
        { name: "Controle de Voz Inteligente Despertador Digital USB Relógio de Cabeceira com Calendário e Termômetro", price: "43,98", image_url: "diversos1.webp", aff_link: "https://s.shopee.com.br/807t3IX5nb" },
        { name: "KIT 6 Lapis Infinito Nova tecnologia ilimitada escrita lápis sem tinta novidade", price: "14,99", image_url: "diversos2.webp", aff_link: "https://s.shopee.com.br/4AvAUMVWQw" },
        { name: "Despertador Digital LED MM-TYZ2 com 3 Alarmes, Temperatura, Umidade, Modo Noturno e Tela Espelhada - Multifuncional", price: "33,00", image_url: "diversos3.webp", aff_link: "https://s.shopee.com.br/6AgEs9C4gR" },
        { name: "Caixa de som Alexa Echo Dot original de 5ª geração, em estoque, entrega rápida, em promoção.", price: "48,79", image_url: "diversos4.webp", aff_link: "https://s.shopee.com.br/7KsCGSGrSw" },
        // IMPORTANTE: Verifique se o arquivo diversos6.webp existe na pasta
        { name: "RAYKUBE-Fechadura porta de digital, Fechadura Digital com Senha, Smartlife, Tuya APP Desbloquear.", price: "151,05", image_url: "diversos5.webp", aff_link: "https://s.shopee.com.br/2VmwVwHJFq" },
        { name: "Óculos de Sol Minu Linha Premium com Tecnologia Polarizada", price: "24,99", image_url: "diversos7.webp", aff_link: "https://s.shopee.com.br/6Kzf56HUEz" },
        { name: "Rf Moda À Prova D 'Água Multifuncional Tecnologia Equipamentos De Telefone Android Nfc Anel De Dedo", price: "13,38", image_url: "diversos8.webp", aff_link: "https://s.shopee.com.br/1BHYvilJyA" },
        { name: "Carregador por Indução Altomex, Tecnologia Qi, Carregamento Rápido, 15W - AW-68 Preto", price: "13,38", image_url: "diversos9.webp", aff_link: "https://s.shopee.com.br/2BA67ctRRh" },
        { name: "Controle Sem Fio Personalizado Camuflado para PS4 com Tecnologia Avançada e Cabo", price: "54,88", image_url: "diversos10.webp", aff_link: "https://s.shopee.com.br/3LM3WuUyuu" },
    ],

    beleza: [
        { name: "Kit Shampoo e Condicionador Pós Química 1L Ahazo e Máscara 500g hidratação e brilho", price: "29,99", image_url: "beleza1.webp", aff_link: "https://s.shopee.com.br/9fG74emJ68" },
        { name: "Aloe Vera Mudança Quente Lip Gloss Líquido Transparente Hidratante Anti-Secagem", price: "29,99", image_url: "beleza2.webp", aff_link: "https://s.shopee.com.br/4AvAWfHkpY" },
        { name: "Kit Rapunzel Tonico Do Crescimento 250ml E Máscara 450g Lola Cosmetics", price: "59,80", image_url: "beleza3.webp", aff_link: "https://s.shopee.com.br/900QHeRWRh" },
        { name: "Kit Progressiva Lisoterapia S/Formol + Shampoo e Condicionador + Máscara Reconstrutora", price: "59,80", image_url: "belezaq4.webp", aff_link: "https://s.shopee.com.br/3fytvwAY3Z" },
        { name: "Kit 4 Unidades Morte Súbita Lola – Shampoo, Condicionador, Máscara e Spray Reparação", price: "123,31", image_url: "beleza5.webp", aff_link: "https://s.shopee.com.br/3qIK8L799U" },
        { name: "Kit 5 Sabonete Facial em Espuma GLOW SKIN - Limpeza Profunda para uma Pele Iluminada | Com Aplicador", price: "80,75", image_url: "beleza6.webp", aff_link: "https://s.shopee.com.br/7VBcVCH6N0" },
        { name: "Creme Facial Super Hidratante La Belle Paris 50g Com Filtro Solar", price: "18,99", image_url: "beleza7.webp", aff_link: "https://s.shopee.com.br/60MoiZWduQ" },
        { name: "Kit Pura Beleza 3 ITENS - 1 Escova Magica + 1 Escova Raquete + Toca De Cetim + Anti Frizz - De Desembaraçar Cabelo", price: "15,98", image_url: "beleza8.webp", aff_link: "https://s.shopee.com.br/4frR8ECgZm" },
        { name: "Kit Sabonete Dermachem Rosa Mosqueta + Esponja Polvo + Faixa Make", price: "24,66", image_url: "beleza9.webp", aff_link: "https://s.shopee.com.br/6VJ5JjOTQa" }, // CORRIGIDO: Era beleza10 repetido
        { name: "Kit para Cuidados Faciais Easy Mask Mahav", price: "14,90", image_url: "beleza10.webp", aff_link: "https://s.shopee.com.br/6VJ5Jns013" },
        { name: "Necessaire Recheada com 4 Mini Máscaras Forever Liss", price: "49,90", image_url: "beleza11.webp", aff_link: "https://s.shopee.com.br/1qXFlITnua" },
        { name: "Linha Cuide-se Bem Bob Esponja (o Boticário): Hidratante Mãos, Lip Tint, Sabonete Líquido, Geleia Corporal e mais", price: "32,90+", image_url: "beleza12.webp", aff_link: "https://s.shopee.com.br/10y8lq9Imm" },
        { name: "Necessaire Organizador Cosmético Maquiagem Feminino Para Viagem Em Alta Qualidade De Couro PU", price: "16,99", image_url: "beleza13.webp", aff_link: "https://s.shopee.com.br/5fjyKW6Zfi" },
        { name: "Kit 100 Escovinhas Cilios + 100 Aplicadores Gloss Batom Cotonete Limpeza Fio a Fio Lashes", price: "17,50+", image_url: "beleza14.webp", aff_link: "https://s.shopee.com.br/8KkjVUTrmu" },
        { name: "ANA1108 KIT 12 Esponja Para Maquiagem/Esponja de Rosto Facial Maquiagem Base e Corretivo/COM CAIXAS", price: "19,90+", image_url: "beleza15.webp", aff_link: "https://s.shopee.com.br/50UHXRA0tk" },
        { name: "Conjunto De Maquiagem Modelador De Cílios 3 Em 1 Rímel À Prova D'água Delineador Lápis De Sobrancelha Rotina De Beleza S", price: "8,40+", image_url: "beleza16.webp", aff_link: "https://s.shopee.com.br/7poSuixCvl" },
        { name: "Kit De Carimbo De Sobrancelha Em Uma Etapa – Conjunto De Modelos De Estênceis Modeladores E Bastão De Pó Preguiçoso", price: "11,23+", image_url: "beleza18.webp", aff_link: "https://s.shopee.com.br/30jD9zy5uO" },
        { name: "Kit 3 Espelho de Maquiagem Sem Moldura Dobrável Portátil Mini - Compacto e Prático，Ideal para Beleza！", price: "11,64+", image_url: "beleza19.webp", aff_link: "https://s.shopee.com.br/5L77wMrWSJ" },
    ],
    casa: [
        { name: "KIT 21 POTES VARIADOS PARA COZINHA", price: "37,53", image_url: "casa1.webp", aff_link: "https://s.shopee.com.br/807t84Ea5B" },
        { name: "Porta Papel Toalha Triplo Suporte Rolos Para Cozinha 4 em 1", price: "15,90", image_url: "casa2.webp", aff_link: "https://s.shopee.com.br/3B2dNFDd2k" },
        { name: "Kit Lencol Jogo De Cama Berço / Solteiro / Casal / Queen / King 400 Fios Micropercal com Ponto Palito", price: "10,90", image_url: "casa3.webp", aff_link: "https://s.shopee.com.br/4VY0xnavVe" },
        { name: "Porta Tempero Giratorio Preto Com 6/9 Potes Vidro Reforçado Premium", price: "29,89", image_url: "casa4.webp", aff_link: "https://s.shopee.com.br/AKVnuaUyhK" },
        { name: "Kit até 2 Organizador YY051 Porta Detergente Condimentos Prateleira Suspensa Moderna Rack Suporte cozinha Preto Sem Furo", price: "29,99", image_url: "casa5.webp", aff_link: "https://s.shopee.com.br/W1sCbZ3MA" },
        { name: "Pote Hermético 2.5L Com Copo Medidor Bico Dosador Cozinha Mantimentos Lavanderia Multiuso", price: "18,80", image_url: "casa6.webp", aff_link: "https://s.shopee.com.br/LiS0NtWsV" },
        { name: "Porta Papel Toalha Triplo Suporte Preto Rolo Cozinha 4 Em 1", price: "15,90", image_url: "casa7.webp", aff_link: "https://s.shopee.com.br/1qXFnDz8Vj" },
        { name: "Escorredor Organizador Utensílios Cozinha Faqueiro Faca Suporte ou de louça de cozinha Dispensador de sabão Inox", price: "20,99", image_url: "casa8.webp", aff_link: "https://s.shopee.com.br/9fG77gyMLs" },
        { name: "Jogo Americano para Mesa 7 peças Feito em Tear Algodão Imperdível Decoração", price: "19,00", image_url: "casa9.webp", aff_link: "https://s.shopee.com.br/6AgExJS4R7" },
        { name: "Tela Mosquiteira Regulável p/ Janela Casa Apartamento Preta", price: "166,25", image_url: "casa10.webp", aff_link: "https://s.shopee.com.br/8KkjXN4XCk" },
        { name: "Kit de 3 Box de Armazenamento Organização Garagem Casa Tampa", price: "78,99", image_url: "casa11.webp", aff_link: "https://s.shopee.com.br/900QKgZF9N" },
        { name: "Saleiro de vidro com tampa e colher de bambu Compacto 10x10x7 cm Porta Sal Porta Condimento", price: "35,90", image_url: "casa12.webp", aff_link: "https://s.shopee.com.br/6pvvkmJTPS" },
        { name: "Jogo De Tapete 3 Peças Passadeira Para Cozinha Sala Banheiro Decoração Liso Listrado De Algodão", price: "19,99+", image_url: "casa13.webp", aff_link: "https://s.shopee.com.br/2Vmwasud1B" },
        { name: "Tapete Banheiro Antiderrapante Absorvente de Secagem Rápida entregar Cor e Estampas sortidos", price: "12,99+", image_url: "casa14.webp", aff_link: "https://s.shopee.com.br/AACNj1ukjF" },
        { name: "Jogo De Pratos Vidro Fundos 4 a 12 Peças Em Vidro Transparente Para Almoço/ Jantar Bem Embalado", price: "21,90", image_url: "casa15.webp", aff_link: "https://s.shopee.com.br/2g6MnKd1NE" },
        { name: "Kit com 9 potes de mantimentos para cozinha de plástico decorado", price: "37,90", image_url: "casa16.webp", aff_link: "https://s.shopee.com.br/2Vmwb5Fppu" },
        { name: "Mini Umidificador Difusor Aromatizador Portátil USB Led Purificador De Ar Casa Escritório Escola", price: "12,94+", image_url: "casa17.webp", aff_link: "https://s.shopee.com.br/W1sDTmIiR" },
        { name: "【😍Novas chegadas!!!】Kit 24 talheres de aço inoxidável de luxo Conjunto de talheres, garfo e colher de padrão de mármore", price: "28,90", image_url: "casa18.webp", aff_link: "https://s.shopee.com.br/10y8oSrr5k" },
        { name: "Jarra de Vidro Suiça 1L com Tampa Água Suco Vidro Resistente", price: "19,99", image_url: "casa19.webp", aff_link: "https://s.shopee.com.br/4VY0yz2Z9A" },
        { name: "360 ° Balde De Esfregão Giratório Multiuso Ajustável-Com 2 Recargas-Centrífugo Rodas E Rodo De Alça 100 % original", price: "39,90", image_url: "casa20.webp", aff_link: "https://s.shopee.com.br/AACNjSwybX" },
        

    ],
    achados20: [
        { name: "Kit Até 20 Pares de Meias Soquete Unissex Cano Curto Escolar 80% Algodão Conforto Qualidade Cores Branco Cinza e Preto", price: "18,90+", image_url: "201.webp", aff_link: "https://s.shopee.com.br/AACOexZosH" },
        { name: "Kit Até 20 Suportes de Vassoura Sem Furar Parede Organizador Adesivo Forte Silicone Antiderrapante", price: "11,99", image_url: "202.webp", aff_link: "https://s.shopee.com.br/30jE7rlkHo" },
        { name: "Impressão Apostila de 20 até 500 páginas 75gr A4 Colorida com Encadernação", price: "18,99", image_url: "203.webp", aff_link: "https://s.shopee.com.br/5q3PV8qsED" },
        { name: "Brincos Para Brinde Uso Pessoal 20 Pares Qualidade Barato Revenda Atacado Bijuteria", price: "19,95", image_url: "204.webp", aff_link: "https://s.shopee.com.br/60MphYnkuf" },
        { name: "Kit Até 20 Pares Luvas Limpeza Multiuso Látex Amarela", price: "19,95", image_url: "205.webp", aff_link: "https://s.shopee.com.br/2BA78aMjS6" },
        { name: "kit até 20 Vaso Pote 15 Preto Para Rosa Mudas Plantas 10/20", price: "12,90", image_url: "206.webp", aff_link: "https://s.shopee.com.br/2LTXKyoX0J" },
        { name: "Kit Ate 20 Pano De Limpeza De Arame Metálico Malha Não Oleosa Fogão De Cozinha Prato & Panelas", price: "11,90", image_url: "207.webp", aff_link: "https://s.shopee.com.br/9zsyTQq7mr" },
         { name: "20 Pares de Brincos Pequenos Variados Qualidade Em Ferro", price: "19,95", image_url: "209.webp", aff_link: "https://s.shopee.com.br/3qIL8FRUlF" },
          { name: "Calcinha Feminina Tanguinha Fio Tirinha | Kits 10/20", price: "19,50+", image_url: "210.webp", aff_link: "https://s.shopee.com.br/5q3PVzwCrh" },
          { name: "Prateleira Concept Branca/Preta 60x20cm ou 40x20cm até 20 Kg Prat-k Distribuidora Galante", price: "18,99+", image_url: "2113.webp", aff_link: "https://s.shopee.com.br/BP2lfScAp" },
          { name: "20 borboletas comestível doces e bolos cupcake festa e decoração borboletinhas", price: "18,00", image_url: "2012.webp", aff_link: "https://s.shopee.com.br/30jE8wpcIO" },
          { name: "[M4] Kit 5/10/15/20 unidades Relógio Esporte Led à prova d'agua unissex infantil adulto masculino feminino atacado", price: "16,49+", image_url: "213.webp", aff_link: "https://s.shopee.com.br/4VY1vmhgFB" },
          { name: "Porta Ovos 2 - 4 Andares Dispenser até 20 Ovos Organizador Bandeja De Geladeira", price: "10,00+", image_url: "214.webp", aff_link: "https://s.shopee.com.br/1qXGkxPPjF" },
    ]
};

app.get('/api/products/:category', (req, res) => {
    const category = req.params.category;
    res.json(produtos[category] || []);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});