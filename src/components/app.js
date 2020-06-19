import React from 'react'
import Feedbacks from './feedbacks/feedbacks'
import Form from './form/form'
import Trends from './trends/trends'

const app = (props) => {
    return (
        <>
            <Form />
            <Feedbacks />
            <Trends />
        </>
    )
}

export default app