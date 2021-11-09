import axios from "./axios";
import { Axios, AxiosResponse } from "axios";
import {Task} from "@/interfaces/Task";


export const addTask = async (task: Task) => await axios.post("/tasks",task);

export const getTask = async (): Promise<AxiosResponse<Task[]>> => await axios.get("/tasks");

export const deleteTask = async (id: string): Promise<AxiosResponse<Task[]>> => 
    await axios.delete("/tasks/"+id);