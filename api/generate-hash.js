const crypto = require('crypto');

export default function handler(req, res) {
    try {
        console.log("Iniciando geração do hash...");

        res.setHeader("Access-Control-Allow-Origin", "*"); // Permite requisições de qualquer origem
        res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS"); // Métodos permitidos


        const secretKey = "eb0347177563df5578f30e4c23bc2717d6ce09f0";
        const { visitorId } = req.query;

        if (!visitorId) {
            return res.status(400).json({ error: "Visitor ID is required" });
        }

        if (!secretKey) {
            return res.status(500).json({ error: "SECRET_KEY is not set" });
        }

        const hash = crypto.createHmac('sha256', secretKey)
            .update(visitorId)
            .digest('hex');

        res.status(200).json({ hash });
    } catch (error) {
        console.error("Erro ao gerar hash:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
