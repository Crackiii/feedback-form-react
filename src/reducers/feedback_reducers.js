import { initialState } from '../state'


const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_FORM": {
            return {
                ...state,
                form: action.data
            }
        }
    }
    return state;
}

export default feedbackReducer;