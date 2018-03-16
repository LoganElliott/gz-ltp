import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            Projects
          </div>
          <div>
            The Long Term Plan sets out the 10 year budget for Auckland.
          </div>
        </div>
        <div>
          Auckland Council wants to know your views about where council should spend your money. Three key areas where council spends money are transport, housing (including community facilities) and the environment.
        </div>
        <div>
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
              />
            })}
          </div>
          <div>
            What other transport projects would you like to see built?
          </div>
          <div>
            <TextField
              fullWidth={true}
              hintText={'Enter other transport projects you support'}
              multiLine={true}
              value={this.props.projects.extraTransportProjectsSupport}
              onChange={(event, newValue) => this.props.updateInputField('extraTransportProjectsSupport', newValue)}
            />
          </div>
        </div>
        <div>
          <div>
            Are there any major transport projects that Auckland Council is proposing that you think should not proceed? (We’ve added a couple of expensive roading projects to give you ideas)
          </div>
          <div>
            {Object.keys(this.props.projects.notProceedCheckboxes).map(notProceedCheckboxKey => {
              return <Checkbox
                checked={this.props.projects.notProceedCheckboxes[notProceedCheckboxKey].checked}
                onCheck={() => this.props.updateCheckbox('notProceedCheckboxes', notProceedCheckboxKey)}
                key={notProceedCheckboxKey}
                label={this.props.projects.notProceedCheckboxes[notProceedCheckboxKey].label}/>
            })}
          </div>
          <div>
            <TextField
              fullWidth={true}
              hintText={'Enter other transport projects you don\'t support'}
              multiLine={true}
              value={this.props.projects.extraTransportProjectsDoNotSupport}
              onChange={(event, newValue) => this.props.updateInputField('extraTransportProjectsDoNotSupport', newValue)}
            />
          </div>
        </div>
        <div>
          <div>
            What other environmental initiatives do you think Auckland Council should spend more money on? (Tree planting? Community gardens? Waste & Recycling?):
          </div>
          <div>
            <TextField
              fullWidth={true}
              hintText={'Enter environmental projects'}
              multiLine={true}
              value={this.props.projects.extraEnvironmentalProjects}
              onChange={(event, newValue) => this.updateInputField('extraEnvironmentalProjects', newValue)}
            />
          </div>
        </div>
        <div>
          <div>
            Auckland Council facilitates the building of new housing in communities across the city. They also invest money to improve our local centres, which can benefit both existing residents (like yourself) and new people moving here. What projects do you think Auckland Council should focus on to encourage housing & improve our centres? (We’ve added a couple of suggestions to start you off!)
          </div>
          <div>
            {Object.keys(this.props.projects.housingCheckboxes).map(housingCheckboxKey => {
              return <Checkbox
                checked={this.props.projects.housingCheckboxes[housingCheckboxKey].checked}
                onCheck={() => this.props.updateCheckbox('housingCheckboxes', housingCheckboxKey)}
                key={housingCheckboxKey}
                label={this.props.projects.housingCheckboxes[housingCheckboxKey].label}/>
            })}
          </div>
          <TextField
            fullWidth={true}
            hintText={'Enter other housing projects'}
            multiLine={true}
            value={this.props.projects.extraHousingProjects}
            onChange={(event, newValue) => this.props.updateInputField('extraHousingProjects', newValue)}
          />
        </div>
        <div>
          What else do you think Auckland Council should do to improve our city?
          <TextField
            fullWidth={true}
            hintText={'How should we improve our city?'}
            multiLine={true}
            value={this.props.projects.otherComments}
            onChange={(event, newValue) => this.props.updateInputField('otherComments', newValue)}
          />
        </div>
      </div>
    )
  }
}

export default Projects;