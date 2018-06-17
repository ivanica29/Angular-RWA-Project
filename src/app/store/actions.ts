import {Action} from '@ngrx/store';
import {Todo} from '../models/todo';

export const ADD_TODO = 'Add todo';

export class AddTodo implements Action {
  type = ADD_TODO;
  todo: Todo;
  constructor(todo: Todo) {
    this.todo = {...todo};
  }
}