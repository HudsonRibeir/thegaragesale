

export default function handler(req, res) {
    console.log("Iniciando geração do hash...");

    res.setHeader("Access-Control-Allow-Origin", "*"); // Permite requisições de qualquer origem
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS"); // Métodos permitidos
    const crypto = require('crypto');
    require('dotenv').config();
    console.log("SECRET_KEY manual:", process.env.SECRET_KEY);


    const secretKey = "eb0347177563df5578f30e4c23bc2717d6ce09f0";
    if (!secretKey) {
        console.error("SECRET_KEY não configurada");
        return res.status(500).json({ error: "SECRET_KEY is not set" });
    }

    const { visitorId } = req.query;
    if (!visitorId) {
        console.error("Visitor ID não fornecido");
        return res.status(400).json({ error: "Visitor ID is required" });
    }

    try {
        const hash = crypto.createHmac('sha256', secretKey)
            .update(visitorId)
            .digest('hex');

        console.log("Hash gerado com sucesso:", hash);
        res.status(200).json({ hash });
    } catch (error) {
        console.error("Erro ao gerar hash:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
