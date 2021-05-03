const db = require ("../database/models");

let tasksController = {
    
    crear: function(req, res){
        db.Task.create({
            task: req.body.title
        })
        .then(()=>{
            res.redirect("/tasks")

        })
    },
    
    mostrar: function(req, res) {
        db.Task.findAll()
        .then(function(tasks) {
            if (req.params.id != undefined){
                db.Task.findByPk(req.params.id)
                .then(function(taskEditar) {
                    res.render('index', {tasks:tasks, taskEditar:taskEditar});
                })
            }else{ 
            res.render('index', {tasks:tasks});
            }
        });
    },
    
    editar: function(req, res){
        // db.Task.findByPk(req.params.id)
        // .then(function( tasks){
        //      res.render("index", {tasks:taskEditar});
            
        // });
        db.Task.update({
            task: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect("/tasks")
        })
        
    },
    borrar: function(req, res){
        db.Task.destroy({where: {id: {[db.Sequelize.Op.like] : [req.params.id]} 
        }})
        .then(()=>{
             res.redirect("/tasks")

        })

    },
   
   

}
module.exports = tasksController;