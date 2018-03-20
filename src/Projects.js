import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Projects extends Component {
  render() {
    const styles = {
      container: {
        color: 'white'
      },
      title: {
        fontSize: '55px',
        padding: '10px',
        paddingTop: '100px'
      },
      subTitle: {
        fontSize: '20px',
        padding: '10px',
        fontFamily: 'Gotham-Light',
      },
      checkbox: {
        maxWidth: '320px',
        margin: '10px',
      },
      textField: {
        maxWidth: '300px',
        margin: '10px 0 10px 0'
      },
      labelStyle: {
        fontFamily: 'Gotham-Light',
      },
      section: {
        maxWidth: '320px',
        fontFamily: 'Gotham-Light',
        padding: '10px',
      },
      sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      whatElse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      hintStyle: {
        fontFamily: 'Gotham-Light',
        color: '#B0A1D6'
      }
    };

    return (
      <div style={styles.container}>
        <div style={styles.whatElse}>
          What else do you think Auckland Council should do to improve our city?
          <TextField
            fullWidth={true}
            hintText={'How should we improve our city?'}
            multiLine={true}
            value={this.props.projects.otherComments}
            onChange={(event, newValue) => this.props.updateProjectsInputField('otherComments', newValue)}
            style={styles.textField}
            hintStyle={styles.hintStyle}
          />
        </div>
      </div>
    )
  }
}

export default Projects;
