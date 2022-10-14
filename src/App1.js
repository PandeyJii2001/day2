import React, { Component, PureComponent } from 'react';
import AddButton from './Component/AddButton';
//import Counter from './Component/Counter';
import User from './Component/User';

class App1 extends PureComponent {
    
    constructor() {
        super()
        this.state = {
            counter: 0,
            users : []
            
        }
    }

    

    incrementCounter = (user) => {
        let newCounter = this.state.counter + 1;
        this.setState({ counter: newCounter });

        let userList = this.state.users;
        userList.push(user);

        this.setState({users: userList})
        console.log(this.state.users);
       
    }



    render() {
        return (
            <div>
               
                <AddButton incrementCounter={this.incrementCounter}></AddButton>
                {/* <Counter counter={this.state.counter}></Counter> */}
               <div>{this.state.users.map( (USER) =>{
                return (<User user={USER} />)
                
               })}</div>
            </div>
        )
    }
}

export default App1;