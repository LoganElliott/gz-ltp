import React from 'react'

export default class footer extends React.Component {
  constructor(context) {
    super(context);
  }

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
        <div >Authorised by Leroy Beckett, Generation Zero, 21 Shaddock Street, AKL</div>
      </div>
    );
  }
}
