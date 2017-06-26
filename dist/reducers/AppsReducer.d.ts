import { ActionObject } from '../actions/ActionObject';
export interface appReducerState {
    name: string;
    userid: string;
    task: string;
}
declare const _default: (state: appReducerState, action: ActionObject) => appReducerState;
export default _default;
