import { useDispatch, useSelector } from "react-redux";
import FormDescription from "../FormDescription/FormDescription";
import "./Interests.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  addInterest,
  deleteInterest,
  interestChange,
} from "../../store/slices/interestsSlice";

const Interests = () => {
  const interests = useSelector((state) => state.interests);
  const dispatch = useDispatch();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    dispatch(interestChange({ index, name, value }));
  };

  const handleAddInterest = () => {
    dispatch(addInterest());
  };

  const handleDeleteInterest = (event, index) => {
    event.preventDefault();

    dispatch(deleteInterest(index));
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
        {interests.map(({ interest }, index) => (
          <div key={index}>
            <input
              type="text"
              name="interest"
              className="interests__form-input form-input"
              placeholder="New Interest..."
              value={interest}
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
