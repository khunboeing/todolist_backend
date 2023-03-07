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
exports.getTaskUniqueOrThrowHandler = exports.findUniqueHandler = exports.deleteTaskHandler = exports.updateTaskHandler = exports.updateTaskOneHandler = exports.getTasksHandler = exports.createTaskOneHandler = exports.createTasksHandler = void 0;
const todoList_resolver_1 = require("./todoList.resolver");
const createTasksHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req", req.body);
        const result = yield (0, todoList_resolver_1.createTaskOne)(req.body.data[0]);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createTasksHandler = createTasksHandler;
const createTaskOneHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, todoList_resolver_1.createTaskOne)(req.body);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.createTaskOneHandler = createTaskOneHandler;
const getTasksHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, todoList_resolver_1.getTasks)();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getTasksHandler = getTasksHandler;
const updateTaskOneHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, todoList_resolver_1.updateTaskStatusOne)({
            id: args.id,
            status: args.status,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.updateTaskOneHandler = updateTaskOneHandler;
const updateTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, todoList_resolver_1.updateTaskStatus)({
            id: args.id,
            status: args.status,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.updateTaskHandler = updateTaskHandler;
const deleteTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, todoList_resolver_1.deleteTask)({
            id: args.id,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.deleteTaskHandler = deleteTaskHandler;
const findUniqueHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, todoList_resolver_1.getTaskUnique)({
            id: args.id,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.findUniqueHandler = findUniqueHandler;
const getTaskUniqueOrThrowHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, todoList_resolver_1.getTaskUniqueOrThrow)({
            id: args.id,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getTaskUniqueOrThrowHandler = getTaskUniqueOrThrowHandler;
