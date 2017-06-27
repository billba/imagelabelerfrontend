import { combineReducers, Reducer, applyMiddleware, Store } from 'redux';
import appsReducer from './AppsReducer';
import { Epic, combineEpics, createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { ActionObject } from '../actions/ActionObject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

export const rootReducer = combineReducers({
    apps: appsReducer,
});

const loadImagesAndLabels : Epic<ActionObject, any> = (action$, store) =>
    action$.ofType('LOAD_IMAGES_AND_LABELS')
    .zip(
        fetch('http://getImages').then(response => response.json()),
        fetch('http://getLabels').then(response => response.json())
    )
    .map(imagesAndLabels => ({
        type: 'GOT_IMAGES_AND_LABELS',
        images: imagesAndLabels[0].images,
        labels: imagesAndLabels[1].labels
    } as ActionObject));

export const middleware = applyMiddleware(createEpicMiddleware(combineEpics(
    loadImagesAndLabels
)))