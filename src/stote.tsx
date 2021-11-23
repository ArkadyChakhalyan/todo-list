import { createStore } from 'redux';
import { reducer } from './reducer';

const persistedState = localStorage.getItem('todoState')
    ? JSON.parse(localStorage.getItem('todoState') || '')
    : undefined;

export const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('todoState', JSON.stringify(store.getState()))
});