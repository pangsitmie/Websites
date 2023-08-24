import { useState } from 'react';
import { IconType } from 'react-icons';

type Props = {
    name: string;
    icon: IconType;
};

const CategoriesCard = ({ name, icon: Icon }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`rounded-[24px] cursor-pointer w-[100px] h-[100px] bg-white hover:bg-orange flex flex-col items-center justify-center transition-colors duration-200 ${isHovered ? 'text-white' : 'text-black'}`}
        >
            <Icon
                size={24}
                className={isHovered ? 'text-white' : 'text-black'}
            />
            <p className='mt-3 text-sm'>{name}</p>
        </div>
    );
};

export default CategoriesCard;
