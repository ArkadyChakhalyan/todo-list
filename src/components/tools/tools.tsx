import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { onSearchAC, onToggleAllAC } from '../../actions/actions';
import { ButtonSet } from './button-set/button-set';
import styles from './tools.module.css';

export const Tools = () => {

    const dispatch = useDispatch();

    const onToggleAll = () => {
        dispatch(onToggleAllAC());
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onSearchAC(e.target.value));
    };

    return (
        <div className={styles.container} >
            <button
                className={styles.button}
                onClick={onToggleAll} >
                toggle all
            </button>
            <input
                className={styles.search}
                placeholder='Search'
                onChange={onChange} />
            <ButtonSet />
        </div>
    );
};