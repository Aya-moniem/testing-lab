import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display todo list items with delete buttons', () => {
    component.list = ['Task 1', 'Task 2', 'Task 3'];
    fixture.detectChanges();

    const todoItems = fixture.nativeElement.querySelectorAll('.card-body .mb-3');
    expect(todoItems.length).toEqual(3);

    expect(todoItems[0].textContent).toContain('Task 1');
    expect(todoItems[1].textContent).toContain('Task 2');
    expect(todoItems[2].textContent).toContain('Task 3');

 
    const deleteButton = todoItems[1].querySelector('.btn-danger');
    deleteButton.click();
    fixture.detectChanges();


    const updatedTodoItems = fixture.nativeElement.querySelectorAll('.card-body .mb-3');
    expect(updatedTodoItems.length).toEqual(2);
    expect(updatedTodoItems[0].textContent).toContain('Task 2 Delete');
    expect(updatedTodoItems[1].textContent).toContain('Task 3');
  });

});
