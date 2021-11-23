import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddAC } from '../../actions/actions';
import { StateType } from '../../types';
import styles from './add-todo.module.css';

export const AddTodo = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (name !== '') setDisabled(false);

        return () => {
            setDisabled(true);
        };
    }, [name])
    const id = useSelector((state:StateType) => state.id);

    const dispatch = useDispatch();

    const onSubmit = () => {
        if (name !== '') {
            dispatch(onAddAC(id, name, description));
            setName('');
            setDescription('');
        }

        setDisabled(true);
    };

    return (
        <Fragment>
        <div
            className={styles.container}
            onKeyPress={(e) => {
                if (e.key === 'Enter') onSubmit();
            }} >
            <input
                className={styles.todo}
                placeholder='TODO'
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                value={name} />
            <textarea
                className={styles.description}
                placeholder='Description'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') e.preventDefault();
                }}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                value={description} />
            <button
                className={styles.button}
                disabled={disabled}
                onClick={onSubmit} >
                add
            </button>
        </div>
        </Fragment>
    )
};