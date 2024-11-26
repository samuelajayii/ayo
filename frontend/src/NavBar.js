import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import MobileNavBar from './MobileNavBar';
import { createTheme, Menu, MenuItem, ThemeProvider } from '@mui/material';

const NavBar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = createTheme({
        typography: {
            fontFamily: ["Space Grotesk",
                'sans-serif'].join(',')
        }
    })

    return (
        <header>
            <nav className='flex lg:my-10 my-5 lg:mx-32 justify-between text-xl items-center'>
                <h1 className='logo text-3xl flex items-center lg:justify-center w-full lg:w-fit lg:block'>Ayojesu Odeleye</h1>
                <ul className='justify-between gap-20 hidden lg:flex'>
                    <li><NavLink to='/' className='cool-link'>Home</NavLink></li>
                    <li><Link to='' className='cool-link'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>Works</Link></li>
                    <li><NavLink to='/about' className='cool-link'>About</NavLink></li>
                    <li><NavLink to='/contact' className='cool-link'>Contact</NavLink></li>
                </ul>
                <div>
                    <MotionConfig>
                        <motion.button initial={false} onClick={() => { setActive(!active); setOpen(!open) }} className='relative h-10 w-10 rounded border-black border bg-white lg:hidden flex items-center justify-center' animate={active ? 'open' : 'closed'}>
                            <motion.span style={{
                                left: '50%',
                                top: '35%',
                                x: '-50%',
                                y: '-50%',
                            }} variants={{
                                open: {
                                    rotate: '45deg',
                                    top: ['35%', '50%', "50%"]
                                },
                                closed: {
                                    rotate: "0deg"
                                }
                            }} className='absolute h-0.5 w-5 bg-black' />
                            <motion.span style={{
                                left: '50%',
                                top: '50%',
                                x: '-50%',
                                y: '-50%',
                            }} className='absolute h-0.5 w-5 bg-black'
                                variants={{
                                    open: {
                                        rotate: '-45deg',

                                    },
                                    closed: {
                                        rotate: "0deg"
                                    }
                                }}
                            />
                            <motion.span style={{
                                left: 'calc(50% + 4px)',
                                bottom: '35%',
                                x: '-50%',
                                y: '50%',
                            }} variants={{
                                open: {
                                    rotate: '45deg',
                                    left: '50%',
                                    bottom: ['35%', '50%', '50%']

                                },
                                closed: {
                                    rotate: "0deg",
                                    left: 'calc(50% + 4px)',

                                }
                            }} className='absolute h-0.5 w-3 bg-black' />
                        </motion.button>
                    </MotionConfig>

                </div>
            </nav>
            <div>
                <ThemeProvider theme={theme}>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open2}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{
                            fontFamily: 'monospace'
                        }}
                    >
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Musicians</MenuItem>
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Fashion Campaigns</MenuItem>
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Photo Stories</MenuItem>
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Fine Art</MenuItem>
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Street</MenuItem>
                        <MenuItem className='hover:scale-110 transition duration-300' onClick={handleClose}>Personals</MenuItem>
                    </Menu>
                </ThemeProvider>

            </div>
            {open && <MobileNavBar />}
        </header>
    );
}

export default NavBar;