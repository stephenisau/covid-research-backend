import React, { useState } from 'react';
import {
  FormContainer,
  FormGroup,
  FormHeader,
  FormDescription,
  SubmitButton
} from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const initialState = {
  email: "",
  projectName: "",
  fundingAmount: "",
  projectDetails: ""
};


const Registration = () => {

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    // implement send data to backend
  }


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const clear = () => {
    setFormData(initialState);
  }

  return (

    <>
      <FormContainer>
        <div className="col-md-8">
          <FormHeader>Combat the Crisis</FormHeader>
          <FormDescription>
            Let us help your project get the funding it needs to fight COVID-19.
          </FormDescription>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  required={true}
                  onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="projectName"
                  value={formData.projectName}
                  placeholder="Project Name"
                  required={true}
                  onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="fundingAmount"
                  value={formData.fundingAmount}
                  placeholder="Funding Amount"
                  required={true}
                  onChange={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  name="projectDetails"
                  value={formData.projectDetails}
                  placeholder="Project Details"
                  required={true}
                  onChange={handleChange} />
              </div>
              <SubmitButton onClick={handleSubmit} className="btn btn-danger">Get Your Project Funded <FontAwesomeIcon  color="white" icon={faArrowRight} /> </SubmitButton>
            </div>
          </form>
        </div>
      </FormContainer>
    </>
  )
}

export default Registration;