import { ActionObject } from '../actions/ActionObject'

export interface appReducerState {
    name: string,
    userid: string,
    task: string,
    images: string[],
    labels: string[],
}

const initialState: appReducerState = {
    name: '',
    userid: 't-majaya@microsoft.com',
    task: 'acne',
    images: [],
    labels: []
};

export default (state = initialState, action: ActionObject) => {
    switch(action.type) {
        case 'UPDATE_APP_NAME':
            console.log('updated name')
            return {
                ...state,
                name: action.name
            };
        case 'GOT_IMAGES_AND_LABELS':
            return {
                ...state,
                images: action.images,
                labels: action.labels
            };
        default:
            return state;
    }
}