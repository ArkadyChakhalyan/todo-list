import { onAddAC, onToggleAllAC, onDeleteAC, onToggleAC, onSearchAC, onFilterAC } from './actions/actions';

export type ItemType = {
    id: number
    name: string
    description?: string
    done: boolean
}

export type StateType = {
    filter: string
    todoList: ItemType[]
    searchTerm: string
    id: number
}

export type ActionTypes = ReturnType<typeof onAddAC>
    | ReturnType<typeof onToggleAllAC>
    | ReturnType<typeof onDeleteAC>
    | ReturnType<typeof onToggleAC>
    | ReturnType<typeof onSearchAC>
    | ReturnType<typeof onFilterAC>
