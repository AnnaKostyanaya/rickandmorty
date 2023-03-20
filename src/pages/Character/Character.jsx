import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCharactersById } from "../../service/api";
import useLocalStorage from "../../shared/hooks/useLocalStorage";

import style from "../Character/Character.module.css";

const Character = () => {
    const [name, setName] = useState('');
    const [toFrom, setToFrom] = useLocalStorage("toFrom", {});
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [origin, setOrigin] = useState({});
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        try { getCharactersById(id).then(response => {
            setName(response.name)
            setStatus(response.status)
            setSpecies(response.species)
            setGender(response.gender)
            setOrigin(response.origin)
            if (response.type === "") {
                setType("Unknown")
            } else {
                setType(response.type)
            }
            setImage(response.image)
            setToFrom(location.state?.from )
            }) 
            } catch (error) {
                console.log(error);
            }
        }, [id, location.state?.from, setToFrom ]);

    return (
    <div className={style.container}>
        <Link className={style.link} to={toFrom}>
        <svg className={style.icon_from} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/>
        </svg>
        <span className={style.text}>Go back</span>
        </Link>
        <div style={{ '--bg-image': `url(${image})` }} className={style.avatar}></div>
        <p className={style.name}>{name}</p>
        <span className={style.info}>Information</span>
        <div className={style.info_box}>
            <p className={style.title}>Gender</p>
            <span className={style.info_about}>{gender}</span>
        </div>
        <div className={style.info_box}>
            <p className={style.title}>Status</p>
            <span className={style.info_about}>{status}</span>
        </div> 
        <div className={style.info_box}>
            <p className={style.title}>Specie</p>
                <span className={style.info_about}>{species}</span>
        </div>
        <div className={style.info_box}>
            <p className={style.title}>Origin</p>
            <span className={style.info_about}>{origin.name}</span>
        </div>
        <div className={style.info_box}>
            <p className={style.title}>Type</p>
            <span className={style.info_about}>{type}</span>
        </div>
    </div>
    );
    };
    
    export default Character;