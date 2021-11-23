import { AppHeader } from "../app-header/app.header";
import { AddTodo } from "../add-todo/add-todo";
import { TodoList } from "../todo-list/todo-list";
import { Tools } from "../tools/tools";
import { useSelector } from "react-redux";
import { StateType } from "../../types";
import styles from './app.module.css';

export const App = () => {

    const todoList = useSelector((state: StateType) => state.todoList);

    const tools = todoList.length > 0 ? <Tools /> : null;

    return (
        <div className={styles.container}>
            <AppHeader />
            <AddTodo />
            {tools}
            <TodoList />
        </div>
    )
};