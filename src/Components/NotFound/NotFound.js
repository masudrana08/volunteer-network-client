import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const history=useHistory()
    {document.title='Volunteer Network | Not found'}
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <button onClick={()=>history.goBack()} className='blue-button'>Go back</button>
        </div>
    );
};

export default NotFound;