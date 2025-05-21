const { Op, where } = require('sequelize');
const db = require('../models/index');

exports.getAllposition = async (req, res) => {
    try {
        // Get pagination parameters from query string
        const page = parseInt(req.query.page) || 1; // Current page number (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Number of items per page (default: 10)
        const offset = (page - 1) * pageSize;

        let whereConditions = {};
  
    
        const jobs = await db.jobPosition.findAndCountAll({
            include: [
                {
                    model: db.jobApplications,
                    as: 'jobApplications',
                    attributes: [] // Exclude jobApplications fields in results
                }
            ],
            attributes: [
                'id', 
                'postionName', 
                'positionType', 
                'positionStatus', 
                'positionStartDate',
                'positionEndDate',
                [db.Sequelize.fn('COUNT', db.Sequelize.col('id')), 'applicationCount']
            ],
            group: ['jobPosition.id'],
            limit: pageSize,
            offset: offset,
        });
        
        const totalItems = jobs.count.length; 
        const totalPages = Math.ceil(totalItems / pageSize);

        res.status(200).json({ 
            data: jobs.rows,
            pagination: {
                currentPage: page,
                pageSize: pageSize,
                totalItems: totalItems,
                totalPages: totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1
            }
        });
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error: error.message });
    }
};