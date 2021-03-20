
import React from 'react';
import { Field, Form } from 'react-final-form';


const ProfileDataEditForm = ({  initialValues, onSubmit, ...props }) => {
  
  
  return <Form  
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit, submitError }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <button onClick={props.goToEditMode}>Сохранить</button> <br />
          {submitError && <div>{submitError}</div>}
          <div><b>Full name</b></div>
          <Field name="fullName" component="input" type="text" placeholder="name" />
          <div><b>Looking for a job</b></div>
          <Field name="lookingForAJob" component="input" type="radio" value="true" />yes
          <Field name="lookingForAJob" component="input" type="radio" value="false" />no
          <div><b>Professional skills</b></div>
          <Field name="lookingForAJobDescription" component="textarea" type="text" placeholder="Professional skills" />
          <div><b>About me:</b></div>
          <Field name="aboutMe" component="textarea" type="text" placeholder="About me" />
          <div>
            <b>Контакты:</b> {Object.keys(props.userProfile.contacts).map(key => {
              return <div key={key}>
              <div><b>{key}:</b></div>
              <Field name={"contacts." + key} component="input" type="text" placeholder={key} />
              </div>
            })}
          </div>
        </div>
      </form>
    )}

  />

}


export default ProfileDataEditForm;

