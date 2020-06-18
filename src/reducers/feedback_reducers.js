import { initialState } from '../state'


const feedbackReducer = (state = initialState, action) => {
    console.log(action.data)
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