import styles from '../../page.module.css'

export default function HomeCollection({img, title}) {
    return(
        <div className={styles.collection}>
            <img src={img} alt="" className={styles.collectionImg} />
            <h4 className={styles.collectionTitle}>{title}</h4>       
        </div>
    )
}