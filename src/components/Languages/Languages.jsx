import { useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./Languages.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Languages = () => {
  const [languages, setLanguages] = useState([
    {
      language: "",
      lvl: "",
    },
  ]);

  const handleAddLanguage = () => {
    setLanguages([...languages, { language: "", lvl: "" }]);
  };

  return (
    <section className="languages">
      <FormDescription
        titleNumber="5"
        title="Languages"
        description="By listing the languages you know and your proficiency level in each, you can demonstrate your ability to communicate effectively with people from different cultures and increase your appeal to potential employers."
        addMoreButton={true}
        buttonText="Add Language"
        handleClick={handleAddLanguage}
      />
      <form action="" className="languages__form form">
        {languages.map((language, index) => (
          <div key={index}>
            <input
              id={`language-${language}-${index}`}
              type="text"
              className="languages__form-input form-input"
              placeholder="New language..."
            />
            <select
              name="language-lvl"
              id="language-lvl"
              className="languages__form-select"
            >
              <option value="null">Select language proficiency</option>
              <option value="elementary">Elementary</option>
              <option value="limited">Limited</option>
              <option value="professional">Professional</option>
              <option value="native">Native / Bilingual</option>
            </select>
            {languages.length > 1 && (
              <button className="skills__form-delete-btn delete-btn">
                <RiDeleteBin5Line />
              </button>
            )}
          </div>
        ))}
      </form>
    </section>
  );
};

export default Languages;
