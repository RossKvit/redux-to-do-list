import C from '../constants';
import {generate as id} from 'shortid';


export function createItem (e){
    e.preventDefault();
    let textarea = e.target.parentNode.querySelector('textarea');

    if(textarea.value.trim() === '' ) return;

    let item = {
        id: id(),
        text: textarea.value,
        isChecked: false
    };

    textarea.value = '';

    return {
        "type": C.CREATE_ITEM,
        "payload": item
    }
}

export function deleteItem (id){
    return {
        "type": C.DELETE_ITEM,
        "payload": id
    }
}

export function toggleCheckItem (id){
    return {
        "type": C.TOGGLE_CHECK_ITEM,
        "payload": id
    }
}

export function editItem (id, text){
    return {
        "type": C.EDIT_ITEM,
        "payload": {
            id: id,
            text: text,
        }
    }
}


