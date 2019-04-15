import React from "react"
import propTypes from "prop-types"

const Greeting = ({greeting, name}) => (
    <div style={{color: "teal"}}>
        <h2>{greeting} {name}</h2>
    </div>
)

Greeting.propTypes = {
    greeting: propTypes.string,
    name: propTypes.string,
}

Greeting.defaultProps = {
    greeting: 'Hello',
}

export default Greeting