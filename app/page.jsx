import Link from 'next/link'

import HomeSlider from './components/HomeSlider/HomeSlider'
import RunningStroke from './components/RunningStroke/RunningStroke'
import HomeCollection from './components/HomeCollection/HomeCollection'

import styles from './page.module.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'Магазин часов Rich Tales',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function RichHome() {
    return(
        <>
            <section className={styles.top}>
                <div className={`${mainStyles.container} ${styles.topContainer}`}>
                    <div className={styles.topInner}>
                        <div className={styles.topLeft}>
                            <h2 className={styles.topTitle}>
                                Совершенство в каждом тике: погрузитесь в мир драгоценных часов
                            </h2>
                            <p className={mainStyles.text}>Опробуйте новую коллекцию Invicta, Rollex, Casio и многих других</p>
                            <Link href='/catalogue'>
                                <button className={mainStyles.btn}>Каталог</button>
                            </Link>
                        </div>
                        <div className={styles.topRight}>
                            <img src="./rich-tales/home-images/top-image.png" alt="" className={styles.topImg} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.arrivals}>
                <div className={mainStyles.container}>
                    <div className={styles.arrivalsInner}>
                        <h3 className={mainStyles.title}>Новые поступления</h3>
                        <p className={`${mainStyles.text} ${styles.arrivalsText}`}>Мы рады представить вам наши самые свежие и эксклюзивные поступления в мире дорогих часов. Наша команда усердно работает, чтобы обеспечить вам доступ к последним тенденциям и самым актуальным моделям от ведущих мировых брендов.</p>
                        <HomeSlider/>
                    </div>
                </div>
            </section>

            <section className={styles.suppliers}>
                <div className={mainStyles.container}>
                    <div className={styles.suppliersInner}>
                        <h3 className={mainStyles.title}>Наши поставщики</h3>
                        <p className={`${mainStyles.text} ${styles.suppliersTopText}`}>
                            Мы гордимся тем, что сотрудничаем только с лучшими и репутационными поставщиками часов в отрасли. Наша цель - предоставить нашим клиентам только высочайшее качество и аутентичные изделия.
                        </p>
                        <RunningStroke/>
                        <p className={`${mainStyles.text} ${styles.suppliersBottomText}`}>
                            Мы работаем с ведущими мировыми брендами часов, которые известны своим превосходством в техническом мастерстве и инновационных решениях. Наши поставщики имеют богатый опыт и долгую историю в часовой индустрии, что обеспечивает нам доступ к эксклюзивным коллекциям и лимитированным выпускам.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.collections}>
                <div className={mainStyles.container}>
                    <div className={styles.collectionsInner}>
                        <h3 className={mainStyles.title}>Коллекции</h3>
                        <p className={`${mainStyles.text} ${styles.collectionsText}`}>
                            Погрузитесь в мир коллекций и найдите идеальное часовое сокровище, которое будет служить вам воплощением стиля, роскоши и престижа. Мы гарантируем вам незабываемый опыт покупки.
                        </p>
                        <div className={styles.collectionsContent}>
                            <HomeCollection img='./rich-tales/collections-images/collection-image1.jpg' title="Gentleman's Reserve"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image2.jpg' title="Timeless Classics"/>
                            <HomeCollection img='./rich-tales/collections-images/collection-image3.jpg' title="Heritage Collection"/>
                        </div>
                        <div className={styles.collectionsDown}>
                            <Link href='/catalogue'>
                                <button className={`${mainStyles.btn} ${styles.collectionsBtn}`}>Каталог</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutLeft}>
                            <h3 className={mainStyles.title}>О нас</h3>
                            <div className={styles.aboutText}>
                                <p className={mainStyles.text}>
                                    Наша миссия - предоставить вам доступ к самым роскошным и качественным моделям часов, которые станут воплощением вашего стиля и престижа. Мы тщательно отбираем каждую модель, чтобы уверенно предлагать вам только лучшее из мира часового искусства.
                                </p>
                                <p className={mainStyles.text}>
                                    Мы гарантируем подлинность всех часов, представленных на нашем сайте. Мы работаем только с официальными поставщиками и дилерами, чтобы обеспечить вам высокое качество и надежность при каждой покупке.
                                </p>
                            </div>
                            <Link href='/about'>
                                <button className={`${mainStyles.btn} ${styles.aboutBtn}`}>Подробнее</button>
                            </Link>
                        </div>
                        <div className={styles.aboutRight}>
                            <h2 className={styles.aboutTitle}>Rich Tales</h2>       
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}