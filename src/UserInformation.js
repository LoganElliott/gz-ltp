import React from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class UserInformation extends React.Component {
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
          value={this.props.userInformation.firstName}
          onChange={(event, newValue) => this.props.updateUserInformationInputField('firstName', newValue)}
        />
        <TextField
          floatingLabelText="Last Name"
          value={this.props.userInformation.lastName}
          onChange={(event, newValue) => this.props.updateUserInformationInputField('lastName', newValue)}
        />
        <TextField
          floatingLabelText="Enter email"
          value={this.props.userInformation.email}
          onChange={(event, newValue) => this.props.updateUserInformationInputField('email', newValue)}
          type={'email'}
        />
        <TextField
          floatingLabelText="Local Board (if known)"
          value={this.props.userInformation.localBoard}
          onChange={(event, newValue) => this.props.updateUserInformationInputField('localBoard', newValue)}
        />
        <Checkbox
          label='Do you want to receive email updates from Generation Zero?'
          style={styles.checkbox}
          checked={this.props.userInformation.receiveGZEmail}
          onCheck={() => this.props.updateUserInformationCheckbox() }
        />
      </div>
    );
  }
}

export default UserInformation;