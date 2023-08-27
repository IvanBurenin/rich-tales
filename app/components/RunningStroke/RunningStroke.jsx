'use client'

import { useState, useEffect } from 'react'

import BrandsData from '../../database/BrandsData'

import styles from '../../page.module.css'

export default function RunningStroke() {

    const [position, setPosition] = useState(0);
    
    const totalWidth = BrandsData.length * 340;
    
    const animate = (startTime) => {
        const currentTime = performance.now();
        const deltaTime = currentTime - startTime;
        const speed = 0.05;
    
        setPosition((prevPosition) => (prevPosition + deltaTime * speed) % totalWidth);
    
        requestAnimationFrame(() => animate(currentTime));
    };
    
    useEffect(() => {
        const startTime = performance.now();
        const animationFrameId = requestAnimationFrame(() => animate(startTime));
    
        return () => cancelAnimationFrame(animationFrameId);
    }, []);
    
    return(
        <div className={styles.movingStroke}>
            <div className={styles.movingStrokeWrap} style={{transform: `translateX(-${position}px)`, transition: 'none'}}>
                {BrandsData.map((brand, index)=>
                    <img key={index} src={brand.img} alt="" className={styles.brandImg} />
                )}    
            </div>
        </div>
    )
}
