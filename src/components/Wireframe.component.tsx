import { div } from 'framer-motion/client';
import React from 'react';

export interface IWireframe {
    text: string;
}

const Wireframe: React.FC<IWireframe> = ({ text }) => {
    return (
        <div className='bg-secondary text-primary-text font-poppins w-full px-40 py-20 text-center'>
            {text}
        </div>
    )
}
export default Wireframe;