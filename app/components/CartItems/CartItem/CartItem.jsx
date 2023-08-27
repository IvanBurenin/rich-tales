import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../../redux/cart/reducer'
import Link from 'next/link'

import styles from './CartItem.module.css'
import mainStyles from '../../../main.module.css'

export default function CartItem({cart, updateTotalSumm}) {
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch()

    const onClickMinus = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    };

    const onClickPlus = () => {
        setCounter(counter + 1);
    };

    const totalPrice = () => {
        const price = cart.price * counter;
        return price;
    };

    const onDeleteCartItem = (parentId) => {
        dispatch(deleteItemFromCart(parentId));
    }

    useEffect(() => {
        updateTotalSumm(cart.price * counter);
    }, [updateTotalSumm, cart.price, counter]);

    return(
        <div className={styles.cartItem}>
            <div className={styles.left}>
                <img src={cart.img} alt="" className={styles.cartImg} />
                <div className={styles.content}>
                    <div className={styles.species}>
                        <p className={mainStyles.title}>{cart.title}</p>
                        <p className={styles.price}>{`цена: ${totalPrice()} Р`}</p>
                    </div>
                    <div className={styles.amount}>
                        <span className={styles.counterText}>Кол-во:</span>
                        <div className={styles.counter}>
                            <span onClick={onClickMinus} className={styles.counterItem}>-</span>
                            <span className={styles.counterTotal}>{counter}</span>
                            <span onClick={onClickPlus} className={styles.counterItem}>+</span>
                        </div>
                    </div>
                </div>
            </div>
            <img onClick={() => onDeleteCartItem(cart.parentId)} src="/rich-tales/home-images/menu-close.svg" alt="" className={styles.close} />
        </div>
    )
}