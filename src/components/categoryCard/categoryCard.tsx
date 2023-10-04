import React from 'react';
import { Link } from 'react-router-dom';
import { cardItem } from '../../interfaces/cardItem.interface';
import './categoryCard.css';

function CategoryCardsComponent(props: cardItem) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info__title'> 
                        <p className='cards__item__title'>{props.label}</p>
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                    <div className='cards__item__info__button'>
                        <button className='cards__item__info__button2'>START DESIGNING</button>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CategoryCardsComponent;