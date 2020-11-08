import { combineReducers } from 'redux';
import { combineSagas } from '../lib';

import project from './project';
import task from './task';

export default {
    rootReducer: combineReducers({ project: project.reducer, task: task.reducer }),
    rootSagas: combineSagas({ project: project.saga, task: task.saga })
};
