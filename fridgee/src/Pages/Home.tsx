import { getAuth, signOut } from 'firebase/auth';
import { StyledButtonStroke } from '../components/styles/ButtonStroke.styled';
import { H1 } from '../components/styles/Typography.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DailyMealCard from '../components/card/DailyMealCard';
import { Recepie } from '../shared/types';
import { getStrapiEndpoint } from '../Utils';
import CategoriesCard from '../components/card/CategoriesCard';

import { SiCakephp } from 'react-icons/si';
import { MdBreakfastDining, MdLunchDining, MdModeNight } from 'react-icons/md';
import { BiSolidWine } from 'react-icons/bi';
import SearchBar from '../components/SearchBar';
import { LuVegan } from 'react-icons/lu';
import ResultBox from '../components/card/ResultBox';
import { AnimatePresence } from 'framer-motion';

type Props = {}

const Home = (props: Props) => {

    // FIREBASE AUTH
    const auth = getAuth();


    const [dailyMealCard, setDailyMealCard] = useState<Recepie>({} as Recepie);
    const [categories, setCategories] = useState([]);

    const getRecepies = async () => {
        const URI = "http://localhost:1337/api/recepies?populate=*"

        axios.get(URI)
            .then(response => {
                console.log(response.data.data[0].attributes);
                console.log(response.data.data[0].attributes.image.data.attributes.url);

                // const imageData = response.data.data[0].attributes.image.data;

                // const itemData = response.data.data[0].attributes;
                setDailyMealCard(response.data.data[0].attributes);

                // console.log(getStrapiEndpoint() + dailyMealCard.image.data.attributes.url)

            })
            .catch(error => {
                console.log(error);
            })
    };
    const getCategories = async () => {
        const URI = "http://localhost:1337/api/categories"

        axios.get(URI)
            .then(response => {
                console.log("category   ")
                console.log(response.data.data);

                setCategories(response.data.data);



            })
            .catch(error => {
                console.log(error);
            })
    };

    const [isLoading, setIsLoading] = useState(false);

    const [searchResults, setSearchResults] = useState<string>('');
    const HTTP = "http://localhost:8020/chat";

    const performSearch = async (prompt: string) => {
        setIsLoading(true);
        axios.post(`${HTTP}`, { message: prompt })
            .then(response => {
                console.log(response.data);
                setSearchResults(response.data.completion.content);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })
    };


    useEffect(() => {
        getRecepies();
        getCategories();
    }, [])


    return (
        <div className='px-[5%] py-10 relative'>

            <div className='h-[60vh]'>
                <div className='mb-10 text-center w-full mt-[5%]'>
                    <H1 className='mb-8'>
                        Savorify
                    </H1>
                    <SearchBar onSearch={performSearch} isLoadingProp={isLoading} />
                </div>
                {/* <div className='mb-24 flex items-center justify-center gap-12'>
                    {categories.map((category: any) => {
                        return (
                            <CategoriesCard name={category.attributes.name} icon={ } />
                        )
                    })}
                </div> */}

                <div className='mb-24 flex items-center justify-center gap-8'>
                    <CategoriesCard name='Dessert' icon={SiCakephp} />
                    <CategoriesCard name='Breakfast' icon={MdBreakfastDining} />
                    <CategoriesCard name='Lunch' icon={MdLunchDining} />
                    <CategoriesCard name='Dinner' icon={MdModeNight} />
                    <CategoriesCard name='Vegan' icon={LuVegan} />
                    <CategoriesCard name='Drinks' icon={BiSolidWine} />
                </div>
            </div>





            <div className=''>
                <DailyMealCard
                    title={dailyMealCard.title}
                    description={dailyMealCard.description}
                    link='/recepies/1'
                    image={getStrapiEndpoint() + dailyMealCard?.image?.data?.attributes?.url || ''}
                />
            </div>

            <AnimatePresence>
                <ResultBox result={searchResults} />
            </AnimatePresence>
            {/* <ResultBox result={searchResults} /> */}

            <StyledButtonStroke
                type="submit"
                onClick={() => signOut(auth)}
            >
                Sign out
            </StyledButtonStroke>
        </div>
    )
}

export default Home