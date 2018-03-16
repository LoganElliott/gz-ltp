import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import waterLevy from './images/Water-Levy.png';
import treeLevy from './images/Tree-Levy.png';
import transport from './images/Transport.png';

class BigQuestions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bigChoices: {
        fossilFuelTax: {
          key: 'fossilFuelTax',
          label: '10c per litre “Fossil Fuel Tax” to fund the public transport Auckland desperately needs. Less pollution & traffic. More transport freedom.',
          checked: true,
          image: transport
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
    };

    this.updateCheckbox.bind(this);
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

  render() {
    const styles = {
      bigQuestionsText: {
        fontSize: '50px',
        color: 'white'
      },
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
      },
      bigQuestions: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      image: {
        width: '300px',
        height: '300px',
      },
      checkbox: {
        maxWidth: '200px',
        padding: '10px'
      },
      text: {
        fontFamily: 'Gotham-Light',
        color: 'white',
        padding: '10px'
      }
    };

    return(
      <div>
        <div style={styles.bigQuestionsText}>
         3 Big Questions
        </div>
        <div style={styles.bigQuestions}>
          {Object.keys(this.state.bigChoices).map(bigChoicesCheckboxKey => {
            return (
              <div style={styles.container} key={bigChoicesCheckboxKey}>
                <img style={styles.image} src={this.state.bigChoices[bigChoicesCheckboxKey].image}/>
                <div style={styles.text}>
                  -{this.state.bigChoices[bigChoicesCheckboxKey].label}
                </div>
                <Checkbox
                  checked={this.state.bigChoices[bigChoicesCheckboxKey].checked}
                  onCheck={(event, isInputChecked) => this.updateCheckbox(isInputChecked, 'bigChoices', bigChoicesCheckboxKey)}
                  label={'I agree with this'}
                  style={styles.checkbox}
                />
              </div>)
          })}
        </div>
      </div>
    );
  }
}

export default BigQuestions;