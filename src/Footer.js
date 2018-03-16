import React from 'react'
import ShareButtons from './ShareButtons';

export default class footer extends React.Component {
  render() {
    const styles = {
      footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17px',
        color:"snow",
        flexDirection: 'column'
      }
    };

    return(
      <div style={styles.footer}>
        <ShareButtons/>
        <div >Authorised by Leroy Beckett, Generation Zero, 295 Karangahape Road, AKL</div>
      </div>
    );
  }
}
