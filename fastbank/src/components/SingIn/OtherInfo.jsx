import React from 'react';
import Input from "../General/Input";

function OtherInfo({formData, setFormData}) {
    return (
        <div id='other-info-container' className=''>
            <Input
                tipo={'text'}
                texto={'Nationality...'}
                maxLength={100}
                required
                value={formData.nationality}
                act={(event) => setFormData({ ...formData, nationality: event.target.value })} />

                <Input
                tipo={'text'}
                texto={'Other...'}
                maxLength={100}
                required
                value={formData.other}
                act={(event) => setFormData({ ...formData, other: event.target.value })} />
            
        </div>
    );
}

export default OtherInfo;
