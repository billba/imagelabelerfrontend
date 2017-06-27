import { combineReducers, Reducer, applyMiddleware, Store } from 'redux';
import appsReducer from './AppsReducer';
import { Epic, combineEpics, createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { ActionObject } from '../actions/ActionObject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

export const rootReducer = combineReducers({
    apps: appsReducer,
});

const loadImagesAndLabels : Epic<ActionObject, any> = (action$, store) =>
    action$.ofType('LOAD_IMAGES_AND_LABELS')
    .flatMap(_ =>
        fetch('http://getImages')
        .then(response => response.json())
        .then(imagesResponse =>
            fetch('http://getLabels')
            .then(response => response.json())
            .then(labelsResponse => ({
                type: 'GOT_IMAGES_AND_LABELS',
                labels: labelsResponse.someFieldName,
                images: imagesResponse.someFieldName
            } as ActionObject))
        )
    );

export const middleware = applyMiddleware(createEpicMiddleware(combineEpics(
    loadImagesAndLabels
)))