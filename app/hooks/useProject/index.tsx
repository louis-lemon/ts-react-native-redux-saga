import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import Project from '../../store/modules/project';

function useProject() {
    const dispatch = useDispatch();
    const project = useSelector((store: RootState) => store.project.project);

    const fetchProjectById = (projectId: string) => {
        dispatch(Project.actions.fetchProjectById.request(projectId));
    };

    return {
        project,
        fetchProjectById
    };
}

export default useProject;
