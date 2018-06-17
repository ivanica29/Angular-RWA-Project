import { Action } from '@ngrx/store';
import {Todo} from '../../models/todo';
import {ADD_TODO, AddTodo} from '../actions';

const initialState: Todo[] = [
];

export default function (state: Todo[] = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      const {todo} = action as AddTodo;
      return [...state, todo];
    }
  }
}
