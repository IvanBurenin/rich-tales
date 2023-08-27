'use client'

import { useSelector } from 'react-redux'
import Link from 'next/link'

import WatchItem from '../WatchItem/WatchItem'

import styles from '../../favorites/page.module.css'
import mainStyles from '../../main.module.css'

export default function FavoritesItems() {
    const items = useSelector(state => state.favorite.itemsInFavorite)

    return (
        <div className={styles.favoritesItems}>
            {items.length > 0 ? (
                items.map((watch) => (
                    <WatchItem key={watch.parentId} watch={watch}/>
                ))
            ) : (
                <div className={styles.empty}>
                    <p className={styles.text}>Похоже, ваши избранные пусты</p>
                    <Link href='/catalogue'>
                        <button className={`${mainStyles.btn} ${styles.emptyBtn}`}>Вернуться в каталог</button>
                    </Link>
                </div>
            )}
        </div>
    )
}