import { MouseEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { onDeleteAC, onToggleAC } from "../../actions/actions";
import { ItemType } from "../../types";
import styles from './todo-list-item.module.css';

type TodoListItemPropsTypes = {
    item: ItemType
}

export const TodoListItem = ({ item }: TodoListItemPropsTypes) => {

    const dispatch = useDispatch();

    const onDelete = (id: number) => {
        dispatch(onDeleteAC(id));
    };

    const onToggle = (id: number) => {
        dispatch(onToggleAC(id));
    };

    const { id, name, description, done } = item;

    let todoClassName = styles.text;

    if (done) todoClassName += ` ${styles.done}`;

    const descriptionText = useRef<HTMLParagraphElement>(null);
    const container = useRef<HTMLDivElement>(null);

    const [showMore, setShowMore] = useState<boolean>(false);

    const onMore = (e: MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();

        if (
            isTruncated(e.target)
            && !showMore
            && descriptionText.current
            && container.current
        ) {
            setShowMore(true);
            descriptionText.current.style.whiteSpace = 'normal';
            container.current.style.marginBottom = descriptionText.current.getBoundingClientRect().height + 'px';
        } else if (
            descriptionText.current
            && container.current
        ) {
            setShowMore(false);
            descriptionText.current.style.whiteSpace = 'nowrap';
            container.current.style.marginBottom = 10 + 'px';
        }
    };

    return (
        <div
            className={styles.container}
            ref={container}>
            <label className={styles.content} >
                <input
                    className={styles.checkbox}
                    onClick={() => onToggle(id)}
                    type='checkbox' />
                <p className={todoClassName} >
                    {name}
                </p>
                <p
                    className={styles.description}
                    ref={descriptionText}
                    onClick={(e) => onMore(e)} >
                    {description}
                </p>
            </label>
            <button
                className={styles.delete}
                onClick={() => onDelete(id)} >
                &times;
            </button>
        </div>
    );
};

function isTruncated(e: any) {
    var c = e.cloneNode(true);
    c.style.display = 'inline';
    c.style.width = 'auto';
    c.style.visibility = 'hidden';
    document.body.appendChild(c);
    const truncated = c.offsetWidth >= e.clientWidth;
    c.remove();
    return truncated;
}