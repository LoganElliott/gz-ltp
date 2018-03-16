import React from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class UserInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      localBoard: '',
      receiveGZEmail: true,
    };

    this.updateInputField.bind(this);
  }

  updateInputField(textBoxKey, value){
    this.setState((oldState) => {
      return {
        ...oldState,
        [textBoxKey]: value
      };
    });
  }

  render() {
    const styles = {
      emailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px',
      },
      checkbox: {
        maxWidth: '500px'
      },
    };

    return(
      <div style={styles.emailContainer}>
        <TextField
          floatingLabelText="First Name"
          value={this.state.firstName}
          onChange={(event, newValue) => this.updateInputField('firstName', newValue)}
        />
        <TextField
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={(event, newValue) => this.updateInputField('lastName', newValue)}
        />
        <TextField
          floatingLabelText="Enter email"
          value={this.state.email}
          onChange={(event, newValue) => this.updateInputField('email', newValue)}
        />
        <TextField
          floatingLabelText="Local Board (if known)"
          value={this.state.localBoard}
          onChange={(event, newValue) => this.updateInputField('localBoard', newValue)}
        />
        <Checkbox
          label='Do you want to receive email updates from Generation Zero?'
          style={styles.checkbox}
          checked={this.state.receiveGZEmail}
          onCheck={(event, isInputChecked) => {this.setState({receiveGZEmail: isInputChecked})} }
        />
      </div>
    );
  }
}

export default UserInformation;