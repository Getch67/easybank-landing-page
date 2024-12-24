import PropTypes from "prop-types";

const FeatureCard = ({ img, imgAlt, featureTitle, featureDetail }) => {
  return (
    <div className="card-why">
      <img src={img} alt={imgAlt} />
      <h2 className="card-why-h">{featureTitle}</h2>
      <p className="card-why-p">{featureDetail}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  featureTitle: PropTypes.string,
  featureDetail: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default FeatureCard;
