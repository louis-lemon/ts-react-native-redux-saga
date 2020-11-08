import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib';
import { IError } from 'apis/modules/project';

export interface IProject {
    id: string;
    name: string;
    createdAt: Date;
}

export interface ProjectState {
    project: IProject | null;
    message: string;
}

const FETCH_PROJECT_BY_ID = createAsyncAction('project/FETCH_PROJECT_BY_ID');
export const fetchProjectById = createActionEntity<string, IProject, IError>(FETCH_PROJECT_BY_ID);

const actions = { fetchProjectById };
const state: ProjectState = {
    project: null,
    message: '',
};

const reducer = createCustomReducer(state, actions)
    .handleAction(fetchProjectById.success, (state, action) => {
        return { ...state, project: action.payload };
    })
    .handleAction(fetchProjectById.failure, (state, action) => {
        return { ...state, message: action.payload.message };
    });

export default reducer;
