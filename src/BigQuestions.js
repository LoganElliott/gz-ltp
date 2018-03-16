import React from 'react'
import Checkbox from 'material-ui/Checkbox';

class BigQuestions extends React.Component {
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
      },
      labelStyle: {
        fontFamily: 'Gotham-Light',
      }
    };

    return(
      <div>
        <div style={styles.bigQuestionsText}>
         3 Big Questions
        </div>
        <div style={styles.bigQuestions}>
          {Object.keys(this.props.bigChoices).map(bigChoicesCheckboxKey => {
            return (
              <div style={styles.container} key={bigChoicesCheckboxKey}>
                <img style={styles.image} src={this.props.bigChoices[bigChoicesCheckboxKey].image} alt={this.props.bigChoices[bigChoicesCheckboxKey].label}/>
                <div style={styles.text}>
                  -{this.props.bigChoices[bigChoicesCheckboxKey].label}
                </div>
                <Checkbox
                  checked={this.props.bigChoices[bigChoicesCheckboxKey].checked}
                  onCheck={() => this.props.updateCheckbox('bigChoices', bigChoicesCheckboxKey)}
                  label={'I agree with this'}
                  style={styles.checkbox}
                  labelStyle={styles.labelStyle}
                />
              </div>)
          })}
        </div>
      </div>
    );
  }
}

export default BigQuestions;