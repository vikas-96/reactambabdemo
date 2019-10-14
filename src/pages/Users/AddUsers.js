import React from "react";
import UserForm from "./UserForm";

class AddUsers extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      hob: [],
      edu: "",
    };
  }

  handleChange = e => {
    if (event.target.type !== 'checkbox') {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      const checkeds = document.getElementsByName('hob');
      let checkedArr = [];
      for (let i = 0; i < checkeds.length; i++) {
        if (checkeds[i].checked) {
          checkedArr.push(checkeds[i].value);
        }
      }
      this.setState({hob: checkedArr});
    }
  }


  handleSelectChange = (e,componentName) =>{
    this.setState({ [componentName.name]:e.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.handleSubmit(data);
    console.log(this.state);
  }

  render() {
    return <UserForm 
              statedata={this.state} 
              changefunct={this.handleChange}
              SelectChange={this.handleSelectChange} 
              submithandler={this.handleSubmit}  
            />;
  }
}

export default AddUsers;
