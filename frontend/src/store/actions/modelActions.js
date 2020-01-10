export const createModel = (model) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'CREATE_MODEL', model})
    }
};