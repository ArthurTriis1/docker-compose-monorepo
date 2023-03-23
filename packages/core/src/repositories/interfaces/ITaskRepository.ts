import { Task } from "@src/models/Task";

export interface ITaskRepository {
    getAll(): Task[] | Promise<Task[]>;
}