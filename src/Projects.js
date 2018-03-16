import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
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
    };

    return (
      <div style={styles.container}>
        <div>
          <div style={styles.title}>
            PROJECTS
          </div>
        </div>
        <div style={styles.subTitle}>
          Auckland Council wants to know your views about where council should spend your money. Three key areas where council spends money are transport, housing (including community facilities) and the environment.
        </div>
        <div style={styles.sectionContainer}>
          <div style={styles.section}>
            <div>
              What transport projects do you think should be prioritised in Auckland (we have suggested some but add your own too!)
            </div>
            <div>
              {Object.keys(this.props.projects.transportCheckboxes).map(transportCheckboxKey => {
                return <Checkbox
                  checked={this.props.projects.transportCheckboxes[transportCheckboxKey].checked}
                  onCheck={() => this.props.updateCheckbox('transportCheckboxes', transportCheckboxKey)}
                  key={transportCheckboxKey}
                  label={this.props.projects.transportCheckboxes[transportCheckboxKey].label}
                  style={styles.checkbox}
                  labelStyle={styles.labelStyle}
                />
              })}
            </div>

            <div>
              <TextField
                fullWidth={true}
                hintText={'Enter other transport projects you support'}
                multiLine={true}
                value={this.props.projects.extraTransportProjectsSupport}
                onChange={(event, newValue) => this.props.updateProjectsInputField('extraTransportProjectsSupport', newValue)}
                style={styles.textField}
                hintStyle={styles.labelStyle}
              />
            </div>
          </div>
          <div style={styles.section}>
            <div>
              Are there any major transport projects that Auckland Council is proposing that you think should not proceed?
            </div>
            <div>
              {Object.keys(this.props.projects.notProceedCheckboxes).map(notProceedCheckboxKey => {
                return <Checkbox
                  checked={this.props.projects.notProceedCheckboxes[notProceedCheckboxKey].checked}
                  onCheck={() => this.props.updateCheckbox('notProceedCheckboxes', notProceedCheckboxKey)}
                  key={notProceedCheckboxKey}
                  label={this.props.projects.notProceedCheckboxes[notProceedCheckboxKey].label}
                  style={styles.checkbox}
                  labelStyle={styles.labelStyle}
                />
              })}
            </div>
            <div>
              <TextField
                fullWidth={true}
                hintText={'Enter other transport projects you don\'t support'}
                multiLine={true}
                value={this.props.projects.extraTransportProjectsDoNotSupport}
                onChange={(event, newValue) => this.props.updateProjectsInputField('extraTransportProjectsDoNotSupport', newValue)}
                style={styles.textField}
                hintStyle={styles.labelStyle}
              />
            </div>
          </div>
          <div  style={styles.section}>
            <div>
              Auckland Council facilitates the building of new housing in communities across the city. They also invest money to improve our local centres, which can benefit both existing residents (like yourself) and new people moving here. What projects do you think Auckland Council should focus on to encourage housing & improve our centres?
            </div>
            <div>
              {Object.keys(this.props.projects.housingCheckboxes).map(housingCheckboxKey => {
                return <Checkbox
                  checked={this.props.projects.housingCheckboxes[housingCheckboxKey].checked}
                  onCheck={() => this.props.updateCheckbox('housingCheckboxes', housingCheckboxKey)}
                  key={housingCheckboxKey}
                  label={this.props.projects.housingCheckboxes[housingCheckboxKey].label}
                  style={styles.checkbox}
                  labelStyle={styles.labelStyle}
                />
              })}
            </div>
            <TextField
              fullWidth={true}
              hintText={'Enter other housing projects'}
              multiLine={true}
              value={this.props.projects.extraHousingProjects}
              onChange={(event, newValue) => this.props.updateProjectsInputField('extraHousingProjects', newValue)}
              style={styles.textField}
              hintStyle={styles.labelStyle}
            />
          </div>
          <div style={styles.section}>
            <Checkbox
              checked={this.props.projects.maoriWards.checked}
              onCheck={() => this.props.updateMaoriWardsCheckbox()}
              key={this.props.projects.maoriWards.key}
              label={this.props.projects.maoriWards.label}
              style={styles.checkbox}
              labelStyle={styles.labelStyle}
            />
          </div>
          <div  style={styles.section}>
            <div>
              What other environmental initiatives do you think Auckland Council should spend more money on? (Tree planting? Community gardens? Waste & Recycling?):
            </div>
            <div>
              <TextField
                fullWidth={true}
                hintText={'Enter environmental projects'}
                multiLine={true}
                value={this.props.projects.extraEnvironmentalProjects}
                onChange={(event, newValue) => this.props.updateProjectsInputField('extraEnvironmentalProjects', newValue)}
                style={styles.textField}
                hintStyle={styles.labelStyle}
              />
            </div>
          </div>
        </div>
        <div style={styles.whatElse}>
          What else do you think Auckland Council should do to improve our city?
          <TextField
            fullWidth={true}
            hintText={'How should we improve our city?'}
            multiLine={true}
            value={this.props.projects.otherComments}
            onChange={(event, newValue) => this.props.updateProjectsInputField('otherComments', newValue)}
            style={styles.textField}
            hintStyle={styles.labelStyle}
          />
        </div>
      </div>
    )
  }
}

export default Projects;