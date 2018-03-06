import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import transportIcon from './images/icons/Transport-Icon.png';
import housingIcon from './images/icons/Housing-Icon.png';
import environmentIcon from './images/icons/Environment-Icon.png';

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: false,
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
      <div className="App">
        <div>
          <img src={transportIcon} alt='Transport section icon'/>
          <h2>
            Transport
          </h2>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div style={styles.goal}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
