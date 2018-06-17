import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  @Input() public title: string;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo({ title: this.title, done: false });
  }

}
