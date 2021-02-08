import React from 'react';
import { Form, Field } from 'react-final-form';


export const InputForm = (props) => {
    return (
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit, pristine, submiting, form }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="textArea" component="textarea" type="text"/>
                    </div>
                    <button>submit</button>
                </form>
            )}

        />
    )
}