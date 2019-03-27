import C from '../constants';
import tasks from '../tasks'

const defaultState = {
    items: tasks
}

export default function ( state = defaultState, action ){
    const { type, payload } = action;

    switch (type){
        case C.CREATE_ITEM :
            return {
                ...state,
                items: [
                    ...state.items,
                    payload
                ]
            };
        case C.DELETE_ITEM :
            const newItems = state.items.filter( ( item ) => item.id !== payload );
            return {
                ...state,
                items: newItems
            };
        case C.TOGGLE_CHECK_ITEM :
            const listItems = state.items.map(
                            ( item ) => {
                                if( item.id === payload ){
                                    item.isChecked = item.isChecked !== true;
                                }
                                return item;
                            }
                        );
            return {
                ...state,
                items: listItems
            };
        case C.EDIT_ITEM :
            const editedListItems = state.items.map(
                ( item ) => {
                    if( item.id === payload.id ){
                        item.text = payload.text;
                    }
                    return item;
                }
            );
            return {
                ...state,
                items: editedListItems
            };
        default:
            return state;
    }

}