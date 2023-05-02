import React from 'react';
import Input from "../General/Input";

function SignUpInfo({ formData, setFormData }) {
    return (
        <div id='sign-up-container' className=''>
            <input type='text' required placeholder='Email...' value={formData.email} onChange={(event)=> setFormData({...formData, email: event.target.value})}/>
            {/* <Input
                tipo={'num'}
                texto={'Email...'}
                maxLength={100}
                required
                value={formData.email}
                act={(event) => setFormData({ ...formData, email: event.target.value })} /> */}
            <Input
                tipo={'text'}
                texto={'Password...'}
                maxLength={100}
                required
                value={formData.password}
                act={(event) => setFormData({ ...formData, password: event.target.value })} />
            <Input
                tipo={'text'}
                texto={'Confirm Password...'}
                maxLength={100}
                required
                value={formData.confirmPassword}
                act={(event) => setFormData({ ...formData, confirmPassword: event.target.value })} />

        </div>
    );
}

export default SignUpInfo;
