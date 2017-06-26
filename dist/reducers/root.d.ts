import { Reducer, Store } from 'redux';
export declare const rootReducer: Reducer<{}>;
export declare const middleware: <S>(next: (reducer: Reducer<S>, preloadedState?: S) => Store<S>) => (reducer: Reducer<S>, preloadedState?: S) => Store<S>;
