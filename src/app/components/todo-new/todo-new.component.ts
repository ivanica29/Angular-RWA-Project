import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  @Input() public newTodo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.newTodo = new Todo();
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
  }

}
