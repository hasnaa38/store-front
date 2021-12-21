import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import './headerStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/index';

export default function SimpleCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cart);
    return (
        <div style={{ "justify-content": "center", "display": "flex", "margin-top": "30px" }}>
            <TableContainer component={Paper} sx={{ width: 600 }} >
                <Table align="center" sx={{ width: 600 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Product</strong></TableCell>
                            <TableCell align="right"><strong>Price</strong></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.items.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.price} JD</TableCell>
                                <TableCell align="right" className="cancelButton" sx={{ color: "#1B3A4B" }}
                                    onClick={() => dispatch(removeFromCart(item))}
                                ><CancelIcon /></TableCell>
                            </TableRow>
                        ))}
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"><strong>Total</strong></TableCell>
                            <TableCell align="right">{cart.totalPrice} JD</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

