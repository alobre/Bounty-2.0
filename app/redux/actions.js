export const SET_RBSHEET = 'SET_RBSHEET'

export const setRBSheet = (RBSheet) => dispatch =>{
    dispatch({
        type: SET_RBSHEET,
        payload: RBSheet
    })
} 