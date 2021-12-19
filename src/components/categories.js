import React from 'react';
import { Button } from '@mui/material';
import { button1Action, button2Action, button3Action, button4Action } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';

function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    return(
        <div>
            <Button variant="contained" onClick={()=> dispatch(button1Action())}>Fantasy</Button>{' '}
            <Button variant="contained" onClick={()=> dispatch(button2Action())}>Fiction</Button>{' '}
            <Button variant="contained" onClick={()=> dispatch(button3Action())}>Horror</Button>{' '}
            <Button variant="contained" onClick={()=> dispatch(button4Action())}>Science</Button>
            <br/>
            <h2>{categories?.displayName}</h2>
            <small>{categories?.description}</small>
           
        </div>
    )
}
export default Categories;