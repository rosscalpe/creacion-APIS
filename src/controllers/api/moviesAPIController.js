const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesAPIController = {
    list: (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
               return res.status(200).json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "api/movies",
                    },
                    data: movies
                })
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
               return res.status(200).json({
                   meta: {
                    status: 200,
                    total: genres.length,
                    url: "api/movies/detail/:id",
                   },
                   data: movie
               })

            });
        },
    create: (req, res) => {
        db.Movie.create(req.body)
        .then((movie)=> {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: movie.length,
                    url: 'api/movies/create'
                },
                data: movie,
            })
        })            
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        db.Movie.destroy({
            where: {
                id: movieId
            }
        })
        .then((response)=>{
            return res.json(response)})
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesAPIController;