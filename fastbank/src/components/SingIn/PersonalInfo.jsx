import React from 'react';
import Input from "../General/Input";

function PersonalInfo({ formData, setFormData }) {
    return (
        <div id='personal-info-container' className=''>
            <Input
                tipo={'text'}
                texto={'First Name...'}
                maxLength={100}
                required
                value={formData.firstName}
                act={(event) => setFormData({ ...formData, firstName: event.target.value })} />

            
            <Input
                tipo={'text'}
                texto={'Last Name...'}
                maxLength={100}
                required
                value={formData.lastName}
                act={(event) => setFormData({ ...formData, lastName: event.target.value })} />
            <Input
                tipo={'text'}
                texto={'Username...'}
                maxLength={100}
                required
                value={formData.username}
                act={(event) => setFormData({ ...formData, username: event.target.value })} />

        </div>
    );
}

export default PersonalInfo;
