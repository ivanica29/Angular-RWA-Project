import {Todo} from '../models/todo';
import { Store} from '@ngrx/store';
import {State} from '../store';
import {AddTodo, DeleteTodo, ChangeDone, DeleteAll} from '../store/actions';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EntityState} from '@ngrx/entity';

@Injectable()
export class TodoService {

  todos$: Observable<EntityState<Todo>>;

  constructor(private store$: Store<State>) {
    this.todos$ = this.store$.select(state => state.todos);
  }

  addTodo(todo: Todo) {
    todo = {
      ...todo,
      id: + new Date()
    };
    this.store$.dispatch(new AddTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.store$.dispatch(new DeleteTodo(todo));
  }

  changeDone(todo: Todo, done: boolean) {
    this.store$.dispatch(new ChangeDone(todo, done));
  }

  deleteAll() {
    this.store$.dispatch(new DeleteAll());
  }
}
