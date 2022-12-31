"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _taskController = _interopRequireDefault(require("../controllers/taskController"));
//const taskController =require('../controllers/taskController');
var router = _express["default"].Router();
router.route('/').get(_taskController["default"].index).post(_taskController["default"].create);
router.get('/done', _taskController["default"].findDone);
router.route('/:id').get(_taskController["default"].showOne).put(_taskController["default"].update)["delete"](_taskController["default"]["delete"]);
module.exports = router;