import { ActionReducerMap } from '@ngrx/store';
import {Todo} from '../models/todo';
import todoReducer from './reducers/todos.reducer';
import {EntityState} from '@ngrx/entity';

export interface State {
  todos: EntityState<Todo>;
}

export const rootReducer: ActionReducerMap<State> = {
  todos: todoReducer
}

