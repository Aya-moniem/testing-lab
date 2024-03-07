import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
@Input () list :string[] = [];

deleteTodo(index: any) {
  this.list.splice(index, 1);
}
}
