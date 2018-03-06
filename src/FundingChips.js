import React, { Component } from 'react';
import FundingChip from './FundingChip';

class FundingChips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chips: [
        {
          id: 'crl',
          chipName: 'Crl',
          fullName: 'City Rail Link',
          x: 0,
          y: 0,
        },
        {
          id: 'skypath',
          chipName: 'Skypath',
          description: 'Skypath',
          x: 0,
          y: 0,
        }
      ]
    }
  }

  render() {

    const styles = {
      container: {
        height: '508px',
        position: 'relative'
      },
      box: {
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '2px',
        height: '250px'
      },
      boxBottom: {
        position: 'relative',
        borderStyle: 'none solid solid solid',
        borderWidth: '2px',
        height: '250px'
      },
      title: {
        fontSize: '25px',
      }
    };

    const chips = this.state.chips.map(chip => <FundingChip key={chip.id} chip={chip}/>);

    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <div style={styles.title}>
            Fund
          </div>
        </div>
        <div style={styles.boxBottom}>
          <div style={styles.title}>
            Don't Fund
          </div>
        </div>
        {chips}
      </div>
    );
  }
}

export default FundingChips;
