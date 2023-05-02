import React from 'react';

function SignUpInfo({formData, setFormData}) {
    return (
        <div id='sign-up-container' className=''>
            <input type='text' required placeholder='Email...' value={formData.email} onChange={(event)=> setFormData({...formData, email: event.target.value})}/>
            
            <input type='text' required placeholder='Password...' value={formData.password} onChange={(event)=> setFormData({...formData, password: event.target.value})}/>
            
            <input type='text' required placeholder='Confirm Password...' value={formData.confirmPassword} onChange={(event)=> setFormData({...formData, confirmPassword: event.target.value})}/>
        </div>
    );
}

export default SignUpInfo;
