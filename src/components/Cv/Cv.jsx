import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Cv.scss";

const Cv = () => {
  const profileImage = useSelector((state) => state.profile.profileImage);
  const skills = useSelector((state) => state.skills);
  const languages = useSelector((state) => state.languages);
  const interests = useSelector((state) => state.interests);
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

  return (
    <section className="cv">
      <aside className="cv__sidebar">
        {profileImage ? (
          <img alt="" className="cv__sidebar-image" src={profileImage} />
        ) : (
          <div className="cv__sidebar-image-placeholder image-placeholder"></div>
        )}
        <section className="cv__sidebar-skills cv__sidebar-part">
          <h2 className="cv__sidebar-skills-title cv__sidebar-part-title">
            Skills
          </h2>
          <ul className="cv__sidebar-skills-list cv__sidebar-list">
            {skills.map(
              ({ skill }) =>
                skill && (
                  <li
                    className="cv__sidebar-skills-list-item cv__sidebar-list-item"
                    key={skill}
                  >
                    - {skill}
                  </li>
                ),
            )}
          </ul>
        </section>
        <section className="cv__sidebar-languages cv__sidebar-part">
          <h2 className="cv__sidebar-skills-languages cv__sidebar-part-title">
            Languages
          </h2>
          <ul className="cv__sidebar-languages-list cv__sidebar-list">
            {languages.map(
              ({ language, lvl }) =>
                language && (
                  <li
                    className="cv__sidebar-languages-list-item cv__sidebar-list-item"
                    key={language}
                  >
                    <p>- {language}</p>
                    <span>
                      {lvl.replace(/\b\w/g, function(char) {
                        return char.toUpperCase();
                      })}
                    </span>
                  </li>
                ),
            )}
          </ul>
        </section>
        <section className="cv__sidebar-interests cv__sidebar-part">
          <h2 className="cv__sidebar-skills-interests cv__sidebar-part-title">
            Interests
          </h2>
          <ul className="cv__sidebar-interests-list cv__sidebar-list">
            {interests.map(
              ({ interest }) =>
                interest && (
                  <li
                    className="cv__sidebar-iterests-list-item cv__sidebar-list-item"
                    key={interest}
                  >
                    - {interest}
                  </li>
                ),
            )}
          </ul>
        </section>
      </aside>
      <div className="cv__main">
        <section className="cv__main-general-info">
          <h2 className="cv__main-general-info-name">
            {firstName} {lastName}
          </h2>
          <h3 className="cv__main-general-info-job">{profession}</h3>
          <p className="cv__main-general-info-location">
            <FaLocationDot /> {location}
          </p>
          <p className="cv__main-general-info-description desctiption">
            {description}
          </p>
          <ul className="cv__main-general-info-contact-list">
            <li className="cv__main-general-info-contact-list-item">
              <CgMail />{" "}
              <a href={`mailto:${email}`} target="_blank">
                {email}
              </a>
            </li>
            <li className="cv__main-general-info-contact-list-item cv__main-general-info-contact-list-item-number">
              <FaPhoneAlt /> {phoneNumber}
            </li>
            <li className="cv__main-general-info-contact-list-item">
              <FaLinkedin />{" "}
              <a
                href={`https://www.linkedin.com/in/${linkedIn}`}
                target="_blank"
              >
                {linkedIn}
              </a>
            </li>
            <li className="cv__main-general-info-contact-list-item">
              <FaGithub />{" "}
              <a href={portfolio} target="_blank">
                {portfolio}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Cv;
