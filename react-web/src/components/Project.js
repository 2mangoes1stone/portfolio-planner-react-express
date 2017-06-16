import React from 'react'

export default function Project({
    title,
    skills
}) {
    return (
        <div>
            <h2>{ title }</h2>
            <h3>Skills: { skills.join(', ') }</h3>
        </div>
    )
}