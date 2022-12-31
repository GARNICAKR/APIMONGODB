"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Task = _interopRequireDefault(require("../models/Task"));
var _getPagination2 = require("../libs/getPagination");
var taskController = {
  index: function () {
    var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, size, page, _getPagination, limit, offset, tasks;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, size = _req$query.size, page = _req$query.page;
              console.log(size, "°||°", page);
              _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
              console.log(limit, "°||°", offset);
              _context.next = 7;
              return _Task["default"].paginate({}, {
                offset: offset,
                limit: limit
              });
            case 7:
              tasks = _context.sent;
              res.json(tasks);
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                message: _context.t0.message || "someting goes wrong with retriving the tasks"
              });
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    function index(_x, _x2) {
      return _index.apply(this, arguments);
    }
    return index;
  }(),
  create: function () {
    var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, title, description, done, newTask;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, title = _req$body.title, description = _req$body.description, done = _req$body.done; //console.log(title);
              newTask = new _Task["default"]({
                title: title,
                description: description,
                done: done
              });
              _context2.next = 5;
              return newTask.save();
            case 5:
              res.json(newTask);
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              res.status(500).json({
                message: _context2.t0.message || "someting goes wrong with the creation of the new task"
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));
    function create(_x3, _x4) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  showOne: function () {
    var _showOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var task;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _Task["default"].findById(req.params.id);
            case 3:
              task = _context3.sent;
              res.json(task);
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              res.status(500).json({
                message: _context3.t0.message || "someting goes wrong with show the task"
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    function showOne(_x5, _x6) {
      return _showOne.apply(this, arguments);
    }
    return showOne;
  }(),
  update: function () {
    var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var _req$body2, title, description, done, _update2;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, done = _req$body2.done;
              _context4.next = 4;
              return _Task["default"].findByIdAndUpdate(req.params.id, {
                title: title,
                description: description,
                done: done
              });
            case 4:
              _update2 = _context4.sent;
              res.redirect('/api/tasks');
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              res.status(500).json({
                message: _context4.t0.message || "someting goes wrong with update the tasks"
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));
    function update(_x7, _x8) {
      return _update.apply(this, arguments);
    }
    return update;
  }(),
  "delete": function () {
    var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _Task["default"].findByIdAndDelete(req.params.id);
            case 3:
              res.send('Eliminado');
              _context5.next = 9;
              break;
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              res.status(500).json({
                message: _context5.t0.message || "someting goes wrong with delete the tasks"
              });
            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 6]]);
    }));
    function _delete(_x9, _x10) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }(),
  findDone: function () {
    var _findDone = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var tasksDone;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _Task["default"].find({
                done: true
              });
            case 3:
              tasksDone = _context6.sent;
              res.json(tasksDone);
              _context6.next = 10;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              res.status(500).json({
                message: _context6.t0.message || "someting goes wrong with the search the tasks"
              });
            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 7]]);
    }));
    function findDone(_x11, _x12) {
      return _findDone.apply(this, arguments);
    }
    return findDone;
  }()
};
var _default = taskController;
exports["default"] = _default;