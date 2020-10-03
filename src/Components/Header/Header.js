import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logo.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Grid container item xs={12} style={{height:'60px', padding:'10px 20px'}} alignItems='center' >
                <Grid item xs={7}>
                    <img style={{height:'60px'}} src={logo} alt="volunteer network logo"/>
                </Grid>
                <Grid container item xs={5} justify='space-around'>
                    <Link className='link' to='/'><b>Home</b></Link>
                    <Link className='link' to='/'><b>Donation</b></Link>
                    <Link className='link' to='/'><b>Events</b></Link>
                    <Link className='link' to='/'><b>Blog</b></Link>
                    <Button variant="contained" style={{background:'#3F90FC', color:'white'}}>Register</Button>
                    <Button variant="contained" style={{background:'#434141', color:'white'}}>Admin</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;