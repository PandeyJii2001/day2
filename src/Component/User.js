import React, { PureComponent } from 'react';


class User extends PureComponent {

    render() {

        return (<div>

            <div>&nbsp; Name :
                &nbsp;{this.props.user.firstName}
                &nbsp; {this.props.user.lastName}</div>
            <div>&nbsp; Phone no. :
                &nbsp;{this.props.user.phone}</div>
            <div>&nbsp; Email :
                &nbsp;{this.props.user.email}</div>
            <div>&nbsp; Blood Group :
                &nbsp;{this.props.user.bloodgroup}</div>
            <div>&nbsp; Age :
                &nbsp;{this.props.user.age}</div>
            <div>&nbsp; Weight :
                &nbsp;{this.props.user.weight}</div>

        </div>
        )
    }
}

export default User;