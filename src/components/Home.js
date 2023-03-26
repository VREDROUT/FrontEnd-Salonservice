import React from 'react';
import { Link } from 'react-router-dom';
import SearchSaloneservice from './SearchSaloneservice';

function Home() {

    return (<div className='container'>
        <h1>OnlineSalonService </h1>
        <div>
            <SearchSaloneservice/>
        </div>
        <div>
            <Link to="/salonservice/all">View All Salonservices</Link>
        </div>
        <div>
            <Link to="/salonservice/add">Add New Salonservice</Link>
        </div>
        
    </div>)
}

export default Home;