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
                    <Link to='/' className='link'><b>Home</b></Link>
                    <Link to='/donation' className='link'><b>Donation</b></Link>
                    <Link to='/events' className='link'><b>Events</b></Link>
                    <Link to='/blog' className='link'><b>Blog</b></Link>
                    <Link to='/auth' className='link'>
                        <Button  variant="contained" style={{background:'#3F90FC', color:'white'}}>
                            Register
                        </Button>
                    </Link>
                    <Link to='/admin-panel' className='link'>
                        <Button variant="contained" style={{background:'#434141', color:'white'}}>
                            Admin
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;