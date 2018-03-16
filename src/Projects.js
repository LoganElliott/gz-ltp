import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transportChips: [
        'A Light Rail Network including from the City to the Airport and North West Auckland',
        'Busways to serve East Auckland and North Shore',
        'More frequent rail services across Auckland',
        'Safe, separated cycle network',
        'Faster, more frequent bus services across Auckland',
        'Safer streets so people can easily walk around their neighbourhood',
        'Safety upgrades to save lives on our rural roads',
      ],
      housingChips: [
        'Funding for community facilities & quality public spaces where major housing growth is proposed in our town centres',
        'Invest in City Centre public spaces (like the Linear Park) to provide for our fast growing population in the City Centre',
      ],
      notProceedChips: [
        'Major road widening projects like Lincoln Road',
        'New rural motorways like Mill Road'
      ],
      extraIdeas: [],
    };

    this.handleAddChip.bind(this);
    this.handleDeleteChip.bind(this);
  }

  handleAddChip (chip) {
    this.setState({
      extraIdeas: [...this.state.extraIdeas, chip]
    })
  }

  handleDeleteChip (deletedChip) {
    if (deletedChip !== 'js') {
      this.setState({
        extraIdeas: this.state.extraIdeas.filter((c) => c !== deletedChip)
      })
    } else {
      alert('Why would you delete JS?')
    }
  }

  render() {
    const styles = {
      chipStyle: {
        whiteSpace: 'pre-wrap',
      },
      chipContainer: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      otherContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px',
      },
    };

    return (
      <div>
        <div>
          <div>
            Projects
          </div>
          <div>
            The Long Term Plan sets out the 10 year budget for Auckland.
          </div>
        </div>
        <div>
          <div>
            There are three big questions Auckland Council is asking that may means you have to pay a little extra for improvements. We think these are good ideas, do you agree?
          </div>
          <Checkbox label={'10c per litre “Fossil Fuel Tax” to fund the public transport Auckland desperately needs. Less pollution & traffic. More transport freedom.  '}/>
          <Checkbox label={'Support a targeted rate to speed up the delivery of cleaner harbours, beaches and streams. Less poo. More swimming.'}/>
          <Checkbox label={'Support a targeted rate to invest in environmental initiatives such as tackling kauri dieback. Less death. More trees. '}/>
        </div>
        <div>
          Auckland Council wants to know your views about where council should spend your money. Three key areas where council spends money are transport, housing (including community facilities) and the environment.
        </div>
        <div>
          <div>
            What transport projects do you think should be prioritised in Auckland (we have suggested some but add your own too!)
          </div>
          <div>
            {this.state.transportChips.map(transportChip => {
              return <Checkbox key={transportChip} label={transportChip}/>
            })}
          </div>
          <div>
            What other transport projects would you like to see built?
          </div>
          <div>
            <TextField fullWidth={true} hintText={'Enter other projects'} multiLine={true}/>
          </div>
        </div>
        <div>
          <div>
            Are there any major transport projects that Auckland Council is proposing that you think should not proceed? (We’ve added a couple of expensive roading projects to give you ideas)
          </div>
          <div>
            {this.state.notProceedChips.map(transportChip => {
              return <Checkbox key={transportChip} label={transportChip}/>
            })}
          </div>
          <div>
            <TextField fullWidth={true} hintText={'Enter other transport projects'} multiLine={true}/>
          </div>
        </div>
        <div>
          <div>
            What other environmental initiatives do you think Auckland Council should spend more money on? (Tree planting? Community gardens? Waste & Recycling?):
          </div>
          <div>
            <TextField fullWidth={true} hintText={'Enter environmental projects'} multiLine={true}/>
          </div>
        </div>
        <div>
          <div>
            Auckland Council facilitates the building of new housing in communities across the city. They also invest money to improve our local centres, which can benefit both existing residents (like yourself) and new people moving here. What projects do you think Auckland Council should focus on to encourage housing & improve our centres? (We’ve added a couple of suggestions to start you off!)
          </div>
          <div>
            {this.state.housingChips.map(transportChip => {
              return <Checkbox key={transportChip} label={transportChip}/>
            })}
          </div>
          <TextField fullWidth={true} hintText={'Enter other housing projects'} multiLine={true}/>
        </div>
        <div>
          What else do you think Auckland Council should do to improve our city?
          <TextField fullWidth={true} hintText={'How should we improve our city?'} multiLine={true}/>
        </div>
      </div>
    )
  }
}

export default Projects;