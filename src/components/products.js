import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import { addToCart, decrementStock } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';

function Products(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    return (
        <div>
            <Grid container wrap="nowrap" justifyContent="space-evenly" alignItems="center">
                {products.map((item, index) => (
                    <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        {item ? (
                            <img
                                style={{ width: 210, height: 118 }}
                                alt={item.name}
                                src={item.image}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}
                        {item ? (
                            <Box sx={{ pr: 2 }}>
                                <Typography gutterBottom variant="body2">
                                    {item.name}
                                </Typography>
                                <Typography display="block" variant="caption" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {`${item.price} JD • ${item.inventoryCount} in stock`}
                                </Typography>
                                <br/><br/>
                                <Button sx={{ background: "#1B3A4B" }} variant="contained" size="small" onClick={()=>{dispatch(addToCart(item)); dispatch(decrementStock(item))}}>Add To Cart</Button>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                ))}
            </Grid>
        </div>
    )
}
export default Products