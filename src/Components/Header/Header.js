import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logo.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [user]=useContext(UserContext)
    const [hamberger, setHamberger]=useState(false)
    return (
        <div>
            <Grid container xs={12} justify='space-between' style={{padding:'10px 20px'}} alignItems='center' >
                
                <Grid  xs={6}  md={4}>
                    <Link className='link' to='/'>
                        <img style={{height:'60px'}} src={logo} alt="volunteer network logo"/>
                    </Link>
                </Grid>
                {
                    window.innerWidth <=960 &&
                    <Grid item xs={6}>
                        <p style={{textAlign:'right', cursor:'pointer', color:'blue'}} 
                        onClick={()=>setHamberger(!hamberger)} className='hamb'>
                            &#9776;
                        </p>
                    </Grid>
                }
                <Grid container xs={12} md={8} justify='space-between' alignItems='center' spacing={1} style={{paddingRight:'10px'}}>
                    {
                       
                       window.innerWidth>960 || hamberger?
                       <>
                        <Grid xs={12} md={2}><Link to='/' className='link header-link'><b>Home</b></Link></Grid>
                        <Grid xs={12} md={2}><Link to='/donation' className='link header-link'><b>Donation</b></Link></Grid>
                        <Grid xs={12} md={2}><Link to='/events' className='link header-link'><b>Events</b></Link></Grid>
                        <Grid xs={12} md={2}><Link to='/blog' className='link header-link'><b>Blog</b></Link></Grid>
                       </>
                    : ''
                    }
                  
                    
                    
                    
                    {
                        window.innerWidth>960 || hamberger ?
                        <>
                            {
                            user.isSignedIn ? <Grid xs={12} md={2}><b style={{color:'#3F90FC'}}>{user.name || 'User'} </b></Grid>
                            
                            : <Grid xs={12} md={2} >
                                <Link to='/auth' className='link header-link'>
                                <Button  variant="contained" style={{background:'#3F90FC', color:'white'}}>
                                    Register
                                </Button>
                                </Link>
                            </Grid>
                            
                        }
                        </>
                        :''
                        
                    }
                    
                    {
                        window.innerWidth>960 || hamberger?
                        <>
                            <Grid xs={12} md={2} >
                            <Link to='/admin-panel' className='link header-link'>
                                <Button variant="contained" style={{background:'#434141', color:'white'}}>
                                    Admin
                                </Button>
                            </Link>
                            </Grid>
                        </>
                        :''
                    }
                    
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;