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
          label: '10c per litre “Fossil Fuel Tax” to fund the public transport Auckland desperately needs. Less pollution & traffic. More transport freedom.',
          checked: true,
          image: fuelTax
        },
        waterInfrastructureTax: {
          key: 'waterInfrastructureTax',
          label: 'Support a targeted rate to speed up the delivery of cleaner harbours, beaches and streams. Less poo. More swimming.',
          checked: true,
          image: waterLevy,
        },
        environmentTargetedRate: {
          key: 'environmentTargetedRate',
          label: 'Support a targeted rate to invest in environmental initiatives such as tackling kauri dieback. Less death. More trees.',
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
      },
      goals: {
        transportCheck: true,
        housingCheck: true,
        environmentCheck: true,
      }
    };

    this.updateCheckbox.bind(this);
    this.updateProjectCheckbox.bind(this);
    this.updateGoalsCheckbox.bind(this);
    this.updateUserInformationCheckbox.bind(this);
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
    try {
      const username = 'gz_user';
      const password = 'ks27N6FzkmrAWWAMBtpl';

      let myHeaders = new Headers();
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', 'Basic ' + btoa(username + ":" + password));

      const dataToSend = {
        userInformation: {
          firstName: this.state.userInformation.firstName,
          lastName: this.state.userInformation.lastName,
          email: this.state.userInformation.email,
          localBoard: this.state.userInformation.localBoard,
          receiveGZEmail: this.state.userInformation.receiveGZEmail,
        },
        bigChoices: {
          fossilFuelTax: this.state.bigChoices.fossilFuelTax.checked,
          waterInfrastructureTax: this.state.bigChoices.waterInfrastructureTax.checked,
          environmentTargetedRate: this.state.bigChoices.environmentTargetedRate.checked,
        },
        goals: {
          transportCheck: this.state.goals.transportCheck,
          housingCheck: this.state.goals.housingCheck,
          environmentCheck: this.state.goals.environmentCheck,
        },
        projects: {
          transportCheckboxes: {
            lightRail: this.state.projects.transportCheckboxes.lightRail.checked,
            busway: this.state.projects.transportCheckboxes.busway.checked,
            frequentRail: this.state.projects.transportCheckboxes.frequentRail.checked,
            cycleNetwork: this.state.projects.transportCheckboxes.cycleNetwork.checked,
            frequentBus: this.state.projects.transportCheckboxes.frequentBus.checked,
            safeStreets: this.state.projects.transportCheckboxes.safeStreets.checked,
            safetyUpgrades: this.state.projects.transportCheckboxes.safetyUpgrades.checked,
          },
          housingCheckboxes: {
            communityFunding: this.state.projects.housingCheckboxes.communityFunding.checked,
            publicSpaces: this.state.projects.housingCheckboxes.publicSpaces.checked,
          },
          notProceedCheckboxes: {
            lincolnRoad: this.state.projects.notProceedCheckboxes.lincolnRoad.checked,
            millRoad: this.state.projects.notProceedCheckboxes.millRoad.checked,
          },
          extraTransportProjectsSupport: this.state.projects.extraTransportProjectsSupport,
          extraTransportProjectsDoNotSupport: this.state.projects.extraTransportProjectsDoNotSupport,
          extraEnvironmentalProjects: this.state.projects.extraEnvironmentalProjects,
          extraHousingProjects: this.state.projects.extraHousingProjects,
          otherComments: this.state.projects.otherComments,
        }
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
        width: '400px'
      },
      title: {
        fontSize: '50px',
        color: 'white',
      },
      subTitle: {
        fontSize: '18px',
        color: 'white',
        fontFamily: 'Gotham-Light',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      submitLabel: {
        fontSize: '24px',
      }
    };

    return (
      <div className="App" style={styles.container}>
        <div>
          <img style={styles.gzLogo} src={GZLogo} alt={'Generation Zero Logo'}/>
          <div style={styles.title}>FIX OUR CITY </div>
          <div style={styles.subTitle}> QUICK SUBMIT ON THE AUCKLAND LONG TERM PLAN 2018 </div>
        </div>
        <div>
          Auckland Council is consulting of their plans for our city over the next 10 years.
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
        />
        <div>
          <div>
            <RaisedButton
              label={'Submit!'}
              labelStyle={styles.submitLabel}
              backgroundColor={'rgb(103, 189, 176)'}
              onClick={() => this.submit()}
            />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
