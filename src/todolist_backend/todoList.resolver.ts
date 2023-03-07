import {
  ICreateTask,
  IDeleteTask,
  IUpdateTaskStatus,
} from "./todoList.interface";
import { db } from "../config/dbConnecter";

export const createTasks = (args: ICreateTask) => {};

export const createTaskOne = async (args: { task: string }) => {
  console.log(args);
  const sql = `INSERT INTO boeing."TodoList"(task) VALUES ('${args.task}')`;
  const res = await db.query(sql);
  return res.rows;
};

export const getTasks = async () => {
  const sql = `SELECT * FROM boeing."TodoList"`;
  const res = await db.query(sql);
  return res.rows;
};

export const updateTaskStatusOne = async (args: IUpdateTaskStatus) => {
  const sql = `UPDATE boeing."TodoList" 
  SET status='DONE' 
  WHERE id = ${args.id} `;
  const res = await db.query(sql);
  return res.rows;
};

export const updateTaskStatus = (args: IUpdateTaskStatus) => {};

export const deleteTask = async (args: IDeleteTask) => {
  const sql = `DELETE FROM boeing."TodoList"
  WHERE id = ${args.id}`;
  const res = await db.query(sql);
  return res.rows;
};

export const getTaskUnique = (args: { id: number }) => {};

//return เป็นค่าว่าง (null)

export const getTaskUniqueOrThrow = (args: { id: number }) => {};
//return เป็นค่า error
