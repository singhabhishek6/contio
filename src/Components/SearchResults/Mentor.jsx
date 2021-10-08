import React from 'react'
import { useParams } from 'react-router'

export const Mentor = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    )
}
