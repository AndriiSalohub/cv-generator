import { useSelector } from "react-redux";
import "./Cv.scss";

const Cv = () => {
  const profileImage = useSelector((state) => state.profile.profileImage);
  const skills = useSelector((state) => state.skills);
  const languages = useSelector((state) => state.languages);
  const interests = useSelector((state) => state.interests);

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
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </div>
    </section>
  );
};

export default Cv;
