import { initialState } from '../state'


const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_FORM": {
            return {
                ...state,
                form: action.data
            }
        }
        case "RESET_FORM": {
            return {
                ...state,
                form: initialState.form
            }
        }
        case "UPDATE_FEEDBACKS": {
            return {
                ...state,
                feedbacks: action.data
            }
        }
    }
    return state;
}

export default feedbackReducer;