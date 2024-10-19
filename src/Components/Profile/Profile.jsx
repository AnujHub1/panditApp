import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(true); // Toggle between edit and view modes
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
  });

  const handleSave = async (values) => {
    try {
      const response = await axios.post("/api/profile", values); // API call to save profile
      setProfile(response.data);
      setIsEditing(false); // Switch to view mode
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true); // Switch back to edit mode
  };

  return (
    <div className="profile-container">
      <h2>Profile Details</h2>

      {isEditing ? (
        <Formik
          initialValues={profile}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) errors.firstName = "First Name is required";
            if (!values.lastName) errors.lastName = "Last Name is required";
            if (!values.contactNumber)
              errors.contactNumber = "Contact Number is required";
            return errors;
          }}
          onSubmit={handleSave}
        >
          {() => (
            <Form>
              <div>
                <label>First Name</label>
                <Field name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div>
                <label>Last Name</label>
                <Field name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div>
                <label>Contact Number</label>
                <Field name="contactNumber" />
                <ErrorMessage name="contactNumber" component="div" />
              </div>
              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="profile-display">
          <img src="/path-to-image.jpg" alt="Profile Avatar" />
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Contact Number: {profile.contactNumber}</p>
          <button onClick={handleEdit}>Edit</button>
          <button>Next</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
