import { useDispatch, useSelector } from 'react-redux';
import { onFilterAC } from '../../../actions/actions';
import { StateType } from '../../../types';
import styles from './button-set.module.css';

export const ButtonSet = () => {

    const filter = useSelector((state: StateType) => state.filter);
    const dispatch = useDispatch();

    let allClassName = styles.button,
        todoClassName = styles.button,
        doneClassName = styles.button

    switch (filter) {
        case 'all':
            allClassName += ` ${styles.pressed}`;
            todoClassName = doneClassName = styles.button;
            break;
        case 'todo':
            todoClassName += ` ${styles.pressed}`;
            allClassName = doneClassName = styles.button;
            break;
        case 'done':
            doneClassName += ` ${styles.pressed}`;
            allClassName = todoClassName = styles.button;
            break;
        default:
            allClassName += ` ${styles.pressed}`;
            todoClassName = doneClassName = styles.button;
            break;
    }

    const onClickAll = () => {

        dispatch(onFilterAC('all'));
    };

    const onClickToDo = () => {
        dispatch(onFilterAC('todo'));
    };

    const onClickDone = () => {
        dispatch(onFilterAC('done'));
    };

    return (
        <div className={styles.container} >
            <div
                className={allClassName}
                onClick={onClickAll} >
                all
            </div>
            <div
                className={todoClassName}
                onClick={onClickToDo} >
                to do
            </div>
            <div
                className={doneClassName}
                onClick={onClickDone} >
                done
            </div>
        </div>
    )
}