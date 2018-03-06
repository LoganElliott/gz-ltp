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
        height: '506px',
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '2px',
      },
      box: {
        position: 'relative',
        borderStyle: 'solid',
        borderWidth: '2px',
        height: '250px'
      },
      boxBottom: {
        position: 'relative',
        height: '250px'
      },
      fund: {
        fontSize: '25px',
        height: '250px',
      },
      dontFund: {
        fontSize: '25px',
        borderWidth: '2px',
        borderStyle: 'solid none none none',
      }
    };

    const chips = this.state.chips.map(chip => <FundingChip key={chip.id} chip={chip}/>);

    return (
      <div style={styles.container}>
        <div style={styles.fund}>
          Fund
        </div>
        <div style={styles.dontFund}>
          Don't Fund
        </div>
        {chips}
      </div>
    );
  }
}

export default FundingChips;
