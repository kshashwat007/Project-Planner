export const createProject = (project) => {
    return(dispatch, getstate, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getstate().firebase.profile;
        const authorID = getstate().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorID,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};