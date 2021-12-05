const Experience = ({ Experiences }) => {
  return (
    <div className="Experience">
      {Experiences.map((exp, key) => (
        <div className="alert alert-info" key={key}>
          Working as {exp.Role} in {exp.Company}.
        </div>
      ))}
    </div>
  );
};

export default Experience;
