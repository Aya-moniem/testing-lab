import { Component } from '@angular/core';
import {TodoFormComponent} from '../todo-form/todo-form.component'
import {TodoListComponent} from '../todo-list/todo-list.component'
@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent,TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  todolistArr : string[] = []
  receiveTodovalue(value : string){
    console.log("from parent", value)
    this.todolistArr.push(value);
  }

}
