import React, { FC, ReactNode } from 'react';
import { Form, Field } from 'react-final-form';


type PropsType = {
    onSubmit: (values : IValues) => void
    
    
}

export interface IValues {
    textArea? : string | undefined
}

export const InputForm : FC<PropsType> = (props) => {
    return (
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit, reset }) => (
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