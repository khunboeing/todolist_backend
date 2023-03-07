"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskUniqueOrThrow = exports.getTaskUnique = exports.deleteTask = exports.updateTaskStatus = exports.updateTaskStatusOne = exports.getTasks = exports.createTaskOne = exports.createTasks = void 0;
const dbConnecter_1 = require("../config/dbConnecter");
const createTasks = (args) => { };
exports.createTasks = createTasks;
const createTaskOne = (args) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(args);
    const sql = `INSERT INTO boeing."TodoList"(task) VALUES ('${args.task}')`;
    const res = yield dbConnecter_1.db.query(sql);
    return res.rows;
});
exports.createTaskOne = createTaskOne;
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `SELECT * FROM boeing."TodoList"`;
    const res = yield dbConnecter_1.db.query(sql);
    return res.rows;
});
exports.getTasks = getTasks;
const updateTaskStatusOne = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `UPDATE boeing."TodoList" 
  SET status='DONE' 
  WHERE id = ${args.id} `;
    const res = yield dbConnecter_1.db.query(sql);
    return res.rows;
});
exports.updateTaskStatusOne = updateTaskStatusOne;
const updateTaskStatus = (args) => { };
exports.updateTaskStatus = updateTaskStatus;
const deleteTask = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `DELETE FROM boeing."TodoList"
  WHERE id = ${args.id}`;
    const res = yield dbConnecter_1.db.query(sql);
    return res.rows;
});
exports.deleteTask = deleteTask;
const getTaskUnique = (args) => { };
exports.getTaskUnique = getTaskUnique;
//return เป็นค่าว่าง (null)
const getTaskUniqueOrThrow = (args) => { };
exports.getTaskUniqueOrThrow = getTaskUniqueOrThrow;
//return เป็นค่า error
