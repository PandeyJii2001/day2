import React, { PureComponent } from 'react';

class Counter extends PureComponent {
    render() {
        return (
            <div>
                {this.props.counter}
            </div>
        )
    }
}

export default Counter;