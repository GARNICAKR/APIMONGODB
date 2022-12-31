import Task from '../models/Task';
import {getPagination} from '../libs/getPagination';
const taskController = {
    index: async (req, res) => {
        try {
            const {size,page}=req.query;
            console.log(size,"°||°",page);
            const {limit,offset}= getPagination(page,size);
             console.log(limit,"°||°",offset);
            const tasks = await Task.paginate({},{offset,limit});
            res.json(tasks);
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with retriving the tasks"
            })
        }

    },
    create: async (req, res) => {
        try {
            const { title, description, done } = req.body;
            //console.log(title);
            const newTask = new Task({ title, description, done });
            await newTask.save();
            res.json(newTask);
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with the creation of the new task"
            })
        }

    },
    showOne: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            res.json(task);
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with show the task"
            })
        }

    },
    update: async (req, res) => {
        try {
            const { title, description, done } = req.body;
            const update = await Task.findByIdAndUpdate(req.params.id, { title, description, done });
            res.redirect('/api/tasks');
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with update the tasks"
            })
        }

    },
    delete: async (req, res) => {
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.send('Eliminado');
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with delete the tasks"
            })
        }

    },
    findDone: async (req, res) => {
        try {
            const tasksDone = await Task.find({ done: true });
            res.json(tasksDone);
        } catch (error) {
            res.status(500).json({
                message: error.message || "someting goes wrong with the search the tasks"
            })
        }

    },


}
export default taskController;