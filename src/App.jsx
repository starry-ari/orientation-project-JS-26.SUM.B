import { useState } from "react";
import "./App.css";
import ExportResume from "./ExportResume";
import BuildPDF from "./BuildPDF";

function App() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      { company: "", role: "", dates: "", description: "" },
    ]);
  };

  const addEducation = () => {
    setEducation((prev) => [...prev, { institution: "", degree: "" }]);
  };

  const addSkill = () => {
    setSkills((prev) => [...prev, ""]);
  };

  // Export data
  const resumeData = BuildPDF({ details, experience, education, skills });

  return (
    <div className="App">
      <h1>Resume Builder</h1>

      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button onClick={addExperience}>Add Experience</button>
        <br></br>
      </div>

      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button onClick={addEducation}>Add Education</button>
        <br></br>
      </div>

      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button onClick={addSkill}>Add Skill</button>
        <br></br>
      </div>

      <br></br>
      <ExportResume resumeData={resumeData} />
    </div>
  );
}

export default App;