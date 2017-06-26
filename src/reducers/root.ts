import { combineReducers, Reducer, applyMiddleware, Store } from 'redux';
import appsReducer from './AppsReducer';
import { Epic, combineEpics, createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { ActionObject } from '../actions/ActionObject';

export const rootReducer = combineReducers({
    apps: appsReducer,
});

const loadImagesAndLabels : Epic<ActionObject,any> = (action$) =>
    action$.ofType('LOAD_IMAGES_AND_LABELS')
    .map(_ => ({
        type: 'GOT_IMAGES_AND_LABELS',
        images: ['foo'],
        labels: ['bar']
    }));

export const middleware = applyMiddleware(createEpicMiddleware(combineEpics(
    loadImagesAndLabels
)))