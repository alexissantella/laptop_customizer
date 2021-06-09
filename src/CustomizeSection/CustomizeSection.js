import React from 'react';
import FeaturesList from '../FeatureList/FeatureList';

class CustomizeSection extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeaturesList 
          selectedFeatures={this.props.selectedFeatures}
          handleSelection= {this.props.handleSelection}
        />
      </form>
    );
  }
}

CustomizeSection.defaultProps = {
  features: []
};

export default CustomizeSection;