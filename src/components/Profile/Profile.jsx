import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProfileImage } from "../../store/slices/profileSlice";

const Profile = () => {
  const profile = useSelector((state) => state.profile.profileImage);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addProfileImage(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <section className="profile">
      {profile ? (
        <img alt="" className="profile__image" src={profile} />
      ) : (
        <div className="profile__image-placeholder image-placeholder"></div>
      )}
      <div className="profile__image-info">
        <h2 className="profile__image-title title">Profile Picture</h2>
        <p className="profile__image-description description">
          Adding a photo to your CV can be a great way to personalize your
          application and make a positive first impression. When uploading your
          photo, make sure it is a clear and recent headshot that shows your
          face in a professional manner.
        </p>
        <p className="profile__image-description description">
          When taking your photo, dress professionally and{" "}
          <span>consider the background and lighting.</span> A neutral
          background and good lighting can help to highlight your features and
          present you in the best possible light. Remember, your photo is an
          important part of your CV, so take the time to choose a high-quality
          image that represents you in a professional and approachable manner.
        </p>
        <p className="profile__image-description description">
          When you're done, the next step is to{" "}
          <span>
            start filling your application with your personal information,
          </span>{" "}
          good luck!
        </p>
        <form className="profile__image-choice" encType="multipart/form-data">
          <input type="file" onChange={(e) => handleChange(e)} />
        </form>
      </div>
    </section>
  );
};

export default Profile;
