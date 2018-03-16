import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import transportIcon from './images/Transport.png';
import housingIcon from './images/Housing.png';
import environmentIcon from './images/Environment.png';

class Goals extends Component {
  render() {
    const styles = {
      container: {
        color: 'white',
      },
      title: {
        fontSize: '50px',
        padding: '10px',
      },
      subTitle: {
        fontFamily: 'Gotham-Light',
        fontSize: '20px',
        padding: '10px',
      },
      goals: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
      goalContainer: {
        fontFamily: 'Gotham-Light',
      },
      goalHeader: {
        fontSize: '40px',
        fontFamily: 'Gotham-Bold',
        padding: '10px',
      },
      checkbox: {
        maxWidth: '300px',
      },
      checkboxContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
      },
      goal: {
        margin: '20px',
      },
      icon: {
        width: '300px',
        height: '300px',
      },
      labelStyle: {
        fontFamily: 'Gotham-Light',
      }
    };

    return (
      <div style={styles.container}>
        <div style={styles.title}>
          Auckland Plan Goals
        </div>
        <div style={styles.subTitle}>
          The Auckland Plan sets out the vision for our city in 2050. However, then plan is not bold enough to meet our future challenges, and is weak in some important areas. We have come up with new suggested goals for what we want our city to be like in 2050. Let us know if you support them:
        </div>
        <div style={styles.goals}>
          <div style={styles.goalContainer}>
            <img style={styles.icon} src={transportIcon} alt='Transport section icon'/>
            <div style={styles.goalHeader}>
              Transport
            </div>
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
                checked={this.props.goals.transportCheck}
                onCheck={() => this.props.updateGoalsCheckbox('transportCheck')}
                style={styles.checkbox}
                labelStyle={styles.labelStyle}
              />
            </div>
          </div>
          <div style={styles.goalContainer}>
            <img style={styles.icon} src={housingIcon}  alt='Housing section icon'/>
            <div style={styles.goalHeader}>
              Housing
            </div>
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
                checked={this.props.goals.housingCheck}
                onCheck={() => this.props.updateGoalsCheckbox('housingCheck')}
                style={styles.checkbox}
                labelStyle={styles.labelStyle}
              />
            </div>
          </div>
          <div style={styles.goalContainer}>
            <img style={styles.icon} src={environmentIcon}  alt='Environment section icon'/>
            <div style={styles.goalHeader}>
              Environment
            </div>
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
                checked={this.props.goals.environmentCheck}
                onCheck={() => this.props.updateGoalsCheckbox('environmentCheck')}
                style={styles.checkbox}
                labelStyle={styles.labelStyle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
