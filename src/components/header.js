import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { openCart, closeCart } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import './headerStyles.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
  }));


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ background: "#212f45" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} id="headerFont" onClick={() => dispatch(closeCart())}>
                            Books Store
                        </Typography>
                        <IconButton align="right" onClick={() => dispatch(closeCart())}>
                            <HomeIcon sx={{ color: "#fff" }}/>
                        </IconButton>
                        <IconButton align="right" onClick={() => dispatch(openCart())} aria-label="cart">
                            <StyledBadge badgeContent={cart.items.length} color="primary">
                                <ShoppingCartIcon sx={{ color: "#fff" }}/>
                            </StyledBadge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <br /><br /><br />
        </div>
    );
}
export default Header 
