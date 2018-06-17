import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';
import {ADD_TODO, AddTodo, CHANGE_DONE, DELETE_TODO, DeleteTodo, ChangeDone, DELETE_ALL} from '../actions';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

export interface State extends EntityState<Todo> {
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({});

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      const {todo} = action as AddTodo;
      return adapter.addOne(todo, state);
    }
    case DELETE_TODO: {
      const {todo} = action as DeleteTodo;
      return adapter.removeOne(todo.id, state);
    }
    case CHANGE_DONE: {
      const {todo} = action as ChangeDone;
      return adapter.updateOne(todo, state);
    }
    case DELETE_ALL: {
      return adapter.removeAll(state);
    }
  }
}
