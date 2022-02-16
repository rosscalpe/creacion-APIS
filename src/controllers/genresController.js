const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
               return res.status(200).json({
                    status: 200,
                    total: genres.length,
                    url: "api/genres",
                    data: genres
                })
                
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk({
                id: req.params.id
        })
            .then(genre => {
                res.status(200).json({
                    data: genre,
                    status: 200
                });
            });
    }

}

module.exports = genresController;