import React, { PureComponent } from 'react';

class User extends PureComponent {
    render() {
        
        return (<div>
            <div >
                {this.props.user.userName}
            </div>
            <div >
                {this.props.user.userPhoneNo}
            </div>
            <div >
                {this.props.user.userEmail}
            </div>
            <div >
                {this.props.user.userPass}
            </div>
            <div >
                {this.props.user.userConPass}
            </div>
            <br></br>
            <br></br>
            </div>
        )
    }
}

export default User;