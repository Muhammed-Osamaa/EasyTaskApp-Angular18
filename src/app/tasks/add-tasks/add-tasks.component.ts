import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  //@Input({required:true}) isShowAddTasks!:boolean;
  @Output() isShowAddTasks = new EventEmitter();
  
  enternedTitle!:string;
  enteredSummary = signal('');
  enteredDate!:string;
  private tasksService = inject(TasksService);
  @Input({required:true}) userId!:string;


  onVisible() {
    this.isShowAddTasks.emit();
  }

  onsubmit() {
    this.tasksService.addTasks({title:this.enternedTitle,
      summary:this.enteredSummary(),
      dueDate:this.enteredDate,
      userId:this.userId,
      id:Math.random().toString()})

  }
}

