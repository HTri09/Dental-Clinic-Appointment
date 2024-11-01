const { BacSi, sequelize } = require('../models/index');

const getAllBacSi = async (req, res) => {
    try {
        // Define parameters for the stored procedure
        const bacSiId = 6; // Replace with actual ID as needed
        const startDate = '2024-09-01'; // Corrected date format
        const endDate = '2024-09-30';

        // Execute the stored procedure
        const [results] = await sequelize.query(
            `EXEC DanhSachLichLamViecBacSi :startDate, :endDate`,
            {
                replacements: { startDate, endDate },
                type: sequelize.QueryTypes.RAW, // Use QueryTypes.SELECT if you expect results
            }
        );

        // Return the results as JSON
        res.status(200).json(results);
    } catch (error) {
        console.error('Error executing stored procedure:', error); // Log the error for debugging
        res.status(500).json({ error: error });
    }
};

module.exports = {
    getAllBacSi,
};
