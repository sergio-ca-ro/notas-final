const db = require ("../database/models");


let tasksController = {
    
    mostrar: function(req, res) {
        db.Task.findAll()
        .then(function(tasks) {
         res.render("index", {tasks: tasks})
        });

    },
    crear: function(req, res){
        db.Task.create({
            task: req.body.title
        })
        .then(()=>{
            res.redirect("/tasks")

        })

    },
    editar: function(req, res){
        db.Task.findByPk(req.params.id)
        .then(function(tasks){
            res.redirect("/tasks", {tasks:tasks});
        })
        
    },
    borrar: function(req, res){
        db.Task.destroy({where: {id: {[db.Sequelize.Op.like] : [req.params.id]} 
        }})
        .then(()=>{
            res.redirect("/tasks")

        })


        
    },
    mostrarTarea: function(req, res) {
        console.log(req.params.id)
    }

}
module.exports = tasksController;