'use client'

import { useSelector, useDispatch } from 'react-redux'

import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { deleteItemFromFavorite, setItemInFavorite } from '../../redux/favorites/reducer'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import mainStyles from '../../main.module.css';

import WatchesData from '../../database/WatchesData';

export default function CatalogueItem({ params }) {
    const [itemData, setItemData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [genre, setGenre] = useState('')
    
    useEffect(() => {
        const selectedData = WatchesData.find(item => item.parentId === parseInt(params.parentId));
        if (selectedData) {
            setItemData(selectedData);
            setLoading(false);
    
            const foundFilter = selectedData.filters.find(filter => filter.keyText === 'Мужской' || filter.keyText === 'Женский');
            if (foundFilter) {
                setGenre(`${foundFilter.keyText === 'Мужской' ? 'Мужские' : 'Женские'}`);
            }
        }
    }, [params.parentId]);

    const dispatch = useDispatch()

    const itemsInFavorite = useSelector(state => state.favorite.itemsInFavorite);
    const inFavorite = itemData && itemsInFavorite.some(item => item.parentId === itemData.parentId);

    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const inCart = itemData && itemsInCart.some(item => item.parentId === itemData.parentId);

    const onClickFavorite = (e) => {
        e.stopPropagation();
        if (itemData && inFavorite) {
            dispatch(deleteItemFromFavorite(itemData.parentId));
        } else if (itemData) {
            dispatch(setItemInFavorite(itemData));
        }
    };
    
    const onClickCart = (e) => {
        e.stopPropagation();
        if (itemData && inCart) {
            dispatch(deleteItemFromCart(itemData.parentId));
        } else if (itemData) {
            dispatch(setItemInCart(itemData));
        }
    };

    return(
        <section className={styles.catalogueItem}>
            <div className={mainStyles.container}>
                <div className={styles.catalogueInner}>
                    {loading ? (
                        <div>ИДЕТ ЗАГРУЗКА</div>
                    ) : (
                        <>
                            <div className={styles.catalogueTop}>
                                <img src={itemData ? itemData.img : 'Загрузка...'} alt="" className={styles.catalogueImg} />
                                <div className={styles.catalogueRight}>
                                    <div className={styles.top}>
                                        <p className={`${mainStyles.text} ${styles.catalogueGenre}`}>{`${genre} наручные часы`}</p>
                                        <h4 className={`${mainStyles.title} ${styles.catalogueTitle}`}>{itemData.title}</h4>
                                        <p className={mainStyles.text}>{`${itemData.price} Р`}</p>
                                    </div>
                                    <div className={styles.buttons}>
                                        <button onClick={onClickCart} className={`${mainStyles.btn} ${styles.cartBtn}`}>{`${inCart ? 'Уже в корзине' : 'Добавить в корзину'}`}</button>
                                        <button onClick={onClickFavorite} className={`${mainStyles.btn} ${styles.heartBtn} ${inFavorite ? styles.heartBtnActive : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                                <path d="M14.0058 22.9969L14.0058 22.9969L14 23L13.9942 22.9969C13.7518 22.8685 10.4455 21.0662 7.21485 18.2363C3.9317 15.3604 1.00027 11.6604 1 7.75238C1.00217 5.96213 1.71414 4.24587 2.97967 2.98004C4.2452 1.71421 5.96094 1.00217 7.75055 1C10.0392 1.00016 11.9935 1.97964 13.2003 3.58729L14 4.65269L14.7997 3.58729C16.0065 1.97964 17.9608 1.00016 20.2495 1C22.0391 1.00217 23.7548 1.71421 25.0203 2.98004C26.286 4.24601 26.998 5.9625 27 7.75295C26.9994 11.6607 24.0681 15.3606 20.7851 18.2363C17.5545 21.0662 14.2482 22.8685 14.0058 22.9969Z" stroke="#F3F3F3" strokeWidth="2"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <img src={itemData.brandImg} alt="" className={styles.catalogueBrand} />
                                </div>
                            </div>
                            <div className={styles.catalogueFeatures}>
                                <h3 className={mainStyles.title}>Характеристики</h3>
                                <ul className={styles.featuresList}>
                                    {itemData.filters.map((filter, index)=>
                                        <li key={index} className={styles.featureItem}>
                                            <p className={`${mainStyles.text} ${styles.featureText}`}>{filter.key}</p>
                                            <div className={styles.dots}></div>
                                            <p className={`${mainStyles.text} ${styles.featureText}`}>{filter.keyText}</p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}