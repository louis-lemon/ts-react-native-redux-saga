import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib';
import { IError, TaskResponse } from 'apis/modules/task';

export interface ITask {
    id: string;
    name: string;
    point: number;
    createdAt: Date;
}

export interface TaskState {
    tasks: ITask[];
    total: number | null;
    page: number | null;
    message: string;
}

const FETCH_TASK_LIST = createAsyncAction('task/FETCH_TASK_LIST');
export const fetchTaskList = createActionEntity<string, TaskResponse, IError>(FETCH_TASK_LIST);

const actions = { fetchTaskList };
const state: TaskState = {
    tasks: [],
    message: '',
    page: null,
    total: null,
};

const reducer = createCustomReducer(state, actions)
    .handleAction(fetchTaskList.success, (state, action) => {
        return {
            ...state,
            tasks: action.payload.tasks,
            page: action.payload.page,
            total: action.payload.total
        };
    })
    .handleAction(fetchTaskList.failure, (state, action) => {
        return {
            ...state,
            message: action.payload.message
        };
    });

export default reducer;
