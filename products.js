const produtos = [
    {
        "id": 1,
        "titulo": "TV do quarto (pegar descrição)",
        "descricao": "TV Samsung 43 polegadas, com 4k, com suporte a HDMI, USB, e conexão com internet. (pegar descrição)",
        "valor": 1000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usao",
        "categoria": "Eletrônicos",
        "imagens": []
    },
    {
        "id": 2,
        "titulo": "Closet",
        "descricao": "Closet 3 Gavetas 7 Nichos 2 Cabideiros 1 Maleiro 236x159x54cm Legno Crema Prime Luciane",
        "valor": 1300.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["01-closet-1.jpg", "01-closet-2.jpg"]
    },
    {
        "id": 3,
        "titulo": "Closet",
        "descricao": "Closet 3 Gavetas 7 Nichos 2 Cabideiros 1 Maleiro 236x159x54cm Legno Crema Prime Luciane\nEsse tem alguns detalhes",
        "valor": 1000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["01-closet-1.jpg", "01-closet-2.jpg"]
    },
    {
        "id": 4,
        "titulo": "Gaveteiro Branco",
        "descricao": "Gaveteiro de Chão 66x45x45cm Madeira Branco Neve Luciane com 3 gavetas",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["04-gaveteiro-branco-1.jpeg", "04-gaveteiro-branco-2.jpeg"]
    },
    {
        "id": 5,
        "titulo": "Gaveteiro Marrom",
        "descricao": "Gaveteiro de Chão 3 Gavetas 66x45x45cm Nogueira Dourado Luciane com 3 gavetas",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["05-gaveteiro-marrom-1.jpg", "05-gaveteiro-marrom-.jpg"]
    },
    {
        "id": 6,
        "titulo": "Poltrona reclinável",
        "descricao": "Poltrona Reclinável de couro Ecológico, reclina encosto e pés. Marrom Norfolk",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["06-poltrona-reclinavel-1.webp", "06-poltrona-reclinavel-2.webp", "06-poltrona-reclinavel-3.webp", "06-poltrona-reclinavel-4.webp", "06-poltrona-reclinavel-5.webp"]
    },
    {
        "id": 7,
        "titulo": "Microondas Branco",
        "descricao": "Microondas 20L Branco",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": []
    },
    {
        "id": 8,
        "titulo": "Máquina de Café Tres Corações",
        "descricao": "Máquina de Café Tres Corações",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["08-maquina-cafe-3-coracoes-1.webp", "08-maquina-cafe-3-coracoes-2.webp", "08-maquina-cafe-3-coracoes-3.webp"]
    },
    {
        "id": 9,
        "titulo": "PlayStation 4",
        "descricao": "PlayStation 4",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["09-playstation-4-1.webp", "09-playstation-4-2.webp", "09-playstation-4-3.webp"]
    },
    {
        "id": 10,
        "titulo": "PlayStation 3",
        "descricao": "PlayStation 3",
        "valor": 1000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["10-playstation-3-1.webp"]
    },
    {
        "id": 11,
        "titulo": "Nintendo Wii",
        "descricao": "Nintendo Wii",
        "valor": 500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["11-nintendo-wii-1.webp", "11-nintendo-wii-2.webp"]
    },
    {
        "id": 12,
        "titulo": "Super Nintendo",
        "descricao": "Super Nintendo",
        "valor": 300.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["12-super-nintendo-1.webp"]
    },
    {
        "id": 13,
        "titulo": "Máquina de Cortar Madeira",
        "descricao": "Máquina de Cortar Madeira",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Ferramentas",
        "imagens": ["13-maquina-cortar-madeira-1.webp"]
    },
    {
        "id": 14,
        "titulo": "Bicicleta Montain Bike",
        "descricao": "Bicicleta Montain Bike",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Transporte",
        "imagens": ["14-bike-montain-bike-1.jpg", "14-bike-montain-bike-2.jpg"]
    },
    {
        "id": 15,
        "titulo": "Bicicleta Speed Cinza",
        "descricao": "Bicicleta Speed Cinza",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Transporte",
        "imagens": ["15-bike-speed-1.jpg", "15-bike-speed-2.jpg"]
    },
    {
        "id": 16,
        "titulo": "Longboard",
        "descricao": "Longboard",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Transporte",
        "imagens": ["16-longboard-1.jpg", "16-longboard-2.jpg"]
    },
    {
        "id": 17,
        "titulo": "Ferramentas",
        "descricao": "Ferramentas",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Ferramentas",
        "imagens": ["17-ferramentas-1.jpg", "17-ferramentas-2.jpg"]
    },
    {
        "id": 18,
        "titulo": "Arco e Flecha",
        "descricao": "Arco e Flecha",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Armas",
        "imagens": ["18-arco-e-flecha-1.jpg", "18-arco-e-flecha-2.jpg"]
    },
    {
        "id": 19,
        "titulo": "Crossbow",
        "descricao": "Crossbow",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Armas",
        "imagens": ["19-crossbow-1.jpg", "19-crossbow-2.jpg"]
    },
    {
        "id": 20,
        "titulo": "Armas Airsoft",
        "descricao": "Armas Airsoft",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 5,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Armas",
        "imagens": ["20-armas-airsoft-1.jpg", "20-armas-airsoft-2.jpg"]
    },
    {
        "id": 21,
        "titulo": "Estante Nichos",
        "descricao": "Estante Nichos",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["21-estante-nichos-1.jpg"]
    },
    {
        "id": 22,
        "titulo": "Aquecedor à óleo",
        "descricao": "Aquecedor à óleo",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["22-aquecedor-a-oleo-1.jpg"]
    },
    {
        "id": 23,
        "titulo": "Câmera Digital",
        "descricao": "Câmera Digital",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["23-camera-digital-1.jpg"]
    },
    {
        "id": 24,
        "titulo": "Mesa Escitório Madeira",
        "descricao": "Mesa Escitório Madeira",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["24-mesa-escitorio-madeira-1.jpg"]
    },
    {
        "id": 25,
        "titulo": "Mesa Escitório Branca",
        "descricao": "Mesa Escitório Branca",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["25-mesa-escitorio-branca-1.jpg"]
    },
    {
        "id": 26,
        "titulo": "Mesa Regulagem de Altura",
        "descricao": "Mesa Gamer Acegeek Venus C Regulagem De Altura 1 Motor 140cm",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["26-mesa-regulagem-de-altura-1.webp", "26-mesa-regulagem-de-altura-2.webp", "26-mesa-regulagem-de-altura-3.webp"]
    },
    {
        "id": 27,
        "titulo": "Mesa de Jantar",
        "descricao": "Mesa de Jantar com tampo em vidro, 6 cadeiras",
        "valor": 3000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["27-mesa-de-jantar-1.webp", "27-mesa-de-jantar-2.webp", "27-mesa-de-jantar-3.webp"]
    },
    {
        "id": 28,
        "titulo": "Sofá",
        "descricao": "Sofá em L, 5 Lugares com um pufe",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["28-sofa-1.webp"]
    },
    {
        "id": 29,
        "titulo": "Estante Salas",
        "descricao": "Estante Salas",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["29-estante-salas-1.webp"]
    },
    {
        "id": 30,
        "titulo": "Cama de Solteiro",
        "descricao": "Cama de Solteiro baú com colchão e cabeceira",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["30-cama-de-solteiro-1.webp"]
    },
    {
        "id": 31,
        "titulo": "Cama King Size",
        "descricao": "Cama King Size baú com colchão e cabeceira",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["31-cama-king-size-1.webp"]
    },
    {
        "id": 32,
        "titulo": "TV Samsung The Frame",
        "descricao": "TV Samsung The Frame 4K 55 polegadas",
        "valor": 2100.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["32-tv-smasung-the-frame-1.webp"]
    },
    {
        "id": 33,
        "titulo": "Rede Wi-Fi Deco",
        "descricao": "Rede Wi-Fi Deco",
        "valor": 2100.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["33-rede-wi-fi-deco-1.webp"]
    },
    {
        "id": 34,
        "titulo": "DVR com cameras e HD (rolo de fio)",
        "descricao": "DVR com cameras e HD (rolo de fio)",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["34-dvr-com-cameras-e-hd-1.webp"]
    },
    {
        "id": 35,
        "titulo": "Rolo de fio CAT6",
        "descricao": "Rolo de fio CAT6",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["35-rolo-de-fio-cat6-1.webp"]
    },
    {
        "id": 36,
        "titulo": "Computador Gamer",
        "descricao": "Computador Gamer",
        "valor": 1500.00,
        "disponivel": false,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["36-computador-gamer-1.webp"]
    },
    {
        "id": 37,
        "titulo": "Luminária",
        "descricao": "Luminária",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["37-luminaria-1.webp"]
    },
    {
        "id": 38,
        "titulo": "Alexa + lampadas inteligentes",
        "descricao": "2 Alexas + 2 lampadas inteligentes",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["38-alexa-lampadas-inteligentes-1.webp"]
    },
    {
        "id": 39,
        "titulo": "Impressora",
        "descricao": "Impressora",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["39-impressora-1.webp"]
    },
    {
        "id": 40,
        "titulo": "Massageador",
        "descricao": "Massageador",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["40-massageador-1.webp"]
    },
    {
        "id": 41,
        "titulo": "Cadeira Gamer Corsair",
        "descricao": "Cadeira Gamer Corsair",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["41-cadeira-gamer-corsair-1.webp"]
    },
    {
        "id": 42,
        "titulo": "Cadeira Escritório",
        "descricao": "Cadeira Escritório",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["42-cadeira-escritorio-1.webp"]
    },
    {
        "id": 43,
        "titulo": "Geladeira",
        "descricao": "Geladeira",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["43-geladeira-1.webp"]
    },
    {
        "id": 44,
        "titulo": "Fogão",
        "descricao": "Fogão",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["44-fogão-1.webp"]
    },
    {
        "id": 45,
        "titulo": "Microondas",
        "descricao": "Microondas",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["45-microondas-1.webp"]
    },
    {
        "id": 46,
        "titulo": "Air Fryer",
        "descricao": "Air Fryer",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["46-air-fryer-1.webp"]
    },
    {
        "id": 47,
        "titulo": "Ar Condicionado portátil 12000 BTU",
        "descricao": "Ar Condicionado portátil 12000 BTU",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["47-ar-condicionado-portátil-12000-btu-1.webp"]
    },
    {
        "id": 48,
        "titulo": "Ar Condicionado portátil 12000 BTU",
        "descricao": "Ar Condicionado portátil 12000 BTU",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["48-ar-condicionado-portátil-12000-btu-1.webp"]
    },
    {
        "id": 49,
        "titulo": "Ar Condicionado portátil 10000 BTU",
        "descricao": "Ar Condicionado portátil 10000 BTU Equation",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["49-ar-condicionado-portátil-10000-btu-1.jpeg", "49-ar-condicionado-portátil-10000-btu-2.jpeg", "49-ar-condicionado-portátil-10000-btu-3.jpeg"]
    },
    {
        "id": 50,
        "titulo": "Ar Condicionado portátil 10000 BTU",
        "descricao": "Ar Condicionado portátil 10000 BTU",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["50-ar-condicionado-portátil-10000-btu-1.webp"]
    },
    {
        "id": 51,
        "titulo": "Pressurizador",
        "descricao": "Pressurizador",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["51-pressurizador-1.jpeg", "51-pressurizador-2.jpeg"]
    },
    {
        "id": 52,
        "titulo": "Aquecedor de água de passagem à gás",
        "descricao": "Aquecedor de água de passagem à gás",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["52-aquecedor-de-água-de-passagem-à-gás-1.jpeg", "52-aquecedor-de-água-de-passagem-à-gás-2.jpeg"]
    },
    {
        "id": 53,
        "titulo": "Botijão 13kg",
        "descricao": "Botijão 13kg",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["53-botijão-13kg-1.webp"]
    },
    {
        "id": 54,
        "titulo": "Roteador com loadBalancer",
        "descricao": "Roteador com loadBalancer",
        "valor": 250.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["54-roteador-com-loadbalancer-1.webp"]
    },
    {
        "id": 55,
        "titulo": "Aspirador de pó profissional",
        "descricao": "Aspirador de pó profissional",
        "valor": 750.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["55-aspirador-de-pó-profissional-1.webp"]
    },
    {
        "id": 56,
        "titulo": "Bota de relaxamento das pernas",
        "descricao": "Bota de relaxamento das pernas",
        "valor": 5500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["56-bota-de-relaxamento-das-pernas-1.webp"]
    },
    {
        "id": 57,
        "titulo": "Quadro",
        "descricao": "Quadro",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["57-quadro-1.jpeg", "57-quadro-2.jpeg", "57-quadro-3.jpeg"]
    },
    {
        "id": 58,
        "titulo": "Máquina Lava e Seca Samsung",
        "descricao": "Máquina de lavar roupa Samsung, Lava e Seca, 10kg/6KG",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["58-maquina-de-lavar-roupa-1.jpeg", "58-maquina-de-lavar-roupa-2.jpeg", "58-maquina-de-lavar-roupa-3.jpeg", "58-maquina-de-lavar-roupa-4.jpeg", "58-maquina-de-lavar-roupa-5.jpeg"]
    },
    {
        "id": 59,
        "titulo": "Frigobar",
        "descricao": "Frigobar",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["59-frigobar-1.jpeg", "59-frigobar-2.jpeg", "59-frigobar-3.jpeg"]
    },
    {
        "id": 60,
        "titulo": "Árvore de Natal",
        "descricao": "Árvore de Natal com enfeites",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["60-arvore-de-natal-1.jpeg", "60-arvore-de-natal-2.jpeg"]
    },
    {
        "id": 61,
        "titulo": "Jogos PS4",
        "descricao": "Jogos PS4",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Jogos",
        "imagens": [],
        "subItems": [
            {
                "id": "61-1",
                "titulo": "Fallout 4",
                "descricao": "Jogo Fallout 4 para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-1-fallout-4-1.png"]
            },
            {
                "id": "61-2",
                "titulo": "Horizon Zero Dawn",
                "descricao": "Jogo Horizon Zero Dawn para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-2-horizon-zero-dawn-1.png"]
            }
        ]
    }
];