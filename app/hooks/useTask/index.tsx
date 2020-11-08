import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import Task from '../../store/modules/task';

function useTask() {
    const dispatch = useDispatch();
    const tasks = useSelector((store: RootState) => store.task.tasks);
    const total = useSelector((store: RootState) => store.task.total);
    const page = useSelector((store: RootState) => store.task.page);

    const fetchTasks = () => {
        dispatch(Task.actions.fetchTaskList.request(''));
    };

    return {
        tasks,
        total,
        page,
        fetchTasks
    };
}

export default useTask;
