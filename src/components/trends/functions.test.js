import functions from './functions'

let feedbacks = [{
    comment: "Testing it again.",
    createdAt: "2020-06-21T12:07:27.000Z",
    ratedBy: 1,
    rating: 2,
    user: {
        avatar: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png",
        name: "Nadeem Ahmad"
    }
}]

test('Should formate the feedbacks correctly', () => {
    expect(functions.getDataSets(feedbacks)).toEqual({
        labels: [21],
        values: [1]
    })
})