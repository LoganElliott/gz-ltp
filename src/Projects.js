import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transportCheckboxes: {
        lightRail: {
          key: 'lightRail',
          label: 'A Light Rail Network including from the City to the Airport and North West Auckland',
          checked: true,
        },
        busway: {
          key: 'busway',
          label: 'Busways to serve East Auckland and North Shore',
          checked: true,
        },
        frequentRail: {
          key: 'frequentRail',
          label: 'More frequent rail services across Auckland',
          checked: true,
        },
        cycleNetwork: {
          key: 'cycleNetwork',
          label: 'Safe, separated cycle network',
          checked: true,
        },
        frequentBus: {
          key: 'frequentBus',
          label: 'Faster, more frequent bus services across Auckland',
          checked: true,
        },
        safeStreets: {
          key: 'safeStreets',
          label: 'Safer streets so people can easily walk around their neighbourhood',
          checked: true,
        },
        safetyUpgrades: {
          key: 'safetyUpgrades',
          label: 'Safety upgrades to save lives on our rural roads',
          checked: true,
        }
      },
      housingCheckboxes: {
        communityFunding: {
          label: 'Funding for community facilities & quality public spaces where major housing growth is proposed in our town centres',
          checked: true,
        },
        publicSpaces: {
          label: 'Invest in City Centre public spaces (like the Linear Park) to provide for our fast growing population in the City Centre',
          checked: true,
        },
      },
      notProceedCheckboxes: {
        lincolnRoad: {
          label: 'Major road widening projects like Lincoln Road',
          checked: true,
        },
        millRoad: {
          label: 'New rural motorways like Mill Road',
          checked: true,
        },
      },
      extraTransportProjectsSupport: '',
      extraTransportProjectsDoNotSupport: '',
      extraEnvironmentalProjects: '',
      extraHousingProjects: '',
      otherComments: '',
    };

    this.updateCheckbox.bind(this);
    this.updateInputField.bind(this);
  }

  updateCheckbox(isInputChecked, sectionKey, checkboxKey) {
    this.setState((oldState) => {
      let checkboxToUpdate = oldState[sectionKey][checkboxKey];
      checkboxToUpdate.checked = !checkboxToUpdate.checked;

      return {
        ...oldState,
        [sectionKey]: {
          ...oldState[sectionKey],
          [checkboxKey]: checkboxToUpdate,
        }
      };
    });
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
            {Object.keys(this.state.transportCheckboxes).map(transportCheckboxKey => {
              return <Checkbox
                checked={this.state.transportCheckboxes[transportCheckboxKey].checked}
                onCheck={(event, isInputChecked) => this.updateCheckbox(isInputChecked, 'transportCheckboxes', transportCheckboxKey)}
                key={transportCheckboxKey}
                label={this.state.transportCheckboxes[transportCheckboxKey].label}
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
              value={this.state.extraTransportProjectsSupport}
              onChange={(event, newValue) => this.updateInputField('extraTransportProjectsSupport', newValue)}
            />
          </div>
        </div>
        <div>
          <div>
            Are there any major transport projects that Auckland Council is proposing that you think should not proceed? (We’ve added a couple of expensive roading projects to give you ideas)
          </div>
          <div>
            {Object.keys(this.state.notProceedCheckboxes).map(notProceedCheckboxKey => {
              return <Checkbox
                checked={this.state.notProceedCheckboxes[notProceedCheckboxKey].checked}
                onCheck={(event, isInputChecked) => this.updateCheckbox(isInputChecked, 'notProceedCheckboxes', notProceedCheckboxKey)}
                key={notProceedCheckboxKey}
                label={this.state.notProceedCheckboxes[notProceedCheckboxKey].label}/>
            })}
          </div>
          <div>
            <TextField
              fullWidth={true}
              hintText={'Enter other transport projects you don\'t support'}
              multiLine={true}
              value={this.state.extraTransportProjectsDoNotSupport}
              onChange={(event, newValue) => this.updateInputField('extraTransportProjectsDoNotSupport', newValue)}
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
              value={this.state.extraEnvironmentalProjects}
              onChange={(event, newValue) => this.updateInputField('extraEnvironmentalProjects', newValue)}
            />
          </div>
        </div>
        <div>
          <div>
            Auckland Council facilitates the building of new housing in communities across the city. They also invest money to improve our local centres, which can benefit both existing residents (like yourself) and new people moving here. What projects do you think Auckland Council should focus on to encourage housing & improve our centres? (We’ve added a couple of suggestions to start you off!)
          </div>
          <div>
            {Object.keys(this.state.housingCheckboxes).map(housingCheckboxKey => {
              return <Checkbox
                checked={this.state.housingCheckboxes[housingCheckboxKey].checked}
                onCheck={(event, isInputChecked) => this.updateCheckbox(isInputChecked, 'housingCheckboxes', housingCheckboxKey)}
                key={housingCheckboxKey}
                label={this.state.housingCheckboxes[housingCheckboxKey].label}/>
            })}
          </div>
          <TextField
            fullWidth={true}
            hintText={'Enter other housing projects'}
            multiLine={true}
            value={this.state.extraHousingProjects}
            onChange={(event, newValue) => this.updateInputField('extraHousingProjects', newValue)}
          />
        </div>
        <div>
          What else do you think Auckland Council should do to improve our city?
          <TextField
            fullWidth={true}
            hintText={'How should we improve our city?'}
            multiLine={true}
            value={this.state.otherComments}
            onChange={(event, newValue) => this.updateInputField('otherComments', newValue)}
          />
        </div>
      </div>
    )
  }
}

export default Projects;