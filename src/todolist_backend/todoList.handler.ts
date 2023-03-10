import { Request, Response } from "express";
import {
  createTasks,
  createTaskOne,
  deleteTask,
  getTaskUnique,
  getTaskUniqueOrThrow,
  getTasks,
  updateTaskStatus,
  updateTaskStatusOne,
} from "./todoList.resolver";

export const createTasksHandler = async (req: Request, res: Response) => {
  try {
    console.log("req", req.body);
    const result = await createTaskOne(req.body.data[0]);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createTaskOneHandler = async (req: Request, res: Response) => {
  try {
    const result = await createTaskOne(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const result = await getTasks();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTaskOneHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateTaskStatusOne({
      id: args.id,
      status: args.status,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateTaskStatus({
      id: args.id,
      status: args.status,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await deleteTask({
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const findUniqueHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await getTaskUnique({
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getTaskUniqueOrThrowHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;
  try {
    const result = await getTaskUniqueOrThrow({
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
