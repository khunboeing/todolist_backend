import {
  createTaskOneHandler,
  createTasksHandler,
  deleteTaskHandler,
  findUniqueHandler,
  getTaskUniqueOrThrowHandler,
  getTasksHandler,
  updateTaskHandler,
  updateTaskOneHandler,
} from "./todolist_backend/todoList.handler";

export const AppRoutes = [
  //------ todolist --------
  {
    path: "/todolist/createTask",
    method: "post",
    action: createTasksHandler,
  },
  {
    path: "/todolist/createTaskOne",
    method: "post",
    action: createTaskOneHandler,
  },
  {
    path: "/todolist/getTasks",
    method: "post",
    action: getTasksHandler,
  },
  {
    path: "/todoList/updateTask",
    method: "post",
    action: updateTaskHandler,
  },
  {
    path: "/todoList/updateTaskOne",
    method: "post",
    action: updateTaskOneHandler,
  },
  {
    path: "/todoList/deleteTask",
    method: "post",
    action: deleteTaskHandler,
  },
  {
    path: "/todoList/getTaskUnique",
    method: "post",
    action: findUniqueHandler,
  },
  {
    path: "/todoList/getTaskUniqueOrThrowHandler",
    method: "post",
    action: getTaskUniqueOrThrowHandler,
  },

  //------ bin kitchen --------
];
