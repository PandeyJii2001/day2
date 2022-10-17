import React, { PureComponent } from 'react';
import { Form, Button, Input, InputNumber } from "antd";

class AddButton extends PureComponent {

    constructor() {
        super()
        this.state = {

            FirstName: '',
            LastName: '',
            Phone: '',
            Email: '',
            Bloodgroup: '',
            Age: '',
            Weight: ''

        }
    }

    enterfirstname = (e) => {
        let val = e.target.value;
        this.setState({ FirstName: val });

    }

    enterlastname = (e) => {
        let val = e.target.value;
        this.setState({ LastName: val });

    }

    enterphoneno = (e) => {
        let val = e.target.value;
        this.setState({ Phone: val });
    }

    enteremail = (e) => {
        let val = e.target.value;
        this.setState({ Email: val });
    }

    enterbloodgroup = (e) => {
        let val = e.target.value;
        this.setState({ Bloodgroup: val });
    }

    enterage = (e) => {
        let val = e.target.value;
        this.setState({ Age: val });
    }

    enterweight = (e) => {
        let val = e.target.value;
        this.setState({ Weight: val });
    }



    render() {
        return (
            <div>
                <Form>
                    <label>
                        First Name :
                        <Input value={this.state.FirstName} placeholder='Enter first name' name="name"

                            onChange={this.enterfirstname} />
                    </label>
                    <label>
                        Last Name :
                        <Input value={this.state.LastName} placeholder='Enter last name' name="name"

                            onChange={this.enterlastname} />
                    </label>
                    <label>
                        Phone no. :
                        <Input style={{ width: '100%' }} placeholder="+91 7484977543"
                            value={this.state.Phone} name="name"
                            type="number"
                            onChange={this.enterphoneno} />
                    </label>
                    <label>
                        Email :
                        <Input name="name" value={this.state.Email} placeholder="Enter Email"
                            type="email"
                            onChange={this.enteremail} />
                    </label>
                    <label>
                        Blood Group :
                        <Input name="name" value={this.state.Bloodgroup} placeholder="Enter Blood Group"
                            onChange={this.enterbloodgroup} />
                    </label>
                    <label>
                        Age :
                        <Input placeholder=" Enter age " value={this.state.Age}
                        type="number"
                            onChange={this.enterage} />
                    </label>
                    <label>
                        Weight :
                        <Input  placeholder=" Enter weight " value={this.state.Weight}
                        type="number"
                            onChange={this.enterweight} />
                    </label>
                    <Button
                        onClick={() => {
                            let userdetails = {
                                firstName: this.state.FirstName,
                                lastName: this.state.LastName,
                                phone: this.state.Phone,
                                email: this.state.Email,
                                bloodgroup: this.state.Bloodgroup,
                                age: this.state.Age,
                                weight: this.state.Weight
                            }
                            if (userdetails.firstName === '' || userdetails.phone === '' ||
                                userdetails.email === '' || userdetails.age === '' ||
                                userdetails.weight === '' || userdetails.bloodgroup === '') {
                                alert("Please fill all the required detail")
                            }
                            else {
                                
                                    this.props.Adduser(userdetails);
                                    this.setState({
                                        FirstName: '',
                                        LastName: '',
                                        Phone: '',
                                        Email: '',
                                        Bloodgroup: '',
                                        Age: '',
                                        Weight: ''
                                    })
                                
                            }
                        }}>Add</Button>


                </Form>
            </div>)
    }
}

export default AddButton;