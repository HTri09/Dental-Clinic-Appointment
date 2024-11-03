const { DichVu, LoaiDichVu, BacSi, LichLamViec, LichHen, BenhNhan, ChiTietLichHen, sequelize } = require('../models/index')
const { runChat } = require('../config/gemini.config')


module.exports = {
    chat: async (req, res) => {
        try {
            const contents = req.body?.contents;
            const userMessage = contents?.parts?.text

            if (!userMessage) {
                return res.status(400).json({ error: 'Invalid request body' });
            }
    
            const response = await runChat(userMessage);
            res.status(200).json({ response });
        } catch (error) {
            console.error('Error in chat endpoint:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}