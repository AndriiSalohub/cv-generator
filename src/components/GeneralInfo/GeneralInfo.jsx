import "./GeneralInfo.scss";
import FormDescription from "../FormDescription/FormDescription.jsx";
import { useDispatch, useSelector } from "react-redux";
import { generalInformationChange } from "../../store/slices/generalInformationSlice.js";

const GeneralInfo = () => {
  const {
    firstName,
    lastName,
    profession,
    location,
    linkedIn,
    portfolio,
    email,
    phoneNumber,
    description,
  } = useSelector((state) => state.generalInformation);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.split(" ").length == 2) {
      const fieldName =
        name.split(" ")[0] +
        name.split(" ")[1][0].toUpperCase() +
        name.split(" ")[1].slice(1);

      dispatch(
        generalInformationChange({
          name: fieldName,
          value,
        }),
      );
    } else {
      dispatch(
        generalInformationChange({
          name,
          value,
        }),
      );
    }
  };

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
      <form className="general-info__form form">
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
              value={firstName}
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
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
              value={lastName}
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
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
          value={profession}
          placeholder="e.g. Web Developer"
          className="general-info__form-input form-input"
          onChange={(event) => handleInputChange(event)}
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
          value={location}
          placeholder="e.g. Atlanta Developer"
          className="general-info__form-input form-input"
          onChange={(event) => handleInputChange(event)}
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
              value={linkedIn}
              placeholder="e.g. andriisalohub"
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
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
              value={portfolio}
              placeholder="e.g. https://github.com/AndriiSalohub/"
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
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
              value={email}
              placeholder="e.g. example@gmail.com"
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
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
              value={phoneNumber}
              placeholder="e.g. +38 067452 1334"
              className="general-info__form-input form-input"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
        <label
          htmlFor="description"
          className="general-info__form-label form-label"
        >
          Desctiption(About me)
        </label>
        <textarea
          name="description"
          id="description"
          rows="6"
          value={description}
          placeholder="Tell us about yourself! This is your chance to showcase your skills, experience, and personality. Write a brief summary of who you are and what you can bring to the table."
          className="general-info__form-textarea form-input"
          onChange={(event) => handleInputChange(event)}
        ></textarea>
      </form>
    </section>
  );
};

export default GeneralInfo;
