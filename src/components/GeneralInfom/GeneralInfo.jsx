import "./GeneralInfo.scss";
import FormDescription from "../FormDescription/FormDescription.jsx";

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <FormDescription
        titleNumber="1"
        title="General Information"
        description="This is a critical part of your CV as it gives the potential employer a
        glimpse of who you are. This is an opportunity for you to introduce
        yourself, highlight your skills, and provide a brief summary of your
        career goals."
        addMoreButton={false}
        buttonText=""
      />
      <fomr className="general-info__form form">
        <div className="general-info__full-name form-container">
          <div>
            {" "}
            <label
              htmlFor="first name"
              className="general-info__form-label form-label"
            >
              First name
            </label>
            <input
              type="text"
              name="first name"
              id="first name"
              className="general-info__form-input form-input"
            />
          </div>
          <div>
            {" "}
            <label
              htmlFor="last name"
              className="general-info__form-label form-label"
            >
              Last name
            </label>
            <input
              type="text"
              name="last name"
              id="last name"
              className="general-info__form-input form-input"
            />
          </div>
        </div>
        <label
          htmlFor="profession"
          className="general-info__form-label form-label"
        >
          Profession
        </label>
        <input
          type="text"
          name="profession"
          id="profession"
          placeholder="e.g. Web Developer"
          className="general-info__form-input form-input"
        />
        <label
          htmlFor="location"
          className="general-info__form-label form-label"
        >
          City and Country:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="e.g. Atlanta Developer"
          className="general-info__form-input form-input"
        />
        <div className="general-info__contacts form-container">
          <div>
            <label
              htmlFor="linkedIn"
              className="general-info__form-label form-label"
            >
              LinkedIn username
            </label>
            <input
              type="text"
              name="linkedIn"
              id="linkedIn"
              placeholder="e.g. andriisalohub"
              className="general-info__form-input form-input"
            />
          </div>
          <div>
            <label
              htmlFor="portfolio"
              className="general-info__form-label form-label"
            >
              Portfolio URL
            </label>
            <input
              type="url"
              name="portfolio"
              id="portfolio"
              placeholder="e.g. https://github.com/AndriiSalohub/"
              className="general-info__form-input form-input"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="general-info__form-label form-label"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. example@gmail.com"
              className="general-info__form-input form-input"
            />
          </div>
          <div>
            <label
              htmlFor="phone number"
              className="general-info__form-label form-label"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phone number"
              id="phone number"
              placeholder="e.g. +38 067452 1334"
              className="general-info__form-input form-input"
            />
          </div>
        </div>
        <label
          htmlFor="desctiption"
          className="general-info__form-label form-label"
        >
          Desctiption(About me)
        </label>
        <textarea
          name="desctiption"
          id="desctiption"
          rows="6"
          placeholder="Tell us about yourself! This is your chance to showcase your skills, experience, and personality. Write a brief summary of who you are and what you can bring to the table."
          className="general-info__form-textarea form-input"
        ></textarea>
      </fomr>
    </section>
  );
};

export default GeneralInfo;
