import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todoValue : string = ''
  @Output () sendTodoValue = new EventEmitter<string>();
  
  handelInputChange(e : any){
    this.todoValue = e.target.value
      e.target.value = ''
    
}
  handelAddTodo(){
    console.log(this.todoValue)
    this.sendTodoValue.emit(this.todoValue)
    this.todoValue =''
  
  }
 

}
  
 


