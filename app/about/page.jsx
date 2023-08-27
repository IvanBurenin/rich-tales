import Link from 'next/link'

import BrandsData from '../database/BrandsData'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'О Rich Tales',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function About() {
    return(
        <section className={styles.aboutPage}>
            <div className={mainStyles.container}>
                <div className={styles.aboutInner}>
                    <h3 className={mainStyles.title}>Добро пожаловать в мир RICH TALES </h3>
                    <div className={styles.textContainer}>
                        <p className={mainStyles.text}>
                            Место, где роскошь и история сочетаются в каждом часовом шедевре. Мы являемся магазином, специализирующимся на продаже дорогих часов от известных мировых брендов.
                        </p>
                        <p className={mainStyles.text}>
                            Наш бренд работает с 2003 года и оставляет покупателей довольными по сей день
                        </p>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.aboutTop}>
                            <div className={styles.aboutLeft}>
                                <p className={mainStyles.text}>
                                    Мы знаем, что для вас часы - это не просто способ отслеживать время. Они становятся вашими союзниками, выражением стиля и индивидуальности. Поэтому мы стараемся предоставить вам коллекцию, которая отражает ваш уникальный вкус и предпочтения.
                                </p>
                                <img src="./rich-tales/about-images/about-image1.jpg" alt="" className={styles.aboutLeftImg} />
                            </div>
                            <div className={styles.aboutRight}>
                                <p className={styles.text}>
                                    Мы работаем только с официальными поставщиками и дилерами, чтобы гарантировать подлинность и качество всех часов, представленных на нашем сайте.
                                </p>
                                <div className={styles.brands}>
                                    {BrandsData.map((brand, index)=>
                                        <img key={index} src={brand.img} alt="" className={styles.brand} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <img src="./rich-tales/about-images/about-image2.jpg" alt="" className={styles.aboutImg} />
                    </div>
                    <div className={styles.aboutDown}>
                        <Link href='/catalogue'>
                            <button className={`${mainStyles.btn} ${styles.aboutBtn}`}>Каталог</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.contactsInner}>
                    <h3 className={mainStyles.title}>Мы готовы связаться с вами</h3>
                    <ul className={styles.contacts}>
                        <li className={styles.contact}>
                            <Link href='tel: 78885553535'>
                                Телефон: +7 888 555 35 35
                            </Link>
                        </li>
                        <li className={styles.contact}>
                            <Link href='mailto: emaildoesntexist@gmail.com'>
                                E-Mail: emaildoesntexist@gmail.com
                            </Link>
                        </li>
                        <li className={styles.contact}>
                            <Link target='a_blank' href='https://www.google.com/maps/place/%D0%A2%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+22%D0%90+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+3,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+127006/@55.7675407,37.601525,17.25z/data=!4m6!3m5!1s0x46b54a3f4fa6e1a1:0xcbd26d4ab36ef069!8m2!3d55.767577!4d37.602612!16s%2Fg%2F11csjj88x5?entry=ttu'>
                                Адрес магазина: Тверская ул., 22а стр.3, Москва, 115114
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3758868763523!2d37.6008032421558!3d55.76752038962193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a3f4fa6e1a1%3A0xcbd26d4ab36ef069!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMjLQkCDRgdGC0YDQvtC10L3QuNC1IDMsINCc0L7RgdC60LLQsCwgMTI3MDA2!5e0!3m2!1sru!2sru!4v1692119753448!5m2!1sru!2sru" width={1140} height={317} style={{border:'0'}} loading={'lazy'}>
                        </iframe>
                    </div>
                    <div className={styles.contactsDown}>
                        <Link href='/contacts'>
                            <button className={`${mainStyles.btn} ${styles.contactsBtn}`}>Подробнее</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}