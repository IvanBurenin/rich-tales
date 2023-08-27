'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import WatchesData from '../../database/WatchesData';

import WatchItem from '../WatchItem/WatchItem'

import styles from './HomeSlider.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCostumization.css'

export default function HomeSlider() {
    return(
        <Swiper 
            className={styles.sliderItems}
            modules={[Navigation]}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
                500: {
                    slidesPerView: 1,
                  },
                  1000: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
            }}
        >
                {WatchesData.slice(3, 9).map((watch, index) => 
                    <SwiperSlide key={index}>
                        <WatchItem key={watch.parentId} watch={watch}/>
                    </SwiperSlide>
                )}
        </Swiper>
    )
}