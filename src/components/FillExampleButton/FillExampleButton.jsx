import { useDispatch, useSelector } from "react-redux";
import "./FillExampleButton.scss";
import { addProfileImage } from "../../store/slices/profileSlice";
import { generalInformationChange } from "../../store/slices/generalInformationSlice";
import {
  addEducation,
  educationChange,
} from "../../store/slices/educationSlice";
import { workExperienceChange } from "../../store/slices/workSlice";
import { addSkill, skillChange } from "../../store/slices/skillsSlice";
import { addLanguage, languageChange } from "../../store/slices/languagesSlice";
import { addInterest, interestChange } from "../../store/slices/interestsSlice";

const FillExampleButton = () => {
  const dispatch = useDispatch();
  const { interests, education, skills, languages } = useSelector(
    (state) => state,
  );

  const handleFillExample = () => {
    dispatch(
      addProfileImage(
        "https://darkwool.github.io/cv-creator-app/static/media/wick.706844766c7185f54461.png",
      ),
    );
    dispatch(generalInformationChange({ name: "firstName", value: "Andrii" }));
    dispatch(generalInformationChange({ name: "lastName", value: "Salohub" }));
    dispatch(
      generalInformationChange({ name: "profession", value: "Web Developer" }),
    );
    dispatch(
      generalInformationChange({ name: "location", value: "Kharkiv, Ukraine" }),
    );
    dispatch(
      generalInformationChange({ name: "linkedIn", value: "andrii-salohub" }),
    );
    dispatch(
      generalInformationChange({
        name: "portfolio",
        value: "https://github.com/AndriiSalohub",
      }),
    );
    dispatch(
      generalInformationChange({
        name: "email",
        value: "andrejsalogub3@gmail.com",
      }),
    );
    dispatch(generalInformationChange({ name: "phoneNumber", value: "-" }));
    dispatch(
      generalInformationChange({
        name: "description",
        value:
          "Dynamic and detail-oriented web developer with a passion for crafting engaging and user-friendly experiences. Proficient in front-end technologies such as HTML, CSS, and JavaScript, with a keen eye for design aesthetics and responsiveness. Experienced in translating client needs into intuitive interfaces and collaborating with cross-functional teams to deliver high-quality projects. Constantly seeking to expand skills and stay abreast of industry trends to create cutting-edge web solutions.",
      }),
    );

    dispatch(
      educationChange({ index: 0, name: "schoolName", value: "Hogwarts" }),
    );
    dispatch(
      educationChange({
        index: 0,
        name: "degree",
        value: "Master of Dark Arts",
      }),
    );
    dispatch(
      educationChange({ index: 0, name: "startingDate", value: "14/04/2024" }),
    );
    dispatch(
      educationChange({ index: 0, name: "endingDate", value: "14/04/2029" }),
    );

    if (education.length < 2) {
      dispatch(addEducation());
    }

    dispatch(
      educationChange({
        index: 1,
        name: "schoolName",
        value: "The Odin Project",
      }),
    );
    dispatch(
      educationChange({
        index: 1,
        name: "degree",
        value: "Full Stack Developer Certification",
      }),
    );
    dispatch(educationChange({ index: 1, name: "startingDate", value: "-" }));
    dispatch(educationChange({ index: 1, name: "endingDate", value: "-" }));

    dispatch(
      workExperienceChange({
        index: 0,
        name: "position",
        value: "Front End Developer",
      }),
    );
    dispatch(workExperienceChange({ index: 0, name: "company", value: "-" }));
    dispatch(
      workExperienceChange({
        index: 0,
        name: "location",
        value: "Kharkiv, Ukraine",
      }),
    );
    dispatch(workExperienceChange({ index: 0, name: "from", value: "-" }));
    dispatch(workExperienceChange({ index: 0, name: "to", value: "Present" }));
    dispatch(
      workExperienceChange({
        index: 0,
        name: "tasks",
        value:
          "Designed and developed responsive web pages using HTML, CSS, and JavaScript. Collaborated with UX/UI designers to ensure a consistent and user-friendly design across the website. Participated in team meetings and provided input on project planning and development strategies.",
      }),
    );

    dispatch(
      skillChange({
        index: 0,
        name: "skill",
        value: "HTML, CSS, and JavaScript",
      }),
    );
    if (skills.length < 4) {
      dispatch(addSkill());
    }
    dispatch(
      skillChange({ index: 1, name: "skill", value: "React and Redux" }),
    );
    if (skills.length < 4) {
      dispatch(addSkill());
    }
    dispatch(skillChange({ index: 2, name: "skill", value: "Next JS" }));
    if (skills.length < 4) {
      dispatch(addSkill());
    }
    dispatch(skillChange({ index: 3, name: "skill", value: "Tailwind CSS" }));
    if (skills.length < 4) {
      dispatch(addSkill());
    }
    dispatch(skillChange({ index: 4, name: "skill", value: "Git and GitHub" }));

    dispatch(
      languageChange({ index: 0, name: "language", value: "Ukrainian" }),
    );
    dispatch(
      languageChange({ index: 0, name: "lvl", value: "native / bilingual" }),
    );
    if (languages.length < 3) {
      dispatch(addLanguage());
    }
    dispatch(languageChange({ index: 1, name: "language", value: "Russian" }));
    dispatch(
      languageChange({ index: 1, name: "lvl", value: "native / bilingual" }),
    );
    if (languages.length < 3) {
      dispatch(addLanguage());
    }
    dispatch(languageChange({ index: 2, name: "language", value: "English" }));
    dispatch(languageChange({ index: 2, name: "lvl", value: "intermediate" }));

    dispatch(
      interestChange({ index: 0, name: "interest", value: "Programming" }),
    );
    if (interests.length < 2) {
      dispatch(addInterest());
    }
    dispatch(interestChange({ index: 1, name: "interest", value: "Gaming" }));
    if (interests.length < 2) {
      dispatch(addInterest());
    }
    dispatch(interestChange({ index: 2, name: "interest", value: "Math" }));
  };

  return (
    <button className="fill-example-btn" onClick={() => handleFillExample()}>
      Fill Example CV
    </button>
  );
};

export default FillExampleButton;
