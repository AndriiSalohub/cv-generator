import { useDispatch, useSelector } from "react-redux";
import "./FillExampleButton.scss";
import { addProfileImage } from "../../store/slices/profileSlice";
import { generalInformationChange } from "../../store/slices/generalInformationSlice.js";
import {
  educationChange,
  addEducation,
} from "../../store/slices/educationSlice";
import { workExperienceChange } from "../../store/slices/workSlice";
import { skillChange, addSkill } from "../../store/slices/skillsSlice";
import { languageChange, addLanguage } from "../../store/slices/languagesSlice";
import { interestChange, addInterest } from "../../store/slices/interestsSlice";

const FillExampleButton = () => {
  const dispatch = useDispatch();
  const { interests, education, skills, languages } = useSelector(
    (state) => state,
  );

  const fillGeneralInformation = () => {
    const generalInfo = {
      firstName: "Andrii",
      lastName: "Salohub",
      profession: "Web Developer",
      location: "Kharkiv, Ukraine",
      linkedIn: "andrii-salohub",
      portfolio: "https://github.com/AndriiSalohub",
      email: "andrejsalogub3@gmail.com",
      phoneNumber: "-",
      description:
        "Dynamic and detail-oriented web developer with a passion for crafting engaging and user-friendly experiences. Proficient in front-end technologies such as HTML, CSS, and JavaScript, with a keen eye for design aesthetics and responsiveness. Experienced in translating client needs into intuitive interfaces and collaborating with cross-functional teams to deliver high-quality projects. Constantly seeking to expand skills and stay abreast of industry trends to create cutting-edge web solutions.",
    };
    Object.entries(generalInfo).forEach(([name, value]) => {
      dispatch(generalInformationChange({ name, value }));
    });
  };

  const fillEducation = () => {
    const exampleEducations = [
      {
        schoolName: "Hogwarts",
        degree: "Master of Dark Arts",
        startingDate: "14/04/2024",
        endingDate: "14/04/2029",
      },
      {
        schoolName: "The Odin Project",
        degree: "Full Stack Developer Certification",
        startingDate: "-",
        endingDate: "-",
      },
    ];

    exampleEducations.forEach((example, index) => {
      Object.entries(example).forEach(([name, value]) => {
        dispatch(educationChange({ index, name, value }));
      });
      if (index < 1 && education.length < 2) {
        dispatch(addEducation());
      }
    });
  };

  const fillWorkExperience = () => {
    const exampleExperience = [
      {
        position: "Front End Developer",
        company: "-",
        location: "Kharkiv, Ukraine",
        from: "-",
        to: "Present",
        tasks:
          "Designed and developed responsive web pages using HTML, CSS, and JavaScript. Collaborated with UX/UI designers to ensure a consistent and user-friendly design across the website. Participated in team meetings and provided input on project planning and development strategies.",
      },
    ];

    exampleExperience.forEach((example, index) => {
      Object.entries(example).forEach(([name, value]) => {
        dispatch(workExperienceChange({ index, name, value }));
      });
    });
  };

  const fillSkills = () => {
    const exampleSkills = [
      "HTML, CSS, and JavaScript",
      "React and Redux",
      "Next JS",
      "Tailwind CSS",
      "Git and GitHub",
    ];

    exampleSkills.forEach((skill, index) => {
      dispatch(skillChange({ index, name: "skill", value: skill }));
      if (index < 3 && skills.length < 4) {
        dispatch(addSkill());
      }
    });
  };

  const fillLanguages = () => {
    const exampleLanguages = [
      { language: "Ukrainian", lvl: "native / bilingual" },
      { language: "Russian", lvl: "native / bilingual" },
      { language: "English", lvl: "intermediate" },
    ];

    exampleLanguages.forEach((language, index) => {
      Object.entries(language).forEach(([name, value]) => {
        dispatch(languageChange({ index, name, value }));
      });
      if (index < 2 && languages.length < 3) {
        dispatch(addLanguage());
      }
    });
  };

  const fillInterests = () => {
    const exampleInterests = ["Programming", "Gaming", "Math"];

    exampleInterests.forEach((interest, index) => {
      dispatch(interestChange({ index, name: "interest", value: interest }));
      if (index < 2 && interests.length < 3) {
        dispatch(addInterest());
      }
    });
  };

  const handleFillExample = () => {
    dispatch(
      addProfileImage(
        "https://darkwool.github.io/cv-creator-app/static/media/wick.706844766c7185f54461.png",
      ),
    );
    fillGeneralInformation();
    fillEducation();
    fillWorkExperience();
    fillSkills();
    fillLanguages();
    fillInterests();
  };

  return (
    <button className="fill-example-btn" onClick={handleFillExample}>
      Fill Example CV
    </button>
  );
};

export default FillExampleButton;
