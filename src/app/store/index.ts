import { ActionReducerMap } from '@ngrx/store';
import {Todo} from '../models/todo';
import todoReducer from './reducers/todos.reducer';

export interface State {
  todos: Todo[];
}

export const rootReducer: ActionReducerMap<State> = {
  todos: todoReducer
}

