import React from 'react';
import Grid from '@material-ui/core/Grid';
import './AddEvent.css'
import upload from '../../images/upload.png'
const AddEvent = () => {
    return (
        <>
        <Grid  item xs={9} style={{marginTop:'15px'}}>
            <h3 style={{marginLeft:'20px', color:'#0C0C0C'}}>Add Event</h3>
            <Grid  justify='space-around' container item md={12} spacing='7'   
                style={{ marginLeft:'20px',marginTop:'25px' , boxShadow:'0 2px 5px lightgray',borderRadius:'10px', padding:'20px'}}>
                <Grid item md={6} >
                    <div>
                        <b>Event title</b><br/>
                        <input placeholder='Enter title' className='event-input' id='title' type="text"/>
                    </div>
                    <div>
                        <b>Description</b><br/>
                        <textarea className='event-textarea' placeholder='Enter description' name="description" id="description" 
                        cols="40" rows="7"></textarea>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div>
                        <b>Event date</b><br/>
                        <input placeholder='Event date' className='event-input' id='date' type="calendar"/>
                    </div>
                    <div>
                        <b>Banner</b><br/>
                            <div className='file-upload' style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                <input type="file"/>
                                <b style={{color:'#0084FF', margin:'0'}}>Upload image</b>
                            </div>
                    
                       
                    </div>
                </Grid>
            </Grid>
            <button style={{float:'right', height:'40px',marginTop:'40px', padding:'10px 40px', borderRadius:'5px'}} 
                className='blue-button'>
                    <b>Submit</b>
            </button>
        </Grid>
        
        </>
    );
};

export default AddEvent;