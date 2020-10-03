import React from 'react';
import { FormControl, FormGroup, FormHelperText, Input, InputLabel } from '@material-ui/core';
import logo from '../../images/logo.png'
const RegistationForm = () => {
    return (
        <div >
            <div style={{width:"200px", margin:'auto', padding:'20px'}}>
                <img style={{height:'50px'}} src={logo} alt=""/>
            </div>
            <FormGroup style={{width:'370px', margin:'auto',padding:'30px',
                    border:'1px solid lightgray', borderRadius:'5px'}}>
                <h3 style={{marginTop:'0'}}>Register as a Volunteer</h3>
                <FormControl>
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                    <Input id="name" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input id="date" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input id="description" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="organizationName">Organization Name</InputLabel>
                    <Input id="organizationName" aria-describedby="my-helper-text" />
                </FormControl>
                <button style={{marginTop:'20px', borderRadius:'5px'}} className="blue-button">
                    Registation
                </button>

            </FormGroup>
        </div>
    );
};

export default RegistationForm;