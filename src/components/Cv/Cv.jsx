import "./Cv.scss";

const Cv = () => {
  const image = "";

  return (
    <section className="cv">
      <aside className="cv__sidebar">
        {image ? (
          <img alt="" className="cv__sidebar-image" src="" />
        ) : (
          <div className="cv__sidebar-image-placeholder image-placeholder"></div>
        )}
        <section className="cv__sidebar-skills cv__sidebar-part">
          <h2 className="cv__sidebar-skills-title cv__sidebar-part-title">
            Skills
          </h2>
        </section>
        <section className="cv__sidebar-languages cv__sidebar-part">
          <h2 className="cv__sidebar-skills-languages cv__sidebar-part-title">
            Languages
          </h2>
        </section>
        <section className="cv__sidebar-interests cv__sidebar-part">
          <h2 className="cv__sidebar-skills-interests cv__sidebar-part-title">
            Interests
          </h2>
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
