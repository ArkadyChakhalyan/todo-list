import { useSelector } from "react-redux";
import { ItemType, StateType } from "../../types";
import { TodoListItem } from "../todo-list-item/todo-list-item";
import styles from './todo-list.module.css';

export const TodoList = () => {

    const todoList = useSelector((state: StateType) => state.todoList);
    const search = useSelector((state: StateType) => state.searchTerm);
    const filter = useSelector((state: StateType) => state.filter);

    const todos = todoList
        .filter((item) => {
            return (
                item.name.toLowerCase().includes(search.toLowerCase())
                || (
                    item.description ?
                        item.description.toLowerCase().includes(search.toLowerCase())
                        : false
                )
            );
        })
        .filter((item) => {
            if (filter === 'done') {
                return item.done;
            }
            else if (filter === 'todo') {
                return !item.done;
            } else {
                return true;
            }
        })
        .map((item: ItemType) => {
            return (
                <li key={item.id} >
                    <TodoListItem item={item} />
                </li>
            )
        });

    return (
        <ul className={styles.container}>
            {todos}
        </ul>
    );
};