import React, { Component, PureComponent } from 'react';
import AddButton from './Component/AddButton';
import DelButton from './Component/DelButton';
import EditButton from './Component/EditButton';


import User from './Component/User';

class App1 extends PureComponent {

    constructor() {
        super()
        this.state = {
            counter : 0,
            users: []

        }
    }
  
   
    // useEffect( () =>{
    //     fetch("https://dummyjson.com/users")
    //     .then((response) => response.json())
    //     .then((json) => this.setState({users :json}));
    // },[]);



    adduser = (user) => {
       
       // This code is not worling properly because here is need of another setState without any use;
        let userList = this.state.users;
        userList.push(user);

        this.setState({users : userList});
        //it's written just because of output the all users after adding;
        let newCounter = this.state.counter + 1;
        this.setState({ counter: newCounter });
        
      console.log(this.state.users);
    }

    deleteuser = (key) => {
          console.log(key);
        let userList = this.state.users;

        userList.splice(key, 1);
        this.setState({ users: userList });

        // //it's written just because of output the all users after deleting;
        let newCounter = this.state.counter + 1;
        this.setState({ counter: newCounter });
        
    }

    edituser = (updateuser, key) => {
        let userList = this.state.users;
        userList[key]= updateuser;
        
        this.setState({ users: userList });

        //it's written just because of output the all users after editing;
        let newCounter = this.state.counter + 1;
        this.setState({ counter: newCounter });
       

    }

    render() {

        return (
            <div>

                <AddButton Adduser={this.adduser}></AddButton>

                <div>{this.state.users.map((USER, index) => {
                    return (
                        <div>
                            <User key={index} id={index} user={USER} />
                            <DelButton id={index} deleteuser={this.deleteuser}></DelButton>
                            <EditButton id={index} edituser={this.edituser} user={USER}></EditButton>
                        </div>)

                })}
                </div>
              
            </div>
        )
    }
}

export default App1;