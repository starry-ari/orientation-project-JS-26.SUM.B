import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

var styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 48,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
  },
  email: {
    fontSize: 10,
    color: "#555555",
    marginTop: 2,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 3,
    marginBottom: 8,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  entryTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  entryDates: {
    fontSize: 9.5,
    color: "#555555",
  },
  entrySubtitle: {
    fontSize: 10,
    color: "#333333",
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillChip: {
    fontSize: 9.5,
    backgroundColor: "#f0f0f0",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    marginRight: 6,
    marginBottom: 6,
  },
});

function ResumePDF({ data }) {
  var name = data.name;
  var email = data.email;
  var experience = data.experience || [];
  var education = data.education || [];
  var skills = data.skills || [];

  return React.createElement(
    Document,
    { title: name + " - Resume", author: name },
    React.createElement(
      Page,
      { size: "A4", style: styles.page },

      // Header
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.name }, name),
        React.createElement(Text, { style: styles.email }, email)
      ),

      // Experience
      experience.length > 0 &&
        React.createElement(
          View,
          { style: styles.section },
          React.createElement(
            Text,
            { style: styles.sectionTitle },
            "Experience"
          ),
          experience.map(function (exp, i) {
            return React.createElement(
              View,
              { key: i, style: styles.entry, wrap: false },
              React.createElement(
                View,
                { style: styles.entryHeaderRow },
                React.createElement(
                  Text,
                  { style: styles.entryTitle },
                  exp.role
                ),
                React.createElement(
                  Text,
                  { style: styles.entryDates },
                  exp.dates
                )
              ),
              React.createElement(
                Text,
                { style: styles.entrySubtitle },
                exp.company
              ),
              React.createElement(
                Text,
                { style: styles.description },
                exp.description
              )
            );
          })
        ),

      // Education
      education.length > 0 &&
        React.createElement(
          View,
          { style: styles.section },
          React.createElement(
            Text,
            { style: styles.sectionTitle },
            "Education"
          ),
          education.map(function (edu, i) {
            return React.createElement(
              View,
              { key: i, style: styles.entry, wrap: false },
              React.createElement(
                Text,
                { style: styles.entryTitle },
                edu.institution
              ),
              React.createElement(
                Text,
                { style: styles.entrySubtitle },
                edu.degree
              )
            );
          })
        ),

      // Skills
      skills.length > 0 &&
        React.createElement(
          View,
          { style: styles.section },
          React.createElement(Text, { style: styles.sectionTitle }, "Skills"),
          React.createElement(
            View,
            { style: styles.skillsRow },
            skills.map(function (skill, i) {
              return React.createElement(
                Text,
                { key: i, style: styles.skillChip },
                skill
              );
            })
          )
        )
    )
  );
}

export default ResumePDF;
