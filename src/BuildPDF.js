function BuildPDF({ details, experience, education, skills }) {
  return {
    name: details.name,
    email: details.email,
    experience: experience.map(exp => ({
      company: exp.company,
      role: exp.role,
      dates: exp.dates,
      description: exp.description
    })),
    education: education.map(edu => ({
      institution: edu.institution,
      degree: edu.degree
    })),
    skills: skills
  };
}

export default BuildPDF;