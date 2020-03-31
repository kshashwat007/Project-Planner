export const createProject = (project) => {
    return(dispatch, getstate) => {
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
};