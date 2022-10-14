import React, { PureComponent } from 'react';
import { Form, Button, Input, InputNumber } from "antd";

class AddButton extends PureComponent {

    constructor() {
        super()
        this.state = {
          
            Name:'',
            phone:'',
            email:'',
            pass:'',
            conpass:''
          
        }
    }

    entername = (e) =>{
           let val=e.target.value;
             console.log(val);
           this.setState({Name : val});
          
    }
     

    enterphoneno = (e) =>{
        let val=e.target.value;
        this.setState({phone : val});
 }

 enteremail = (e) =>{
    let val=e.target.value;
    this.setState({email : val});
}

enterpass = (e) =>{
    let val=e.target.value;
    this.setState({pass : val});
}

enterconpass = (e) =>{
    let val=e.target.value;
    this.setState({conpass : val});
}



    render() {
        return (
            <div>
                <Form>
                    <label>
                        Name :
                        <Input value={this.state.Name} placeholder='Enter name' name="name" 
                          
                        onChange={this.entername} />
                    </label>
                    <label>
                        Phone no. :
                        <Input style={{ width: '100%' }} placeholder="+91 7484977543"
                        value={this.state.phone} name="name" 
                        onChange={this.enterphoneno}/>
                    </label>
                    <label>
                        Email :
                        <Input name="name" value={this.state.email} placeholder="Enter email"
                        onChange={this.enteremail}/>
                    </label>
                    <label>
                        Passward:
                        <Input.Password placeholder="password" value={this.state.pass}
                        onChange={this.enterpass}/>
                    </label>
                    <label>
                       Confirm Passward:
                        <Input.Password placeholder="password" value={this.state.conpass}
                        onChange={this.enterconpass}/>
                    </label>
                    <Button
                        onClick={() => {
                            let userdetails={
                                userName : this.state.Name,
                                userPhoneNo :this.state.phone,
                                userEmail : this.state.email,
                                userPass : this.state.pass,
                                userConPass : this.state.conpass
                            }
                        this.props.incrementCounter(userdetails);
                        this.setState({
                        Name:'',
                        phone:'',
                        email:'',
                        pass:'',
                        conpass:''})
                        }}>Button</Button>


                </Form>
            </div>)
    }
}

export default AddButton;