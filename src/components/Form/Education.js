const Education = ({ Educations }) => {
  return (
    <div className="Education">
      {Educations.map((edu, key) => (
        <div className="alert alert-info" key={key}>
          Studying as {edu.Degree} in {edu.Institute}.
        </div>
      ))}
    </div>
  );
};

export default Education;
