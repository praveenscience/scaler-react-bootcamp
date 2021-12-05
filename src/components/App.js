import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Form from "./Form";

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "Kavitha",
      LastName: "Pontagani",
      Thumbnail: "https://i.imgur.com/3uEyHgdl.png",
      URL: "https://www.linkedin.com/in/pontagani-kavitha-a495b3221/",
      Description:
        "I am Kavitha. I am a Developer. Attended Parvatha Reddy Babul Reddy Visvodaya Institute of Technology & Science",
      KeyWords: "Kavitha, Pontagani, Developer, Awesome Person",
      Address: "Chennai, Tamil Nadu, India",
      Phone: "+919841098410",
      Email: "kavitha@kavitha.com",
      Socials: {
        Facebook: "kavitha",
        WhatsApp: "kavitha",
        Instagram: "kavitha",
        Twitter: "kavitha",
        LinkedIn: "kavitha",
        GitHub: "kavitha",
        StackOverflow: "123456"
      },
      Experience: [
        {
          Role: "Awesome Developer",
          Company: "Google",
          Desc: "Working with Google as an awesome developer and it's so good that I want everyone to work with me on Angular and Google.",
          Start: "May 2020",
          End: "Present"
        },
        {
          Role: "Fantastic Developer",
          Company: "Microsoft",
          Desc: "Working with Microsoft as an awesome developer and it's so good that I want everyone to work with me on VS Code and Microsoft.",
          Start: "Jun 2018",
          End: "May 2020"
        }
      ],
      Education: [
        {
          Degree: "Electrical Electronics & Communication Engineering",
          Institute:
            "Parvatha Reddy Babul Reddy Visvodaya Institute of Technology & Science",
          Desc: "",
          Start: "Sep 2016",
          End: "June 2018"
        }
      ],
      Skills: {
        Tools: ["html5", "css3", "react"],
        Workflow: [
          "Mobile-First, Responsive Design",
          "Cross Browser Testing & Debugging",
          "Cross Functional Teams",
          "Agile Development & Scrum"
        ]
      },
      Interests: [
        "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
      ],
      Awards: [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005"
      ]
    }
  };
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };
  handleChange = e => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Scaler Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <Form
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Code
                FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                {...this.state.FormData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
