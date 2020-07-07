import React,{ Component } from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:''
        };
    }

handleSubmit(event){
    event.preventDefault();
    console.log("Form is submitted",this.state.email);
}
handleEmailChange(event){
 console.log("email was changed",event.target.value);
}
    render() {


    return (
    
        <form onSubmit={this.handleSubmit}>
            <input
            type = "text"
            placeholder = "E-mail"
            value = {this.state.email}
            onChange = {this.handleEmailChange}
            >

            </input>
            <button>Save</button>
        </form>

        // <div> Form</div>
    );

    }
}
export default RegistrationForm;
