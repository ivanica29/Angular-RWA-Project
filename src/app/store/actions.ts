import {Action} from '@ngrx/store';
import {Todo} from '../models/todo';

export const ADD_TODO = 'Add todo';
export const DELETE_TODO = 'Delete todo';
export const CHANGE_DONE = 'Change done';

export class AddTodo implements Action {
  type = ADD_TODO;
  todo: Todo;
  constructor(todo: Todo) {
    this.todo = {...todo};
  }
}

export class DeleteTodo implements Action {
  type = DELETE_TODO;
  todo: Todo;
  constructor(todo: Todo) {
    this.todo = { ...todo};
  }
}

export class ChangeDone implements Action {
  type = CHANGE_DONE;
  done: boolean;
  todo: Todo;
  constructor(todo: Todo, done: boolean) {
    this.todo = {...todo};
    this.done = done;
  }
}
