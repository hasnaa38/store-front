import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function Products(props) {
    const products = useSelector(state => state.products);
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