import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import transportIcon from './images/icons/Transport-Icon.png';
import housingIcon from './images/icons/Housing-Icon.png';
import environmentIcon from './images/icons/Environment-Icon.png';

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportCheck: false,
      housingCheck: false,
      environmentCheck: false,
    };

    this.updateCheck.bind(this);
  }

  updateCheck(checkboxId) {
    this.setState((oldState) => {
      return {
        [checkboxId]: !oldState[checkboxId],
      };
    });
  }

  render() {
    const styles = {
      checkbox: {
        maxWidth: 300,
      },
      checkboxContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
      },
      goal: {
        margin: '20px',
      },
    };

    return (
      <div>
        <div>
          Auckland Plan Goals
        </div>
        <div>
          The Auckland Plan sets out the vision for our city in 2050. However, then plan is not bold enough to meet our future challenges, and is weak in some important areas. We have come up with new suggested goals for what we want our city to be like in 2050. Let us know if you support them:
        </div>
        <div>
          <img src={transportIcon} alt='Transport section icon'/>
          <h2>
            Transport
          </h2>
          <div style={styles.goal}>
            Reduce transport emissions to zero
          </div>
          <div style={styles.goal}>
            Make sure public transport is affordable for all Aucklanders
          </div>
          <div style={styles.goal}>
            Half of all trips should be by sustainable transport in 10 years
          </div>
          <div style={styles.goal}>
            Vision Zero - aim for no preventable deaths on our roads & streets by 2050.
        </div>
          <div style={styles.checkboxContainer}>
            <Checkbox
              label={"I support these Transport Goals"}
              checked={this.state.transportCheck}
              onCheck={() => this.updateCheck('transportCheck')}
              style={styles.checkbox}
            />
          </div>
        </div>
        <div>
          <img src={housingIcon}  alt='Housing section icon'/>
          <h2>
            Housing
          </h2>
          <div style={styles.goal}>
            Provide affordable housing for every Aucklander
          </div>
          <div style={styles.goal}>
            Stop sprawl by ensuring at least 80% of growth is within the existing area
          </div>
          <div style={styles.goal}>
            Focus new housing around rapid transit.
          </div>
          <div style={styles.goal}>
            Ensure new housing includes provision of quality public spaces & community facilities.
          </div>
          <div style={styles.checkboxContainer}>
            <Checkbox
              label={"I support these Housing Goals"}
              checked={this.state.housingCheck}
              onCheck={() => this.updateCheck('housingCheck')}
              style={styles.checkbox}
            />
          </div>
        </div>
        <div>
          <img src={environmentIcon}  alt='Environment section icon'/>
          <h2>
            Environment
          </h2>
          <div style={styles.goal}>
            Zero Carbon by 2050
          </div>
          <div style={styles.goal}>
            Protect & restore our natural environment, including significant reforestation.
          </div>
          <div style={styles.goal}>
            Ensure Auckland’s harbours are clean & swimmable.
          </div>
          <div style={styles.goal}>
            Zero Waste
          </div>
          <div style={styles.checkboxContainer}>
            <Checkbox
              label={"I support these Environment Goals"}
              checked={this.state.environmentCheck}
              onCheck={() => this.updateCheck('environmentCheck')}
              style={styles.checkbox}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
