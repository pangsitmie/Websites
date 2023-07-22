import { AiOutlineClose } from 'react-icons/ai';
import { H2, H3 } from '../styles/Typography.styled';
import { parseRecepie } from '../../utils/Utils';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuBookOpen } from 'react-icons/lu';

type Props = {
    result: string;
}

const ResultBox = ({ result }: Props) => {
    const [isShowingResult, setIsShowingResult] = useState(true);


    if (!result) {
        return null; // return null or some fallback component when there's no result
    }

    const { title, ingredients, instructions } = parseRecepie(result);

    const variants = {
        open: { opacity: 1, scale: 1 },
        closed: { opacity: 0, scale: 0 },
    }

    return (
        <div className='fixed inset-y-4 right-4 w-[450px] z-50 flex flex-col'>
            {/* content */}
            <motion.div
                className='overflow-auto bg-white p-8 rounded-3xl shadow-2xl'
                initial="closed"
                animate={isShowingResult ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <H2>{title}</H2>
                <hr className='my-4' />
                <div className='mb-4'>
                    <H3 className='font-bold mb-2'>Ingredients</H3>
                    <ul className='list-disc list-inside'>
                        {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                    </ul>

                </div>
                <div>
                    <H3 className='font-bold mb-2'>Instructions</H3>
                    <ol>
                        {instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                    </ol>
                </div>
            </motion.div>

            {/* close button */}
            <div className="flex justify-between mt-2">
                <div></div>
                <button
                    className='rounded-circle bg-primary-100 flex w-[52px] h-[52px] shadow-2xl items-center justify-center'
                    onClick={() => setIsShowingResult(!isShowingResult)}
                >
                    {isShowingResult ? <AiOutlineClose className="text-xl text-white " /> : <LuBookOpen className="text-xl text-white" />}
                </button>

            </div>
        </div>
    );
}

export default ResultBox;
