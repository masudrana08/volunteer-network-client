import React from 'react';
import Header from '../Header/Header';
import background from '../../images/backgroud.jpg'

const Home = () => {
    return (
        <>
            <div style={{background:`linear-gradient(to bottom,
                 rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
                 url(${background}) `, height:'496px'}}>

                <Header></Header>
                <div style={{textAlign:'center', padding:'30px 0'}}>
                    <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                    
                        <input style={{borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px'}}
                            className='input' type="text" placeholder="Search"/>
                        <button style={{borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}} 
                            className='blue-button' type="submit">Search</button>
                    
                </div>
                
                {/* start mapping for load data */}
            </div>
        </>
    );
};

export default Home;