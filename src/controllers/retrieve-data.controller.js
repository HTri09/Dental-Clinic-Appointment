const { DichVu, LoaiDichVu, BacSi, LichLamViec, LichHen, BenhNhan, ChiTietLichHen, sequelize } = require('../models/index')

module.exports = { 
    // [GET] /api/getAll/:modelName
    getAll: async (req, res) => {
        try {
            const model = req.params.model
            const Model = sequelize.models[model]
            
            if (!Model) {
                return res.status(404).json({ message: 'Model not found' })
            }
            
            const results = await Model.findAll()
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // [GET] /api/getAllBacSiInfo
    getAllBacSiInfo: async (req, res) => {
        try {
            const fullBacSiInfo = (await sequelize.query(`EXEC DanhSachBacSi`))[0];
            const info = fullBacSiInfo.map(item => {
                return {
                    ma: item.ma,
                    ma_nguoi_dung: item.ma_nguoi_dung,
                    ho_ten: item.ho_ten,
                    gioi_tinh: item.gioi_tinh,
                    trang_thai: item.trang_thai,
                    ma_chuyen_khoa: item.ma_chuyen_khoa,
                    ten_chuyen_khoa: item.ten_chuyen_khoa,
                }
            })

            res.status(200).json(info.filter(item => item.trang_thai === 1));
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
}