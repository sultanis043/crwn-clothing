import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, lable, ...otherprops }) => (
    <div className='group'>
        {lable ? (
            <lable className={`${otherprops.value.lenght ? 'shrink' : ''} form-input-lable`}>
                {lable}
            </lable>
        ) :
            null}
        <input className='form-input' onChange={handleChange} {...otherprops} />
    </div>
)

export default FormInput;