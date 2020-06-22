import functions from '../functions'
// import { __fetch } from '../../services/fetch'
const fetchMock = require('mock-fetch')

let fetch = jest.fn()
let props = {
    updateFormState: jest.fn(),
    updateFeedbacks: jest.fn(),
    updateTrends: jest.fn(),
    form: {
        name: '',
        email: '',
        rating: 0,
        comment: '',
    },
    reset: jest.fn()
}

let event = {
    target: {
        name: 'Test name',
        value: 'Test value'
    },
    preventDefault: jest.fn()
}

let feedbacks = [
    {
        id: '',
        comment: '',
        createdAt: '',
        user: {}
    }
]


test('handleInput() - Should be called', () => {
    expect(functions.handleInput(event, props))
    expect(props.updateFormState).toHaveBeenCalled()
})

test('changeRating() - Should be called', () => {
    expect(functions.changeRating(1, 'test', props))
})

test('getFeedbacks() - Should be called', async () => {
    expect(functions.getFeedbacks(props))

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );
})

test('isValidForm() - Should be called', () => {
    expect(functions.isValidForm(props)).toEqual(false)
})

test('formSubmit() - Should be called', () => {
    props.form.name = 'Nadeem'
    props.form.email = 'nadeem.ahmad.na@outlook.com'
    props.form.comment = 'test'
    props.form.rating = 1
    expect(functions.formSubmit(event, props))
    functions.__fetch('/add_user', 'POST', props.form)
    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve(feedbacks)
        Promise.reject({})
    });
})