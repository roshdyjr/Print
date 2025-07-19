'use client'
import { useTranslations } from 'next-intl'
import React, { useRef, useEffect, useState } from 'react'

 function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    requestAnimationFrame(step);
   }, [start, target, duration]);
  return count;
}

const Info = () => {
  const t = useTranslations("Info")
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const agents = useCountUp(500, 2000, start);
  const cities = useCountUp(40, 2000, start);
  const documents = useCountUp(1200000, 2000, start);
  const users = useCountUp(200000, 2000, start);

  // Helper to format numbers with K/M
  function formatNumber(num: number, base: number, suffix: string) {
    return num >= base ? `${(num / base).toFixed(1)}${suffix}` : num;
  }

  return (
    <section id='info' className='general-container flex-center py-8 lg:py-10 lg:px-6 xlg:!py-20'>
        <div ref={ref} className='rounded-[18px] w-full py-8 px-8 shadow-info grid grid-cols-2 lg:grid-cols-4 gap-9 xlg:rounded-[36.28px] xlg:py-[47.77px] xlg:px-[97.95px] xlg:gap-[134.83px] max-w-[1920px] xlg:mx-auto'>
            <div className='flex flex-col items-center xlg:gap-[7.42px]'>
                <p className='font-medium text-black text-[32px] xlg:text-[40px]'>
                  {agents}<span className='text-[#7745A2]'>+</span>
                </p>
                <p className='text-[#514F6E] font-medium text-center xlg:text-[22.25px]'>{t('agents')}</p>
            </div>
            <div className='flex flex-col items-center xlg:gap-[7.42px]'>
                <p className='font-medium text-black text-[32px] xlg:text-[40px]'>
                  {cities}<span className='text-[#7745A2]'>+</span>
                </p>
                <p className='text-[#514F6E] font-medium text-center xlg:text-[22.25px]'>{t('cities')}</p>
            </div>
            <div className='flex flex-col items-center xlg:gap-[7.42px]'>
                <p className='font-medium text-black text-[32px] xlg:text-[40px]'>
                  {formatNumber(documents, 1000000, 'M')}<span className='text-[#7745A2]'>+</span>
                </p>
                {/* Switching Text */}
                <p className='text-[#514F6E] font-medium text-center xlg:text-[22.25px] text-nowrap hidden lg:flex'>{t('documents')}</p>
                <p className='text-[#514F6E] font-medium text-center xlg:text-[22.25px] flex lg:hidden'>{t('files')}</p>
            </div>
            <div className='flex flex-col items-center xlg:gap-[7.42px]'>
                <p className='font-medium text-black text-[32px] xlg:text-[40px]'>
                  {formatNumber(users, 1000, 'K')}<span className='text-[#7745A2]'>+</span>
                </p>
                <p className='text-[#514F6E] font-medium text-center xlg:text-[22.25px]'>{t('users')}</p>
            </div>
        </div>
    </section>
  )
}

export default Info