import React, { Component } from 'react';
import './App.css';
import Goals from './Goals';
import Projects from './Projects';
import BigQuestions from './BigQuestions';
import RaisedButton from 'material-ui/RaisedButton';
import Footer from './Footer';
import UserInformation from "./UserInformation";
import fuelTax from './images/Fuel-Tax.png';
import waterLevy from './images/Water-Levy.png';
import treeLevy from './images/Tree-Levy.png';
import GZLogo from './images/icons/gz-logo.png';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInformation: {
        firstName: '',
        lastName: '',
        email: '',
        localBoard: '',
        receiveGZEmail: true,
      },
      bigChoices: {
        fossilFuelTax: {
          key: 'fossilFuelTax',
          label: 'Do you support a 10c per litre “Fossil Fuel Tax” to fund the public transport Auckland desperately needs? Less pollution & traffic. More transport freedom.',
          checked: true,
          image: fuelTax
        },
        waterInfrastructureTax: {
          key: 'waterInfrastructureTax',
          label: 'Do you support a targeted rate to speed up the delivery of cleaner harbours, beaches and streams? Less poo. More swimming.',
          checked: true,
          image: waterLevy,
        },
        environmentTargetedRate: {
          key: 'environmentTargetedRate',
          label: 'Do you support a targeted rate to invest in environmental initiatives such as tackling kauri dieback? Less death. More trees.',
          checked: true,
          image: treeLevy,
        }
      },
      projects: {
        transportCheckboxes: {
          lightRail: {
            key: 'lightRail',
            label: 'A Light Rail Network including from the City to the Airport and North West Auckland',
            checked: true,
            type: 'transport',
          },
          busway: {
            key: 'busway',
            label: 'Busways to serve East Auckland and North Shore',
            checked: true,
            type: 'transport',
          },
          frequentRail: {
            key: 'frequentRail',
            label: 'More frequent rail services across Auckland',
            checked: true,
            type: 'transport',
          },
          cycleNetwork: {
            key: 'cycleNetwork',
            label: 'Safe, separated cycle network',
            checked: true,
            type: 'transport',
          },
          frequentBus: {
            key: 'frequentBus',
            label: 'Faster, more frequent bus services across Auckland',
            checked: true,
            type: 'transport',
          },
          safeStreets: {
            key: 'safeStreets',
            label: 'Safer streets so people can easily walk around their neighbourhood',
            checked: true,
            type: 'transport',
          },
          safetyUpgrades: {
            key: 'safetyUpgrades',
            label: 'Safety upgrades to save lives on our rural roads',
            checked: true,
            type: 'transport',
          }
        },
        housingCheckboxes: {
          communityFunding: {
            key: 'communityFunding',
            label: 'Funding for community facilities & quality public spaces where major housing growth is proposed in our town centres',
            checked: true,
            type: 'transport',
          },
          publicSpaces: {
            key: 'publicSpaces',
            label: 'Invest in City Centre public spaces (like the Linear Park) to provide for our fast growing population in the City Centre',
            checked: true,
            type: 'transport',
          },
        },
        notProceedCheckboxes: {
          lincolnRoad: {
            key: 'lincolnRoad',
            label: 'Major road widening projects like Lincoln Road',
            checked: true,
            type: 'notProceed',
          },
          millRoad: {
            key: 'millRoad',
            label: 'New rural motorways like Mill Road',
            checked: true,
            type: 'notProceed',
          },
        },
        extraTransportProjectsSupport: '',
        extraTransportProjectsDoNotSupport: '',
        extraEnvironmentalProjects: '',
        extraHousingProjects: '',
        otherComments: '',
        maoriWards: {
          key: 'maoriWards',
          label: 'We think for Auckland to really thrive everyone needs to be included in decision making: Establish Māori Wards. Set up a representative consultation panel.',
          checked: true,
          type: 'maoriWards',
        },
      },
      goals: {
        transportCheck: true,
        housingCheck: true,
        environmentCheck: true,
      },
      submitError: false,
    };

    this.updateCheckbox.bind(this);
    this.updateProjectCheckbox.bind(this);
    this.updateGoalsCheckbox.bind(this);
    this.updateUserInformationCheckbox.bind(this);
    this.updateMaoriWardsCheckbox.bind(this);
    this.updateProjectsInputField.bind(this);
    this.updateUserInformationInputField.bind(this);
    this.submit.bind(this);
  }

  updateCheckbox(sectionKey, checkboxKey) {
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

  updateProjectCheckbox(sectionKey, checkboxKey) {
    this.setState((oldState) => {
      let checkboxToUpdate = oldState.projects[sectionKey][checkboxKey];
      checkboxToUpdate.checked = !checkboxToUpdate.checked;

      return {
        ...oldState,
        projects: {
          ...oldState.projects,
          [sectionKey]: {
            ...oldState.projects[sectionKey],
            [checkboxKey]: checkboxToUpdate,
          }
        }
      };
    });
  }

  updateGoalsCheckbox(checkboxId) {
    this.setState((oldState) => {
      return {
        ...oldState,
        goals: {
          ...oldState.goals,
          [checkboxId]: !oldState.goals[checkboxId],
        }
      };
    });
  }

  updateUserInformationCheckbox() {
    this.setState((oldState) => {
      return {
        ...oldState,
        userInformation: {
          ...oldState.userInformation,
          receiveGZEmail: !oldState.userInformation.receiveGZEmail,
        }
      };
    });
  }

  updateMaoriWardsCheckbox() {
    this.setState((oldState) => {
      return {
        ...oldState,
        maoriWards: {
          ...oldState.maoriWards,
          checked: !oldState.maoriWards.checked,
        }
      };
    });
  }

  updateProjectsInputField(textBoxKey, value){
    this.setState((oldState) => {
      return {
        ...oldState,
        projects: {
          ...oldState.projects,
          [textBoxKey]: value
        }
      };
    });
  }

  updateUserInformationInputField(textBoxKey, value){
    this.setState((oldState) => {
      return {
        ...oldState,
        userInformation: {
          ...oldState.userInformation,
          [textBoxKey]: value
        }
      };
    });
  }

  async submit(){
    if(!this.state.userInformation.firstName || !this.state.userInformation.lastName || !this.state.userInformation.email)
    {
      this.setState({submitError: true});
      return;
    } else {
      this.setState({submitError: false})
    }

    try {
      const username = 'gz_user';
      const password = 'ks27N6FzkmrAWWAMBtpl';

      let myHeaders = new Headers();
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', 'Basic ' + btoa(username + ":" + password));

      const dataToSend = {
        firstName: this.state.userInformation.firstName,
        lastName: this.state.userInformation.lastName,
        email: this.state.userInformation.email,
        localBoard: this.state.userInformation.localBoard,
        receiveGZEmail: this.state.userInformation.receiveGZEmail,
        fossilFuelTax: this.state.bigChoices.fossilFuelTax.checked,
        waterInfrastructureTax: this.state.bigChoices.waterInfrastructureTax.checked,
        environmentTargetedRate: this.state.bigChoices.environmentTargetedRate.checked,
        transportCheck: this.state.goals.transportCheck,
        housingCheck: this.state.goals.housingCheck,
        environmentCheck: this.state.goals.environmentCheck,
        lightRailCheck: this.state.projects.transportCheckboxes.lightRail.checked,
        buswayCheck: this.state.projects.transportCheckboxes.busway.checked,
        frequentRailCheck: this.state.projects.transportCheckboxes.frequentRail.checked,
        cycleNetworkCheck: this.state.projects.transportCheckboxes.cycleNetwork.checked,
        frequentBusCheck: this.state.projects.transportCheckboxes.frequentBus.checked,
        safeStreetsCheck: this.state.projects.transportCheckboxes.safeStreets.checked,
        safetyUpgradesCheck: this.state.projects.transportCheckboxes.safetyUpgrades.checked,
        communityFundingCheck: this.state.projects.housingCheckboxes.communityFunding.checked,
        publicSpacesCheck: this.state.projects.housingCheckboxes.publicSpaces.checked,
        lincolnRoadCheck: this.state.projects.notProceedCheckboxes.lincolnRoad.checked,
        millRoadCheck: this.state.projects.notProceedCheckboxes.millRoad.checked,
        maoriWards: this.state.projects.maoriWards.checked,
        extraTransportProjectsSupport: this.state.projects.extraTransportProjectsSupport,
        extraTransportProjectsDoNotSupport: this.state.projects.extraTransportProjectsDoNotSupport,
        extraEnvironmentalProjects: this.state.projects.extraEnvironmentalProjects,
        extraHousingProjects: this.state.projects.extraHousingProjects,
        otherComments: this.state.projects.otherComments,
      };

      const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(dataToSend)
      };
      const myRequest = new Request(`https://api.fixour.city/submissions`, myInit);
      await fetch(myRequest);
    } catch(e) {
      console.log('Unable to send submission', e)
    }
  }

  render() {
    const styles = {
      gzLogo: {
        width: '320px'
      },
      title: {
        fontSize: '50px',
        color: 'white',
        padding: '10px',
      },
      subTitle: {
        fontSize: '18px',
        color: 'white',
        fontFamily: 'Gotham-Light',
        padding: '10px',
      },
      intro: {
        fontSize: '16px',
        color: 'white',
        fontFamily: 'Gotham-Light',
        padding: '10px',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      submitLabel: {
        fontSize: '24px',
      },
      submitError: {
        color: 'red',
      }
    };

    return (
      <div className="App" style={styles.container}>
        <div>
          <img style={styles.gzLogo} src={GZLogo} alt={'Generation Zero Logo'}/>
          <div style={styles.title}>FIX OUR CITY </div>
          <div style={styles.subTitle}> QUICK SUBMIT ON THE AUCKLAND PLAN AND LONG TERM PLAN 2018 </div>
        </div>
        <div style={styles.intro}>
          Auckland Council is consulting on their plans for our city over the next 10 years.
          We’ve made it really easy for you to submit on key issues, just follow our form below.
        </div>
        <UserInformation
          userInformation={this.state.userInformation}
          updateUserInformationInputField={(textBoxKey, value) => this.updateUserInformationInputField(textBoxKey, value)}
          updateUserInformationCheckbox={() => this.updateUserInformationCheckbox()}
        />
        <BigQuestions
          bigChoices={this.state.bigChoices}
          updateCheckbox={(sectionKey, checkboxKey) => this.updateCheckbox(sectionKey, checkboxKey)}
        />
        <Goals
          goals={this.state.goals}
          updateGoalsCheckbox={(checkboxId) => this.updateGoalsCheckbox(checkboxId)}
        />
        <Projects
          projects={this.state.projects}
          updateCheckbox={(sectionKey, checkboxKey) => this.updateProjectCheckbox(sectionKey, checkboxKey)}
          updateProjectsInputField={(textBoxKey, value) => this.updateProjectsInputField(textBoxKey, value)}
          updateMaoriWardsCheckbox={() => this.updateMaoriWardsCheckbox()}
        />
        <div>
          <div>
            <RaisedButton
              label={'Submit!'}
              labelStyle={styles.submitLabel}
              backgroundColor={'rgb(103, 189, 176)'}
              onClick={() => this.submit()}
            />
            {this.state.submitError ? <div style={styles.submitError}>
              Please enter your first and last name and your email to submit
            </div> : null}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
