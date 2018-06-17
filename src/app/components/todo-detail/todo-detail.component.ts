import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() public todo: Todo;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  removeTodo() {
    this.todoService.deleteTodo(this.todo);
  }

  changeDone(e) {
    this.todoService.changeDone(this.todo, e.checked);
  }

}
