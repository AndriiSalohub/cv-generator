import FormDescription from "../FormDescription/FormDescription";
import "./Languages.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  deleteLanguage,
  languageChange,
} from "../../store/slices/languagesSlice";

const Languages = () => {
  const languages = useSelector((state) => state.languages);
  const dispatch = useDispatch();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    dispatch(languageChange({ index, name, value }));
  };

  const handleAddLanguage = () => {
    dispatch(addLanguage());
  };

  const handleDeleteLanguage = (event) => {
    event.preventDefault();

    dispatch(deleteLanguage());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
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
              name="language"
              id={`language-${language}-${index}`}
              type="text"
              className="languages__form-input form-input"
              placeholder="New language..."
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
            <select
              name="lvl"
              id="language-lvl"
              className="languages__form-select"
              onChange={(event) => handleInputChange(event, index)}
            >
              <option value="null">Select language proficiency</option>
              <option value="elementary">Elementary</option>
              <option value="limited">Limited</option>
              <option value="professional">Professional</option>
              <option value="native">Native / Bilingual</option>
            </select>
            {languages.length > 1 && (
              <button
                className="skills__form-delete-btn delete-btn"
                onClick={(event) => handleDeleteLanguage(event, index)}
                onKeyDown={(event) => handleKeyPress(event, index)}
              >
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
