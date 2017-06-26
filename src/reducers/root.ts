import { combineReducers, Reducer, applyMiddleware, Store } from 'redux';
import appsReducer from './AppsReducer';
import { Epic, combineEpics, createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { ActionObject } from '../actions/ActionObject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

export const rootReducer = combineReducers({
    apps: appsReducer,
});

const loadImagesAndLabels : Epic<ActionObject, any> = (action$, store) =>
    action$.ofType('LOAD_IMAGES_AND_LABELS')
    .map(_ => ({
        type: 'GOT_IMAGES_AND_LABELS',
        images: ['foo'],
        labels: ['bar']
    } as ActionObject));

export const middleware = applyMiddleware(createEpicMiddleware(combineEpics(
    loadImagesAndLabels
)))