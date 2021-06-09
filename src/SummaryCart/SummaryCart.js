import React from 'react';
import './SummaryCart.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class SummaryCart extends React.Component {
  render() {
    const { selectedFeatures } = this.props
    const summary = Object.keys(selectedFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selectedFeatures[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    return (
      summary
    );
  }
}
export default SummaryCart;