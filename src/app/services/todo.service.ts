import {Todo} from '../models/todo';
import { Store} from '@ngrx/store';
import {State} from '../store';
import {AddTodo} from '../store/actions';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {

  todos$: Observable<Todo[]>;

  constructor(private store$: Store<State>) {
    this.todos$ = this.store$.select(state => state.todos);
  }

  addTodo(todo: Todo) {
    this.store$.dispatch(new AddTodo(todo));
  }
}
