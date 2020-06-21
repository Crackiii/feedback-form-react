import { initialState } from '../state'
import { act } from 'react-dom/test-utils'


const feedbackReducer = (state = initialState, action) => {
    console.log(action.type, action.data)
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
        case "UPDATE_TRENDS": {
            return {
                ...state,
                trends: {
                    labels: action.data.labels,
                    values: action.data.values
                }
            }
        }
    }
    return state;
}

export default feedbackReducer;