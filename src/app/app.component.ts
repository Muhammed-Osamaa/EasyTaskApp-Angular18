import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
  users = DUMMY_USERS;
  findUserName?:string;
  userId!:string;

  
  onSelectHandl(value: string) {
    
    let findUserName = this.users.find((e) => e.id === value);
    if(findUserName){
      this.findUserName = findUserName.name
      this.userId = findUserName.id;
    }else {
      this.findUserName = "Hello World!"
    }
        
  }
}
