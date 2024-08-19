import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() findUserName?: string;
  @Input({ required: true }) userId!: string;
  deleteTaskId!: string;
  isShowAddTasks!: boolean;
  /**
   *
   */
  constructor(private TasksService:TasksService) {     
  }
 

  get dummyTasksFilter() {
    return this.TasksService.getUserTasks(this.userId);
  }

 
  onShowAddTasks() {
    this.isShowAddTasks = !this.isShowAddTasks;
  }
  
  
}
