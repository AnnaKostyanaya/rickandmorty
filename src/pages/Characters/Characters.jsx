import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { getCharacters } from "../../service/api";
import Filter from "../../components/Filter/Filter";
import { nanoid } from 'nanoid';
import useLocalStorage from "../../shared/hooks/useLocalStorage";

import style from "../Characters/Characters.module.css";

const Characters = () => {
    const [characters, setCharacters] = useLocalStorage("characters", [])
    const [pageNumber, setPageNumber] = useLocalStorage("pageNumber", "1");
    const [filter, setFilter] = useLocalStorage("filter", "");
    const [error, setError] = useState("");
    const location = useLocation();

useEffect(() => {
    if (Number(pageNumber) > 42) {
        return;
    }
    try {
        getCharacters(pageNumber).then( resp => {
            const newCharacters = resp.map(({id, name, status, species, gender, origin, type, image}) => {
                return {id, name, status, species, gender, image, origin, type};
            })
                setCharacters(prevState => {
                    const joinedArrays = [...prevState, ...newCharacters]
                    const uniqueCharacters = joinedArrays.reduce((o, i) => {
                        if (!o.find(v => v.id === i.id)) {
                        o.push(i);
                        }
                        return o;
                    }, []);
                    console.log(uniqueCharacters)
                    return [...uniqueCharacters];
                }
                );
        })
    } catch (error) {
        setError(error);
    } 
}, [pageNumber, setError, setCharacters]);


const handleIncrement = () => {
    setPageNumber(PrevNumber => Number(PrevNumber) + 1);
} 

const changeFilter = event => {
    setFilter(event.currentTarget.value);
};

const getVisibleContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    const sortCharacters = characters.filter(character => character.name.toLowerCase().includes(lowerCaseFilter));
    const charactersInAlphabetOrder = [...sortCharacters].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
    return charactersInAlphabetOrder;
};

const visibleCharacters = getVisibleContacts();
    
    return (
    <div className={style.container}>
        <div className={style.picture} />
        <Filter value={filter} onChange={changeFilter}/>
        <div className={style.gallery}>
            <ul className={style.list}>
                {visibleCharacters.map(({id, name, species, image}) => (
                    <li className={style.item} key={nanoid()}>
                        <Link className={style.link} to={`character/${id}`} state={{ from: location }}>
                            <div className={style.hero}>
                                <div style={{ '--bg-image': `url(${image})` }} className={style.avatar}></div>
                                <div className={style.about}>
                                    <div className={style.title_elements}>
                                        <p className={style.text_name}>{name}</p>
                                        <p className={style.text_species}>{species}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        {((Number(pageNumber) <= 41) && (filter === "")) && 
        <div className={style.btnPart}>
            <button  type="button" onClick={handleIncrement} className={style.loadMoreBtn}>Load more</button>
            <svg className={style.icon_from} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/>
            </svg>
        </div>}
        {(pageNumber === 42 && characters) &&
        <p>You've reached the end of search results.</p>}
        {error &&  <p>Error</p>}
    </div>
    );
    };
    
    export default Characters;