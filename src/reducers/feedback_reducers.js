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
        case "UPDATE_TRENDS": {
            return {
                ...state,
                trends: {
                    labels: action.data.labels,
                    values: action.data.values
                }
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default feedbackReducer;