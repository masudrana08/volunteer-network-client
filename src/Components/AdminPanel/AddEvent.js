import React from 'react';
import Grid from '@material-ui/core/Grid';
import './AddEvent.css'

const AddEvent = () => {
    return (
        <Grid  item xs={9} style={{marginTop:'15px'}}>
            <h3 style={{marginLeft:'20px', color:'#0C0C0C'}}>Add Event</h3>
            <Grid  justify='space-around' container item md={12}   style={{ marginLeft:'20px',marginTop:'25px'}}>
                <Grid item md={6} >
                    <div>
                        <b>Event title</b><br/>
                        <input placeholder='Enter title' className='event-input' id='title' type="text"/>
                    </div>
                    <div>
                        <b>Description</b><br/>
                        <textarea className='event-textarea' placeholder='Enter description' name="description" id="description" 
                        cols="54" rows="7"></textarea>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <b>Event date</b><br/>
                        <input placeholder='Event date' className='event-input' id='date' type="calendar"/>
                    </div>
                    <div>
                        <b>Banner</b><br/>
                        <input style={{margin:'8px 0'}} type="file"/>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddEvent;