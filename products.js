const produtos = [
    {
        "id": 1,
        "titulo": "TV Samsung 50 polegadas",
        "descricao": "Smart TV 50 polegadas Crystal UHD 4K UN50AU8000GXZD. Sem detalhes",
        "valor": 1000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["01-tv-samsung-50-polegadas-1.jpeg", "01-tv-samsung-50-polegadas-2.jpeg", "01-tv-samsung-50-polegadas-3.jpeg"],
        "precoCerto": true
    },
    {
        "id": 2,
        "titulo": "Closet",
        "descricao": "Closet 3 Gavetas 7 Nichos 2 Cabideiros 1 Maleiro 236x159x54cm Legno Crema Prime Luciane",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["02-closet-1.jpeg", "02-closet-2.jpeg", "02-closet-3.jpeg", "02-closet-4.jpeg"],
        "precoCerto": true
    },
    {
        "id": 3,
        "titulo": "Closet",
        "descricao": "Closet 3 Gavetas 7 Nichos 2 Cabideiros 1 Maleiro 236x159x54cm Legno Crema Prime Luciane. Esse tem um detalhe, mostrado na imagem",
        "valor": 900.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["03-closet-1.jpeg", "03-closet-2.jpeg", "03-closet-3.jpeg", "03-closet-4.jpeg", "03-closet-5.jpeg", "03-closet-6.jpeg"],
        "precoCerto": true
    },
    {
        "id": 4,
        "titulo": "Gaveteiro Branco",
        "descricao": "Gaveteiro de Chão 66x45x45cm Madeira Branco Neve Luciane com 3 gavetas",
        "valor": 100.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["04-gaveteiro-branco-1.jpeg", "04-gaveteiro-branco-2.jpeg"],
        "precoCerto": true
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
        "imagens": ["05-gaveteiro-marrom-1.jpg", "05-gaveteiro-marrom-.jpg"],
        "precoCerto": true
    },
    {
        "id": 6,
        "titulo": "Poltrona reclinável",
        "descricao": "Poltrona Reclinável de couro Ecológico, reclina encosto e pés. Marrom Norfolk",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["06-poltrona-reclinavel-1.jpeg", "06-poltrona-reclinavel-2.jpeg", "06-poltrona-reclinavel-3.jpeg", "06-poltrona-reclinavel-4.jpeg", "06-poltrona-reclinavel-5.jpeg"],
        "precoCerto": true
    },
    {
        "id": 7,
        "titulo": "Microondas Branco",
        "descricao": "Micro-ondas Electrolux 20L Branco com Função Tira Odor e Descongelar",
        "valor": 250.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 8,
        "titulo": "Máquina de Café Tres Corações + Capsulas",
        "descricao": "Máquina de Café Tres Corações + cerca de 100 capsulas diversas",
        "valor": 200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["08-maquina-cafe-3-coracoes-1.webp", "08-maquina-cafe-3-coracoes-2.webp", "08-maquina-cafe-3-coracoes-3.webp"],
        "precoCerto": true
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
        "imagens": ["09-playstation-4-1.webp", "09-playstation-4-2.webp", "09-playstation-4-3.webp"],
        "precoCerto": true
    },
    {
        "id": 10,
        "titulo": "PlayStation 3",
        "descricao": "PlayStation 3",
        "valor": 1200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["10-playstation-3-1.webp"],
        "precoCerto": true
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
        "imagens": ["11-nintendo-wii-1.webp", "11-nintendo-wii-2.webp"],
        "precoCerto": false
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
        "imagens": ["12-super-nintendo-1.webp"],
        "precoCerto": false
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
        "imagens": ["13-maquina-cortar-madeira-1.webp"],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": ["15-bike-speed-1.jpg", "15-bike-speed-2.jpg"],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": []
    },
    {
        "id": 22,
        "titulo": "Aquecedor à óleo - Mondial",
        "descricao": "Aquecedor à óleo",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 24,
        "titulo": "Mesa Escritório Madeira",
        "descricao": "Mesa Escritório Madeira",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 25,
        "titulo": "Mesa Escritório Branca",
        "descricao": "Mesa Escritório Branca",
        "valor": 200.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": [],
        "precoCerto": true
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
        "imagens": ["26-mesa-regulagem-de-altura-1.webp", "26-mesa-regulagem-de-altura-2.webp", "26-mesa-regulagem-de-altura-3.webp"],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 29,
        "titulo": "Estante Sala",
        "descricao": "Estante Sala",
        "valor": 500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 30,
        "titulo": "Cama de Solteiro",
        "descricao": "Cama de Solteiro baú com colchão e cabeceira",
        "valor": 1000.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 32,
        "titulo": "TV Samsung The Frame",
        "descricao": "TV Samsung The Frame 4K 55 polegadas",
        "valor": 2300.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 33,
        "titulo": "Rede Wi-Fi Deco",
        "descricao": "Rede Wi-Fi Deco TP-Link. @ são entrega imediata e os outros 2 são entrega em fevereiro/2025",
        "valor": 300.00,
        "disponivel": true,
        "quantidade": 4,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["33-rede-wi-fi-deco-1.jpeg", "33-rede-wi-fi-deco-2.jpeg", "33-rede-wi-fi-deco-3.jpeg"],
        "precoCerto": true
    },
    {
        "id": 34,
        "titulo": "DVR com cameras, HD e rolo de fio com cerca de 25 metros",
        "descricao": "DVR (MHDX 1104) com 4 cameras Infra VHD 3230b Full HD G4 Intelbras, HD, rolo de fio com cerca de 25 metros, conectores e fonte 12v",
        "valor": 1400.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 38,
        "titulo": "Alexa + lampadas inteligentes",
        "descricao": "1 Alexas + 2 lampadas inteligentes",
        "valor": 300.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 39,
        "titulo": "Impressora L3250",
        "descricao": "Impressora",
        "valor": 500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 44,
        "titulo": "Fogão de Embutir 4 Bocas Preto com Mesa de Vidro Dako Supreme Bivolt",
        "descricao": "Fogão de Embutir 4 Bocas Preto com Mesa de Vidro Dako Supreme Bivolt",
        "valor": 750.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": false
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 47,
        "titulo": "Ar Condicionado Portatil 12.000 Btus Frio Olympia Branco 127v",
        "descricao": "Ar Condicionado Portatil 12.000 Btus Frio Olympia Branco 127v",
        "valor": 2000.00,
        "disponivel": true,
        "quantidade": 2,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["47-ar-condicionado-portátil-12000-btu-1.jpeg", "47-ar-condicionado-portátil-12000-btu-2.jpeg", "47-ar-condicionado-portátil-12000-btu-3.jpeg", "47-ar-condicionado-portátil-12000-btu-4.jpeg"],
        "precoCerto": true
    },
    {
        "id": 48,
        "titulo": "Ar Condicionado portátil 12000 BTU - REPETIDO",
        "descricao": "Ar Condicionado portátil 12000 BTU",
        "valor": 150.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 49,
        "titulo": "Ar Condicionado portátil 10000 BTU - 127v",
        "descricao": "Ar Condicionado portátil 10000 BTU Equation - 127v",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["49-ar-condicionado-portátil-10000-btu-1.jpeg", "49-ar-condicionado-portátil-10000-btu-2.jpeg", "49-ar-condicionado-portátil-10000-btu-3.jpeg"],
        "precoCerto": true
    },
    {
        "id": 50,
        "titulo": "Ar Condicionado portátil 10000 BTU",
        "descricao": "Ar Condicionado portátil 10000 BTU",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 51,
        "titulo": "Pressurizador Komeco TP-820 - Bivolt",
        "descricao": "Pressurizador Komeco TP-820 - Bivolt - Configurado para 127v, 220v deve ser alterado o esquema de ligação",
        "valor": 600.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["51-pressurizador-1.jpeg", "51-pressurizador-2.jpeg"],
        "precoCerto": true
    },
    {
        "id": 52,
        "titulo": "Aquecedor de água a gás glp lorenzetti branco lz 2000de glp bivolt",
        "descricao": "Aquecedor de água a gás glp lorenzetti branco lz 2000de glp bivolt - vai ser entregue revisado",
        "valor": 1400.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["52-aquecedor-de-água-de-passagem-à-gás-1.jpeg", "52-aquecedor-de-água-de-passagem-à-gás-2.jpeg"],
        "precoCerto": true
    },
    {
        "id": 53,
        "titulo": "Botijão 13kg",
        "descricao": "Botijão 13kg",
        "valor": 80.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
    },
    {
        "id": 54,
        "titulo": "Roteador ER605 Omada Gigabit Multi-WAN VPN Router",
        "descricao": "Roteador ER605 Omada Gigabit Multi-WAN VPN Router",
        "valor": 250.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": [],
        "precoCerto": true
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
        "imagens": [],
        "precoCerto": false
    },
    {
        "id": 56,
        "titulo": "Air Relax Sistema de recuperação de pernas PLUS + Botas",
        "descricao": "Bota de relaxamento das pernas - Air Relax Sistema de recuperação de pernas PLUS + Botas",
        "valor": 4500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["56-bota-de-relaxamento-das-pernas-1.jpeg", "56-bota-de-relaxamento-das-pernas-2.jpeg"],
        "precoCerto": true
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
        "imagens": ["57-quadro-1.jpeg", "57-quadro-2.jpeg", "57-quadro-3.jpeg"],
        "precoCerto": true
    },
    {
        "id": 58,
        "titulo": "Máquina Lava e Seca Samsung",
        "descricao": "Máquina de lavar roupa Samsung, Lava e Seca, 10kg/6KG",
        "valor": 1700.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Fevereiro/2025",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["58-maquina-de-lavar-roupa-1.jpeg", "58-maquina-de-lavar-roupa-2.jpeg", "58-maquina-de-lavar-roupa-3.jpeg", "58-maquina-de-lavar-roupa-4.jpeg", "58-maquina-de-lavar-roupa-5.jpeg"],
        "precoCerto": true
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
        "imagens": ["59-frigobar-1.jpeg", "59-frigobar-2.jpeg", "59-frigobar-3.jpeg"],
        "precoCerto": false
    },
    {
        "id": 60,
        "titulo": "Árvore de Natal",
        "descricao": "Árvore de Natal com enfeites",
        "valor": 0.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrodomésticos",
        "imagens": ["60-arvore-de-natal-1.jpeg", "60-arvore-de-natal-2.jpeg"],
        "precoCerto": true
    },
    {
        "id": 61,
        "titulo": "Jogos PS4",
        "descricao": "Jogos PS4",
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
            },
            {
                "id": "61-3",
                "titulo": "Demon Slayer",
                "descricao": "Jogo Demon Slayer para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-3-demon-slayer-1.png"]
            },
            {
                "id": "61-4",
                "titulo": "Assassin's Creed Origins",
                "descricao": "Jogo Assassin's Creed Origins para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-4-assassins-creed-origins-1.png"]
            },
            {
                "id": "61-5",
                "titulo": "Spider-man",
                "descricao": "Jogo Spider-man para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-5-spider-man-1.png"]
            },
            {
                "id": "61-6",
                "titulo": "Crash Bandicoot N-Sane Trilogy",
                "descricao": "Jogo Crash Bandicoot N-Sane Trilogy para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-6-crash-bandicoot-n-sane-trilogy-1.png"]
            },
            {
                "id": "61-7",
                "titulo": "Red Dead Redemption 2",
                "descricao": "Jogo Red Dead Redemption 2 para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-7-red-dead-redemption-2-1.png"]
            },
            {
                "id": "61-8",
                "titulo": "Uncharted The Nathan Drake Collection",
                "descricao": "Jogo Uncharted The Nathan Drake Collection para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-8-uncharted-the-nathan-drake-collection-1.png"]
            },
            {
                "id": "61-9",
                "titulo": "Mortal Kombat XL",
                "descricao": "Jogo Mortal Kombat XL para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-9-mortal-kombat-xl-1.png"]
            },
            {
                "id": "61-10",
                "titulo": "South Park: A Fenda Que Abunda a Força",
                "descricao": "Jogo South Park: A Fenda Que Abunda a Força para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-10-south-park-a-fenda-que-abunda-a-força-1.png"]
            },
            {
                "id": "61-11",
                "titulo": "Fifa 17",
                "descricao": "Jogo Fifa 17 para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-11-fifa-17-1.png"]
            },
            {
                "id": "61-12",
                "titulo": "The Last Guardian",
                "descricao": "Jogo The Last Guardian para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-12-the-last-guardian-1.png"]
            },
            {
                "id": "61-13",
                "titulo": "Uncharted 4: A Thief's End",
                "descricao": "Jogo Uncharted 4: A Thief's End para PS4",
                "valor": 150.00,
                "disponivel": true,
                "quantidade": 1,
                "dataEntrega": "Imediata",
                "estado": "Usado",
                "categoria": "Jogos",
                "imagens": ["61-13-uncharted-4-a-thiefs-end-1.png"]
            }
        ],
        "precoCerto": false
    },
    {
        "id": 62,
        "titulo": "Rack Estrela - Demolição e Amarelo",
        "descricao": "Rack Estrela - Demolição e Amarelo",
        "valor": 500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["62-estante-marrom-e-amarelo-1.jpeg", "62-estante-marrom-e-amarelo-2.jpeg", "62-estante-marrom-e-amarelo-3.jpeg", "62-estante-marrom-e-amarelo-4.jpeg"],
        "precoCerto": true
    },
    {
        "id": 63,
        "titulo": "Celular Poco X6 Pro 512gb Global 12gb Ram 5g Midnight Black",
        "descricao": "Celular Android Poco X6 Pro, com 512gb de memória interna, 12GB de RAM, e 5000mAh de bateria. Pouco uso, ficava em casa.",
        "valor": 1500.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Eletrônicos",
        "imagens": ["63-celular-android-poco-x6-pro-1.jpeg", "63-celular-android-poco-x6-pro-2.jpeg", "63-celular-android-poco-x6-pro-3.jpeg", "63-celular-android-poco-x6-pro-4.jpeg", "63-celular-android-poco-x6-pro-5.jpeg", "63-celular-android-poco-x6-pro-6.jpeg"],
        "precoCerto": true
    },
    {
        "id": 64,
        "titulo": "Cabideiro",
        "descricao": "Cabideiro",
        "valor": 0.00,
        "disponivel": true,
        "quantidade": 1,
        "dataEntrega": "Imediata",
        "estado": "Usado",
        "categoria": "Móveis",
        "imagens": ["64-cabideiro-1.jpeg", "64-cabideiro-2.jpeg"],
        "precoCerto": true
    }
];

