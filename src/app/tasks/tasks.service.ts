import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TasksService {
    /**
     *
     */

    dummyTasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];
      constructor() {
        const tasks = localStorage.getItem('tasks');
        if(tasks) {
            this.dummyTasks = JSON.parse(tasks);
        }
        
    }
      getUserTasks(userId:string) {
       return this.dummyTasks.filter((e) => e.userId === userId);
      }

      deleteUserTasks(id: string) {
        this.dummyTasks = this.dummyTasks.filter((u) => u.id !== id);
        this.saveTasks();
      }
      
      addTasks(value: { title: string; summary: string; dueDate: string ,userId:string,
        id:string}) {
            this.dummyTasks.push(value);
            this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks',JSON.stringify(this.dummyTasks));
      }
}