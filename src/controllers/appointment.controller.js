const { LichHen, BenhNhan } = require('../models/index');
const lichhen = require('../models/lichhen');
const calculateAge = require('../utils/calculate-age')

module.exports = {

    // [POST] /api/lichhen
    createAppointment: async (req, res) => {
        try {
            const body = req.body

            const benhNhan = await BenhNhan.create({
                ho_ten: body.ho_ten,
                tuoi: body.ngay_sinh ? calculateAge(body.ngay_sinh) : null,
                so_dien_thoai: body.so_dien_thoai,
            });

            const lichHen = await LichHen.create({
                tuoi: calculateAge(body.ngay_sinh),
                ghi_chu: body.ghi_chu.toString(),
                ma_benh_nhan: benhNhan.ma_benh_nhan,
                ngay_hen: body.ngay_hen ? new Date(body.ngay_hen) : null,
                ca: body.buoi_hen === 0 || body.buoi_hen === 1 ? body.buoi_hen : null,
                trang_thai: 0,
            })

            res.status(200).json({
                status: 'success',
                message: 'Appointment created successfully',
                data: {
                    benh_nhan: {
                        ma_benh_nhan: benhNhan.ma_benh_nhan,
                        ...benhNhan.dataValues,
                    },
                    lich_hen: {
                        ...lichHen.dataValues,
                    },
                }
            })
        } catch (error) {
            console.error('Error details:', error); // Log chi tiết lỗi
            res.status(500).json({
                status: 'error',
                message: 'Có lỗi xảy ra khi tạo lịch hẹn',
                errors: error
            });
        }
    }

}