//Functional Component
import React from 'react';

const CounterButtons = (props) => {
    // console.log(props)
    return (
        <section>
            <button onClick={props.decrementFn}>Decrement</button>
            <button onClick={props.clearFn}>Clear</button>
            <button onClick={props.incrementFn}>Increment</button>
        </section>
    )
}

export default CounterButtons;

//Alternative placement for export statement
// export default function CounterButtons(){

// }

//Other Alternatives
// const CounterButtons = () => (
//     <section></section>
// )

// export default props => (
//     <div></div>
// )