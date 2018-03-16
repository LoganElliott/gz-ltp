import React from 'react'

export default class footer extends React.Component {
  render() {
    const styles = {
      footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '17px',
        color:"snow",
      }
    };

    return(
      <div style={styles.footer}>
        <div >Authorised by Leroy Beckett, Generation Zero, 295 Karangahape Road, AKL</div>
      </div>
    );
  }
}
