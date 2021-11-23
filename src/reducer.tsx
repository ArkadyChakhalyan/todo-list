import { ItemType, StateType, ActionTypes } from "./types";

const initialState = {
    filter: 'all',
    todoList: [
        {
            id: 0,
            name: 'test',
            description: 'more information',
            done: false
        }
    ],
    searchTerm: '',
    id: 1
}

export const reducer = (state: StateType | undefined = initialState, action: ActionTypes): StateType => {

    switch (action.type) {
        case 'ON_DELETE':
            return onDelete(action.id, state);
        case 'ON_ADD':
            return onAdd(action.id, action.name, action.description, state);
        case 'ON_CHANGE':
            return onToggle(action.id, state);
        case 'ON_TOGGLE':
            return onToggleAll(state);
        case 'ON_SEARCH':
            return onSearch(action.search, state);
        case 'ON_FILTER':
            return onFilter(action.filter, state);
        default:
            return state;
    }
};


const onAdd = (id: number, name: string, description: string | undefined, state: StateType) => {

    const { todoList } = state;

    const newId = ++state.id;

    const newItem: ItemType = {
        id: id,
        name: name,
        description: description ? description : undefined,
        done: false
    };

    const newTodoList = [
        newItem,
        ...todoList
    ];

    return {
        ...state,
        todoList: newTodoList,
        id: newId
    }
};

const onDelete = (id: number, state: StateType) => {

    const { todoList } = state;

    const newId = ++state.id;

    const idx = todoList.findIndex((item: ItemType) => {
        return item.id === id;
    });

    const newTodoList = [
        ...todoList.slice(0, idx),
        ...todoList.slice(idx + 1)
    ];

    return {
        ...state,
        todoList: newTodoList,
        id: newId
    }
};

const onToggle = (id: number, state: StateType) => {

    const { todoList } = state;

    const idx = todoList.findIndex((item: ItemType) => {
        return item.id === id;
    });

    const { done } = todoList[idx];

    const newTodoListItem: ItemType = {
        ...todoList[idx],
        done: !done
    };

    const newTodoList = [
        ...todoList.slice(0, idx),
        newTodoListItem,
        ...todoList.slice(idx + 1)
    ];

    return {
        ...state,
        todoList: newTodoList,
        id: state.id
    }
};

const onToggleAll = (state: StateType) => {

    const { todoList } = state;

    let toggle = false;
    let newTodoList;
    todoList.map((item: ItemType) => {
        if (item.done === false) toggle = true;
        return true;
    })

    if (toggle) {
        newTodoList = todoList.map((item: ItemType) => {
            return {
                ...item,
                done: true
            }
        });
    } else {
        newTodoList = todoList.map((item: ItemType) => {
            return {
                ...item,
                done: false
            }
        });
    }

    return {
        ...state,
        todoList: newTodoList,
        id: state.id
    };
};

const onSearch = (search: string, state: StateType) => {
    return {
        ...state,
        searchTerm: search
    };
};

const onFilter = (filter: string, state: StateType) => {
    return {
        ...state,
        filter: filter
    };
};