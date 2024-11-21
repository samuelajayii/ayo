import React, { useState, useEffect } from 'react';
import { waveform } from 'ldrs'
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

const Loader = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000
        )
    }, [])

    waveform.register()

    return (
        <AnimatePresence mode='wait'>
            {loading && (
                <Box
                key='loader'
                initial={{opacity: 1}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                component={motion.div}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    flexDirection: 'column',
                    zIndex: 10
                }}
                >
                    <l-waveform size={60} speed={0.7} color='white'></l-waveform>
                    <h1 className='text-white text-4xl mt-3'>Loading...</h1>
                </Box>
            )}
        </AnimatePresence>
    );
}

export default Loader;