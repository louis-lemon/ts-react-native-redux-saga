import { takeEvery } from 'redux-saga/effects';

import API from '../../../apis/modules/project';
import { createAsyncSaga } from '../../lib';
import { fetchProjectById } from './reducer';

const asyncFetchProjectSaga = createAsyncSaga(fetchProjectById, API.fetchProjectById);

export default [
    takeEvery(fetchProjectById.request, asyncFetchProjectSaga)
];
