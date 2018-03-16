import React from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class UserInformation extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      textFieldContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: '20px',
        flexWrap: 'wrap'
      },
      field: {
        margin: '10px'
      },
      checkbox: {
        maxWidth: '320px',
        margin: '10px'
      },
      labelStyle: {
        fontFamily: 'Gotham-Light',
      }
    };

    return(
      <div style={styles.container}>
        <div style={styles.textFieldContainer}>
          <TextField
            floatingLabelText="First Name"
            value={this.props.userInformation.firstName}
            onChange={(event, newValue) => this.props.updateUserInformationInputField('firstName', newValue)}
            floatingLabelStyle={styles.labelStyle}
             style={styles.field}
          />
          <TextField
            floatingLabelText="Last Name"
            value={this.props.userInformation.lastName}
            onChange={(event, newValue) => this.props.updateUserInformationInputField('lastName', newValue)}
            floatingLabelStyle={styles.labelStyle}
            style={styles.field}
          />
          <TextField
            floatingLabelText="Enter email"
            value={this.props.userInformation.email}
            onChange={(event, newValue) => this.props.updateUserInformationInputField('email', newValue)}
            type={'email'}
            floatingLabelStyle={styles.labelStyle}
            style={styles.field}
          />
          <TextField
            floatingLabelText="Local Board (if known)"
            value={this.props.userInformation.localBoard}
            onChange={(event, newValue) => this.props.updateUserInformationInputField('localBoard', newValue)}
            floatingLabelStyle={styles.labelStyle}
            style={styles.field}
          />
          </div>
        <div>
          <Checkbox
            label='Do you want to receive email updates from Generation Zero?'
            style={styles.checkbox}
            checked={this.props.userInformation.receiveGZEmail}
            onCheck={() => this.props.updateUserInformationCheckbox()}
            labelStyle={styles.labelStyle}
          />
        </div>
      </div>
    );
  }
}

export default UserInformation;