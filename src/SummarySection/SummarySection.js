import React from 'react';
import SummaryCart from '../SummaryCart/SummaryCart';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import './SummarySection.css';

class SummarySection extends React.Component {
  render() {

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
          <SummaryCart selectedFeatures={this.props.selectedFeatures} />
          <SummaryTotal selectedFeatures={this.props.selectedFeatures} />
      </section>
    );
  }
}

export default SummarySection;