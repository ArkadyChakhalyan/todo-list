const onDeleteAC = (id: number) => {
    return {
        type: 'ON_DELETE',
        id: id
    } as const;
};

const onAddAC = (id: number, name: string, description: string) => {
    return {
        type: 'ON_ADD',
        id: id,
        name: name,
        description: description
    } as const;
};

const onToggleAC = (id: number) => {
    return {
        type: 'ON_CHANGE',
        id: id
    } as const;
};

const onToggleAllAC = () => {
    return {
        type: 'ON_TOGGLE'
    } as const;
};

const onSearchAC = (search: string) => {
    return {
        type: 'ON_SEARCH',
        search: search
    } as const;
};

const onFilterAC = (filter: string) => {
    return {
        type: 'ON_FILTER',
        filter: filter
    } as const;
};

export {
    onAddAC,
    onDeleteAC,
    onToggleAllAC,
    onToggleAC,
    onSearchAC,
    onFilterAC,
}