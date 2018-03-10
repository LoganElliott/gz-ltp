import React, { Component } from 'react';
import FundingChip from './FundingChip';

class FundingChips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chips: [
        {
          id: 'Light Rail',
          chipName: 'Light Rail',
          fullName: 'Light Rail',
          x: 0,
          y: 0,
        },
        {
          id: 'skypath',
          chipName: 'Skypath',
          description: 'Skypath',
          x: 0,
          y: 0,
        },
        {
          id: 'ConnectedCyclingNetwork',
          chipName: 'Connected Cycling Network',
          description: 'Connected Cycling Network',
          x: 0,
          y: 0,
        },
        {
          id: 'Congestion Free Network',
          chipName: 'Congestion Free Network',
          description: 'Congestion Free Network',
          x: 0,
          y: 0,
        },
        {
          id: 'Mill Road',
          chipName: 'Mill Road',
          description: 'Mill Road',
          x: 0,
          y: 0,
        },
        {
          id: 'Penlink',
          chipName: 'Penlink',
          description: 'Penlink',
          x: 0,
          y: 0,
        },
        {
          id: 'AWHC',
          chipName: 'AWHC',
          description: 'Additional Waitemata Habour Crossing',
          x: 0,
          y: 0,
        },
        {
          id: 'TransportOrientedDevelopment',
          chipName: 'Transport Oriented Development',
          description: 'Transport Oriented Development\n',
          x: 0,
          y: 0,
        },
        {
          id: 'UrbanIntensification',
          chipName: 'Urban Intensification',
          description: 'Urban Intensification',
          x: 0,
          y: 0,
        },
        {
          id: 'ValueRecapture',
          chipName: 'Value Recapture',
          description: 'Value Recapture',
          x: 0,
          y: 0,
        },
        {
          id: 'SprawlDevelopment',
          chipName: 'Sprawl Development',
          description: 'Sprawl Development',
          x: 0,
          y: 0,
        },
        {
          id: 'ZeroEmissions',
          chipName: 'Zero Emissions',
          description: 'Zero Emissions by 2050',
          x: 0,
          y: 0,
        },
        {
          id: 'FoodWastage',
          chipName: 'Food Wastage',
          description: 'Food Wastage',
          x: 0,
          y: 0,
        },
        {
          id: 'GreenEnergy',
          chipName: 'Green Energy',
          description: 'Green Energy',
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
      <div>
        <div>
          To achieve the for mentioned goals Auckland has the choice over the next 30 Years to activity fund or not to fund projects.
          Depending on where we allocate our money will make the difference for if they goals are met.
          <br/>
          Below we have a 'Fund' & 'Don't Fund' section, where we have put what we think Auckland should be funding and not funding.
        </div>
        <div style={styles.container}>
          <div style={styles.fund}>
            Fund
          </div>
          <div style={styles.dontFund}>
            Don't Fund
          </div>
          {chips}
        </div>
      </div>
    );
  }
}

export default FundingChips;
