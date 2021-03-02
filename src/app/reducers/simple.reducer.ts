import { Action } from '@ngrx/store'

export function simpleReducer(state: string = 'Hello World', action: Action)
{

console.log(action.type, state)

switch(action.type){
    case 'LITHUANIA':
        return state = 'Labas Pasauli'

    case 'RUSSIA':
        return state = 'Привет, Мир'

    default:
        return state;
}

}