import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return '';
    console.log(this.props.balance);
    console.log(bitcoin)

    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''));
  }
  render() {
    return (
      <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
    );
  }
}

const mapStateToProps = state => {
  return {
    bitcoin: state.bitcoin,
    balance: state.balance
  }
}
const actionCreators = {
  fetchBitcoin
}

export default connect(mapStateToProps, actionCreators)(Loot);