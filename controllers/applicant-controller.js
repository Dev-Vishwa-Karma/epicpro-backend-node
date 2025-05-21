
const { Op } = require('sequelize');
const db = require('../models/index');

exports.getAllApplicant = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Current page number (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Number of items per page (default: 10)
        const offset = (page - 1) * pageSize;
        const applicants = await db.jobApplications.findAndCountAll({
            include: [
                {
                    model: db.jobPosition,
                    as: 'jobPosition',
                    attributes: [
                        'postionName',
                        'positionType'
                    ]
                },
            ],
            limit: pageSize,
            offset: offset,
            distinct: true,
            order: [
                ['createdAt', 'DESC']
                ]
        });
        const totalItems = applicants.count.length;
        const totalPages = Math.ceil(totalItems / pageSize);

        res.status(200).json({
            data: applicants.rows,
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
        console.log(
            'Error while fetching all users from database',
            error.message
        );

        res.status(500).json({ message: 'Error fetching jobs', error });
    }
};