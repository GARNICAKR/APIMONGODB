import express from "express";
import taskController from '../controllers/taskController';
//const taskController =require('../controllers/taskController');
const router=express.Router();

router.route('/')
.get(taskController.index)
.post(taskController.create);
router.get('/done',taskController.findDone);
router.route('/:id')
    .get(taskController.showOne)
    .put(taskController.update)
    .delete(taskController.delete);

module.exports=router;