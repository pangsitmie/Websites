import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { AiOutlineSearch } from 'react-icons/ai';
type SearchBarProps = {
    placeholder?: string;
    onSearch?: (value: string) => void;
    isLoadingProp: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "What do you want to cook today?", onSearch, isLoadingProp }) => {
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        console.log("search sent");
        console.log(searchValue)
        event.preventDefault();
        onSearch && onSearch(searchValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        setIsLoading(isLoadingProp);
    }, [isLoadingProp]);

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-2">
            <div className="relative">
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleChange}
                    className="w-full border-2 rounded-[52px] pl-12 pr-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors shadow-lg"
                    placeholder={placeholder}
                />
                <div className="absolute left-1 top-0 bottom-0 ml-3 my-2 flex items-center">
                    {/* <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg> */}
                    < AiOutlineSearch className="h-5 w-5 text-gray-500" />
                </div>
                {isLoading &&
                    <div className="absolute right-0 top-0 bottom-0 mr-5 my-2">
                        <BeatLoader size={4} color={"#123abc"} loading={isLoading} />
                    </div>
                }
            </div>
        </form>
    );
};

export default SearchBar;
