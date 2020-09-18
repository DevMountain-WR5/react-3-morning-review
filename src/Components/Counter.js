//Class Component
import React, {Component} from 'react';
import CounterButtons from './CounterButtons';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.decrementCount = this.decrementCount.bind(this);
        this.clearCount = this.clearCount.bind(this);
    }

    decrementCount(){
        this.setState({counter: this.state.counter - 1})
    }

    clearCount(){
        this.setState({counter: 0})
    }

    //Public Classfield Syntax
    incrementCount = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render(){
        return (
            <section>
                <h1>{this.state.counter}</h1>
                <CounterButtons 
                    decrementFn={this.decrementCount}
                    clearFn={this.clearCount}
                    incrementFn={this.incrementCount}/>
            </section>
        )
    }
}

export default Counter;


// Alternative placement for the export
// export default class Counter extends Component {

// }