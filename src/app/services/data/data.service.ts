import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://127.0.0.1:8080';

  async loadTasks(): Promise<Task[]> {
    const data = await fetch(`${this.baseUrl}/tasks`);
    return await data.json() ?? {};
  }

  async updateTaskState(taskId: number, newState: string) {
    await fetch(`${this.baseUrl}/tasks/${taskId}/${newState}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', },
    });
  }

  async saveTask(task: Task) {
    if(task.id === -1) { await this.createNewTask(task);
    }else{ await this.updateTask(task); }
  }

  async createNewTask(task: Task) {
    await fetch(`${this.baseUrl}/tasks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify(task),
    });
  }

  async updateTask(task: Task) {
    await fetch(`${this.baseUrl}/tasks/${task.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify(task),
    });
  }

  async deleteTask(taskId: number) {
    await fetch(`${this.baseUrl}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', },
    });
  }

}