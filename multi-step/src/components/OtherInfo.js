import React from 'react';

function OtherInfo({formData, setFormData}) {
    return (
        <div id='other-info-container' className=''>
            <input type='text' required placeholder='Nationality...' value={formData.nationality} onChange={(event)=> setFormData({...formData, nationality: event.target.value})}/>

            <input type='text' required placeholder='Other...' value={formData.other} onChange={(event)=> setFormData({...formData, other: event.target.value})}/>
        </div>
    );
}

export default OtherInfo;
