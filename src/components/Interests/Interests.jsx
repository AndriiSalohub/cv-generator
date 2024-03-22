import { useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./Interests.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Interests = () => {
  const [interests, setInterests] = useState([
    {
      interest: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    setInterests((prevState) =>
      prevState.map((interest, i) => {
        if (i === index) {
          return {
            ...interest,
            [event.target.name]: event.target.value,
          };
        }

        return interest;
      }),
    );
  };

  const handleAddInterest = () => {
    setInterests([...interests, { skill: "" }]);
  };

  const handleDeleteInterest = (event, index) => {
    event.preventDefault();

    setInterests((prevState) => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <section className="interests">
      <FormDescription
        titleNumber="6"
        title="Interests"
        description="Your interests can give employers a better sense of who you are as a person and what motivates you. Be sure to choose interests that are relevant to the job you're applying for, and that showcase your personality, skills, and values. e.g if you're applying for a job in marketing, include interests such as writing or photography."
        addMoreButton={true}
        buttonText="Add Interest"
        handleClick={handleAddInterest}
      />
      <form action="" className="interests__form form">
        {interests.map((interest, index) => (
          <div key={index}>
            <input
              type="text"
              name="interest"
              className="interests__form-input form-input"
              placeholder="New Interest..."
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
            {interests.length > 1 && (
              <button
                className="interests__form-delete-btn delete-btn"
                onClick={(event) => handleDeleteInterest(event, index)}
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

export default Interests;
