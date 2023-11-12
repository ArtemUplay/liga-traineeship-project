import { BasicAgent } from './basic.agent';
import {
  GetAllTasksQuery,
  GetAllTasksResponse,
  GetTaskResponse,
  PostTaskRequest,
  PostTaskResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from 'api/model/tasks.model';

class TasksAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API as string);
  }

  async getTask(taskId: number): Promise<GetTaskResponse> {
    const { data } = await this.http.get<GetTaskResponse>(`/tasks/${taskId}`);

    return data;
  }

  async getAllTasks(params?: GetAllTasksQuery): Promise<GetAllTasksResponse> {
    const { data } = await this.http.get<GetAllTasksResponse>(`/tasks`, {
      params,
    });

    return data;
  }

  async updateTask(taskId: number, newData: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    const { data } = await this.http.patch<UpdateTaskResponse>(`/tasks/${taskId}`, newData);

    return data;
  }

  async deleteTask(taskId: number): Promise<void> {
    await this.http.delete(`/tasks/${taskId}`);
  }

  async postTask(newData: PostTaskRequest): Promise<PostTaskResponse> {
    const { data } = await this.http.post<PostTaskResponse>('/tasks', newData);

    return data;
  }
}

export const TasksAgentIntance = new TasksAgent();
