import FavoritesItems from '../components/FavoritesItems/FavoritesItems'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Ваши избранные',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Favorites() {

    return(
        <section className={styles.favoritesPage}>
            <div className={mainStyles.container}>
                <div className={styles.favoritesInner}>
                    <h3 className={mainStyles.title}>Избранное</h3>
                    <FavoritesItems/>
                </div>
            </div>
        </section>
    )
}