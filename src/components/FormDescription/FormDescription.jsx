import PropTypes from "prop-types";
import "./FormDescription.scss";

const FormDescription = ({
  titleNumber,
  title,
  description,
  addMoreButton,
  buttonText,
}) => {
  return (
    <header className="form-description">
      <div className="form-description__title-container">
        <span className="form-description__title-number">{titleNumber}</span>
        <h2 className="form-description__title title">{title}</h2>
      </div>
      <p className="form-description__description description">{description}</p>
      {addMoreButton && (
        <button className="form-description__add-btn">{buttonText}</button>
      )}
    </header>
  );
};

FormDescription.propTypes = {
  titleNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addMoreButton: PropTypes.bool,
  buttonText: PropTypes.string,
};

export default FormDescription;
