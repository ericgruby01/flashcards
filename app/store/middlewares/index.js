import { _storeData, _getData, _resetData } from '../../utils/asyncstorage';

const removeDeletedContent = content => {
    return Object.values(content)
    .filter(item => !item.deleted)
    .reduce((o, i) => { o[i.id] = i; return o }, {})
}

export default store => next => action => {
    if (action.get) {
        _getData(action.get).then(result => {
            const newAction = {...action};
            newAction.value = result ? removeDeletedContent(JSON.parse(result)) : result
            newAction.set = action.get;
            newAction.get = undefined;
            return store.dispatch(newAction);
        })
    }
    const returnValue = next(action);
    if (action.set) {
        _storeData(action.set, store.getState()[action.set])
    }
    return returnValue;
}