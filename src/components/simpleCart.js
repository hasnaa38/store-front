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
import { removeFromCart } from '../redux/actions/index';

export default function SimpleCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <TableContainer component={Paper}>
            <Table align="center" sx={{ width: 600 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.items.map((item) => (
                        <TableRow
                            key={item.name}
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
                        <TableCell component="th" scope="row">Total</TableCell>
                        <TableCell align="right">{cart.totalPrice} JD</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

