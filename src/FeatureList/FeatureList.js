import React from 'react';
import slugify from 'slugify';
import FEATURES from '../FEATURES';
import FeatureItem from '../FeatureItem/FeatureItem';
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './FeatureList.css';

class FeaturesList extends React.Component {
  render() {
    const { selectedFeatures } = this.props
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem 
            key= {itemHash}
            itemHash={itemHash}
            feature= {feature}
            item= {item}
            selectedFeature= {selectedFeatures[feature]}
            handleSelection= {this.props.handleSelection}
          />
        );
      });

      return (
        <FeatureOptions 
          key= {featureHash}
          featureHash= {featureHash}
          feature= {feature}
          options= {options}
        />
      );
    });

    return (
      <>
        {features}
      </>
    );
  }
}

export default FeaturesList;