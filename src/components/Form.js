import FormGroup from "./Bootstrap/FormGroup";
import Education from "./Form/Education";
import Experience from "./Form/Experience";

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name. This has been generated from your first and last names."
    ],
    FirstName: [
      "text",
      "First Name",
      "Please enter your First Name or given name."
    ],
    LastName: ["text", "Last Name", "Please enter your Last Name or surname."],
    Thumbnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the Direct Image URL here."
    ],
    URL: [
      "text",
      "Website Link",
      "Please enter the URL of your website, where this page is going to be hosted."
    ],
    Description: ["text", "About You", "Write something nice about you."],
    KeyWords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use."
    ],
    Address: [
      "text",
      "Where are you?",
      "Type in your full Address to get kidnapped."
    ],
    Phone: [
      "text",
      "Phone Number",
      "Please enter your phone number, so we can call you in the midnight!"
    ],
    Email: ["email", "Email Address", "Tell us your primary email address."]
  };
  return (
    <div className="Form">
      <h3>Basic Info</h3>
      {Object.keys(FormData).map(
        fd =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][1]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
            />
          )
      )}
      <h3>Experience</h3>
      <Experience Experiences={FormData.Experience} />
      <h3>Education</h3>
      <Education Educations={FormData.Education} />
      <h3>Skills</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Skills, null, 2)}
      </pre>
      <h3>Interests</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Interests, null, 2)}
      </pre>
      <h3>Awards</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Awards, null, 2)}
      </pre>
    </div>
  );
};

export default Form;
