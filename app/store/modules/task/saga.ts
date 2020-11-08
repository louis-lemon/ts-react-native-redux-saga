import { takeEvery } from 'redux-saga/effects';
import API from '../../../apis/modules/task';
import { createAsyncSaga } from '../../lib';
import { fetchTaskList } from './reducer';

const asyncFetchTaskListSaga = createAsyncSaga(fetchTaskList, API.fetchTaskList);

export default [
    takeEvery(fetchTaskList.request, asyncFetchTaskListSaga)
];
