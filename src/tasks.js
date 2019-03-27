import {generate as id} from 'shortid';

export default (() => {
return [
    { text: 'task 1', isChecked: false },
    { text: 'task 2', isChecked: true },
    { text: 'task 3', isChecked: false },
    { text: 'task 4', isChecked: true },
    { text: 'task 5', isChecked: false }
 ].map( (item) => {
     let number = id();
    item.id = number;
    item.key = number;

    return item
    } );
})(id);