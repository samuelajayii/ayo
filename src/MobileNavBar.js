import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const MobileNavBar = () => {
    const [expand, setExpand] = useState(false)
    

    return (
        <AnimatePresence>
            <motion.div className='bg-white border border-black p-3 rounded  absolute z-50 left-0 right-0 mx-8 lg:hidden'
                initial={{ y: -150, opacity: 0, }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -150 }}
                transition={{ duration: 0.8, type: 'spring' }}

            >
                <ul className='justify-between gap-3 text-xl flex flex-col'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='' onClick={() => setExpand(!expand)}>Works</Link>
                        {expand &&
                            <motion.ul className='flex flex-col px-6 py-3 text-sm gap-3 bg-slate-200 rounded' initial={{height: 0}} animate={{height: 'fit-content', overflow: 'hidden'}}>
                                <Link>Musicians</Link>
                                <Link>Fashion Campaigns</Link>
                                <Link>Photo Stories</Link>
                                <Link>Fine Art</Link>
                                <Link>Street</Link>
                                <Link>Personals</Link>
                            </motion.ul>
                        }

                    </li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </motion.div>

           
        </AnimatePresence>
    );
}

export default MobileNavBar;