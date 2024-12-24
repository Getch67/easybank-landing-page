import PropTypes from "prop-types";

const ArticleCard = ({ author, title, detail, img, imgAlt }) => {
  return (
    <div className="card-latest">
      <img src={img} alt={imgAlt} loading="lazy" className="card-latest-img" />
      <div className="card-latest-details">
        <p className="text-xs text-GrayishBlue">{author}</p>
        <h3 className="card-latest-h">{title}</h3>
        <p className="card-latest-p">{detail}</p>
      </div>
    </div>
  );
};
ArticleCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default ArticleCard;
