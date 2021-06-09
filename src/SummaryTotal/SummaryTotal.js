import React from 'react';
import './SummaryTotal.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryTotal extends React.Component {
  render() {
    const { selectedFeatures } = this.props;
    const total = Object.keys(selectedFeatures).reduce(
      (acc, curr) => acc + selectedFeatures[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}


export default SummaryTotal;