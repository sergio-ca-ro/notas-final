var express = require('express');
var router = express.Router();
const tasksValidate = require('../middlewares/tasksValidate');
var tasksController = require ("../controllers/tasksController");

router.get('/', function(req, res, next) {
  res.redirect('/tasks');
});

/* GET users listing. */
router.post('/tasks/', tasksValidate, tasksController.crear);
router.post('/tasks/', tasksController.crear);
router.get('/tasks/', tasksController.mostrar);
router.patch('/tasks/:id', tasksController.editar);
router.delete('/tasks/:id', tasksController.borrar);
router.get('/tasks/:id', tasksController.mostrar);


module.exports = router;
