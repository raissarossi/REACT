import React from 'react';

function PersonalInfo({formData, setFormData}) {
    return (
        <div id='personal-info-container' className=''>
            <input type='text' required placeholder='First Name...' value={formData.firstName} onChange={(event)=> setFormData({...formData, firstName: event.target.value})}/>
            <input type='text' required placeholder='Last Name...' value={formData.lastName} onChange={(event)=> setFormData({...formData, lastName: event.target.value})}/>
            <input type='text' required placeholder='Username...' value={formData.username} onChange={(event)=> setFormData({...formData, username: event.target.value})}/>
        </div>
    );
}

export default PersonalInfo;
