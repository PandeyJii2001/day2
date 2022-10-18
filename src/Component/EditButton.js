import React, { PureComponent } from 'react';
import { Button, Form, Input } from 'antd';

class EditButton extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            updateusershow: '',
            FirstName: '',
            LastName: '',
            Phone: '',
            Email: '',
            Bloodgroup: '',
            Age: '',
            Weight: ''
        }
    };

    enterfirstname = (e) => {
        let val = e.target.value;
        this.setState({ FirstName: val });
    }

    enterlastname = (e) => {
        let val = e.target.value;
        this.setState({ LastName: val });
    }


    enterphone = (e) => {
        let val = e.target.value;
        this.setState({ Phone: val });
    }

    enteremail = (e) => {
        let val = e.target.value;
        this.setState({ Email: val });
    }

    enterebloodgroup = (e) => {
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


        let updateuserdetails =
            <div>
                <Form>
                    <label>
                       First Name :
                        <Input defaultValue={this.props.user.firstName} placeholder='Enter first name' name="name"

                            onChange={this.enterfirstname} />
                    </label>
                    <label>
                       Last Name :
                        <Input defaultValue={this.props.user.lastName} placeholder='Enter last name' name="name"

                            onChange={this.enterlastname} />
                    </label>
                    <label>
                        Phone no. :
                        <Input style={{ width: '100%' }} placeholder="+91 7484977543"
                            defaultValue={this.props.user.phone} name="name"
                            onChange={this.enterphone} />
                    </label>
                    <label>
                        Email :
                        <Input name="name" defaultValue={this.props.user.email} placeholder="Enter email"
                            onChange={this.enteremail} />
                    </label>
                    <label>
                        Blood Group :
                        <Input name="name" defaultValue={this.props.user.bloodgroup} placeholder="Enter Blood Group"
                            onChange={this.enterebloodgroup} />
                    </label>
                    <label>
                        Age :
                        <Input placeholder=" Enter age " defaultValue={this.props.user.age}
                            type="number" onChange={this.enterage} />
                    </label>
                    <label>
                        Weight :
                        <Input placeholder="password" defaultValue={this.props.user.weight}
                            type="number" onChange={this.enterweight} />
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

                            //console.log(userdetails.userName);

                            if (userdetails.firstName === '' || userdetails.phone === '' ||
                                userdetails.email === '' || userdetails.age === '' ||
                                userdetails.weight === '' || userdetails.bloodgroup === '') {
                                alert("Please fill all the required detail");

                            }
                            else {


                                this.props.edituser(userdetails, this.props.id);

                                this.setState({
                                    FirstName: userdetails.firstName,
                                    LastName :userdetails.lastName,
                                    Phone: userdetails.phone,
                                    Email: userdetails.email,
                                    Bloodgroup: userdetails.bloodgroup,
                                    Age: userdetails.age,
                                    Weight: userdetails.weight
                                })

                                this.setState({ updateusershow: '' });

                            }
                        }}>Update</Button>

                    <Button onClick={() => {
                        
                        this.setState({
                            FirstName: this.props.user.firstName,
                            LastName: this.props.user.lastName,
                            Phone: this.props.user.phone,
                            Email: this.props.user.email,
                            Bloodgroup: this.props.user.bloodgroup,
                            Age: this.props.user.age,
                            Weight: this.props.user.weight
                        })

                        this.setState({ updateusershow: '' });
                    }}>Cancel</Button>


                </Form>
            </div>

        return (
            <div>
                <Button onClick={() => {
                    this.setState({
                        FirstName: this.props.user.firstName,
                        LastName: this.props.user.lastName,
                        Phone: this.props.user.phone,
                        Email: this.props.user.email,
                        Bloodgroup: this.props.user.bloodgroup,
                        Age: this.props.user.age,
                        Weight: this.props.user.weight
                    })
                    this.setState({ updateusershow: updateuserdetails })
                }}>Edit</Button>

                <div>{this.state.updateusershow}</div>
            </div>
        )
    }
}

export default EditButton;
//////////////////////