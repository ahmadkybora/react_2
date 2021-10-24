import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <button class="btn btn-danger" onClick={props.click}>Cancel</button>
            <p>Hello World my name is { props.name } and my od is { props.age }.</p>
            <input class="mb-1" value={ props.value }/>
        </div>
    )
}

export default Person;