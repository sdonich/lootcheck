import React from 'react';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h3 className="balance">
          Wallet balance: {this.props.balance}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state
  }
}

export default connect(mapStateToProps)(Wallet);