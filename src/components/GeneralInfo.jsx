import "../styles/GeneralInfo.scss";

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <header className="general-info__header">
        <div className="general-info__title-container">
          <span className="general-info__title-number">1</span>
          <h2 className="general-info__title">General Information</h2>
        </div>
        <p className="general-info__description">
          This is a critical part of your CV as it gives the potential employer
          a glimpse of who you are. This is an opportunity for you to introduce
          yourself, highlight your skills, and provide a brief summary of your
          career goals.
        </p>
      </header>
      <fomr className="general-info__form"></fomr>
    </section>
  );
};

export default GeneralInfo;
