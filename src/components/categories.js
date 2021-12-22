import React, { useEffect } from 'react';
import { Button } from '@mui/material';
// import { button1Action, button2Action, button3Action, button4Action } from '../store/actions/index';
import { getAll, get } from '../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, []);

    return(
        <div style={{'margin-top': '-50px'}}>
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#3E242D', 'border-radius': '40px'}} onClick={()=> dispatch(get('fantasy'))}>Fantasy</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#3E242D', 'border-radius': '40px'}} onClick={()=> dispatch(get('fiction'))}>Fiction</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#3E242D', 'border-radius': '40px'}} onClick={()=> dispatch(get('horror'))}>Horror</Button></Link>{' '}
            <Link to={'/'} style={{'text-decoration':'none'}}><Button variant="contained" style={{'background': '#3E242D', 'border-radius': '40px'}} onClick={()=> dispatch(get('science'))}>Science</Button></Link>
            <br/><br/>
            <h2>{categories.currentCategory?.displayName}</h2>
            <small>{categories.currentCategory?.description}</small>
           
        </div>
    )
}
export default Categories;

/*
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 95%), 0px 2px 2px 0px rgb(14 13 13), 0px 1px 5px 0px rgb(40 38 38);
*/