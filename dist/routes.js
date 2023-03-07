"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const todoList_handler_1 = require("./todolist_backend/todoList.handler");
exports.AppRoutes = [
    //------ todolist --------
    {
        path: "/todolist/createTask",
        method: "post",
        action: todoList_handler_1.createTasksHandler,
    },
    {
        path: "/todolist/createTaskOne",
        method: "post",
        action: todoList_handler_1.createTaskOneHandler,
    },
    {
        path: "/todolist/getTasks",
        method: "post",
        action: todoList_handler_1.getTasksHandler,
    },
    {
        path: "/todoList/updateTask",
        method: "post",
        action: todoList_handler_1.updateTaskHandler,
    },
    {
        path: "/todoList/updateTaskOne",
        method: "post",
        action: todoList_handler_1.updateTaskOneHandler,
    },
    {
        path: "/todoList/deleteTask",
        method: "post",
        action: todoList_handler_1.deleteTaskHandler,
    },
    {
        path: "/todoList/getTaskUnique",
        method: "post",
        action: todoList_handler_1.findUniqueHandler,
    },
    {
        path: "/todoList/getTaskUniqueOrThrowHandler",
        method: "post",
        action: todoList_handler_1.getTaskUniqueOrThrowHandler,
    },
    //------ bin kitchen --------
];
