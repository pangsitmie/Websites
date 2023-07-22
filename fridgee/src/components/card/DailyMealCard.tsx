import { H1, H2, H4, P } from '../styles/Typography.styled'
import ButtonFill from '../button/ButtonFill';

type DailyMeal = {
    title: string;
    description: string;
    link: string;
    image: string;
}

const DailyMealCard = ({ title, description, link, image }: DailyMeal) => {
    return (
        <div className='bg-white rounded-[52px] grid grid-cols-2 relative'>
            <div className='p-12'>
                <div>
                    <H1 className='mb-4'>{title}</H1>
                    <P className='mb-16 pr-[25%]'>{description}</P>
                </div>

                <div>
                    <a href={link}>
                        <ButtonFill
                            text='View Recipe'
                            className='w-[200px]'
                        />
                    </a>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <img src={image} alt="" className='h-[115%] relative bottom-[-64px] left-[-36px]' />
            </div>

            <div className='absolute rounded-circle bg-black m-6 right-[0px] top-[0px] h-24 w-24 flex items-center justify-center'>
                <H4 className='text-white'>Daily <br /> Meal</H4>
            </div>
        </div>
    )
}

export default DailyMealCard