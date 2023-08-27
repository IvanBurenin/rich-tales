'use client'

import { useSelector, useDispatch } from 'react-redux'

import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { deleteItemFromFavorite, setItemInFavorite } from '../../redux/favorites/reducer'

import Link from 'next/link'

import styles from './WatchItem.module.css'

export default function WatchItem({ watch }) {
    const itemsInFavorite = useSelector(state => state.favorite.itemsInFavorite);
    const inFavorite = itemsInFavorite.some(item => item.parentId === watch.parentId);

    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const inCart = itemsInCart.some(item => item.parentId === watch.parentId);

    const dispatch = useDispatch();

    const onClickFavorite = (e) => {
        e.stopPropagation();
        if (inFavorite) {
            dispatch(deleteItemFromFavorite(watch.parentId));
        } else {
            dispatch(setItemInFavorite(watch));
        }
    };

    const onClickCart = (e) => {
        e.stopPropagation();
        if (inCart) {
            dispatch(deleteItemFromCart(watch.parentId));
        } else {
            dispatch(setItemInCart(watch));
        }
    };

    return(
        <div className={styles.watchItem}>
            <svg onClick={onClickFavorite} className={`${styles.icon} ${inFavorite ? styles.iconActive : ''}`} xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                <path d="M14.6614 12.6953C12.6242 14.4649 10.5424 15.6623 10 15.9615C9.45764 15.6623 7.37579 14.4649 5.3386 12.6953C3.00053 10.6643 1.00029 8.11958 1 5.49144C1.0015 4.30334 1.47792 3.16266 2.32743 2.32003C3.17722 1.47712 4.33106 1.00149 5.5363 1C7.09078 1.00016 8.39969 1.65851 9.20267 2.71931L10 3.77263L10.7973 2.71931C11.6003 1.65851 12.9092 1.00016 14.4637 1C15.6689 1.00149 16.8228 1.47712 17.6726 2.32003C18.5219 3.16252 18.9983 4.30298 19 5.49088C19 8.11922 16.9996 10.6641 14.6614 12.6953Z" stroke="#818181" fill='none' strokeWidth="2"/>
            </svg>
            <img className={styles.img} src={watch.img} alt="" />
            <h5 className={styles.title}>{watch.title}</h5>
            <p className={styles.price}>{`цена: ${watch.price} Р`}</p>
            <button onClick={onClickCart} className={styles.btn}>{inCart ? 'Убрать из корзины' : 'В корзину'}</button>
        </div>
    )
}