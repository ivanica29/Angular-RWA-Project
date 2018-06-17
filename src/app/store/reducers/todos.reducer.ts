import { Action } from '@ngrx/store';
import {Todo} from '../../models/todo';
import {ADD_TODO, AddTodo, CHANGE_DONE, DELETE_TODO, DeleteTodo, ChangeDone} from '../actions';

const initialState: Todo[] = [
];

export default function (state: Todo[] = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      const {todo} = action as AddTodo;
      return [...state, todo];
    }
    case DELETE_TODO: {
      const {todo} = action as DeleteTodo;
      return state.filter( item => {
        console.log(todo);
        return item.title !== todo.title;
      });
    }
    case CHANGE_DONE: {
      const {todo, done} = action as ChangeDone;
      return state.map( item => {
        if (item.title === todo.title) {
          item.done = done;
        }
        return item;
      });
    }
  }
}
