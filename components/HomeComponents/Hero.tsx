"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <section 
            className='general-container flex-center w-full mt-[85px] bg-[#7745A20A] lg:pt-20 pb-10 xlg:mt-0 xlg:!pt-[128px] xlg:pb-[80px]'
            dir={String(t('Navbar.lang')) === 'en' ? 'rtl' : 'ltr'}
        >
            <div className='flex flex-col items-start gap-4 lg:flex-row w-full xlg:gap-8 xlg:w-[1376px]'>
                <div className='py-8 pb-0 flex flex-col gap-4 lg:py-10 lg:px-6 xlg:gap-6 xlg:!py-20 xlg:!px-12'>
                    <div className='flex flex-col gap-4 xlg:gap-9'>
                        <div className='flex flex-col gap-4 text-center lg:text-start'>
                            <h1 className='font-semibold text-[30px] text-black leading-[38px] lg:text-[45px] lg:leading-[62px] xlg:text-[50px]'>
                                {String(t('Hero.title1'))} <br /> 
                                {String(t('Hero.title2'))} - {String(t('Hero.title3'))} <br /> 
                                <span className='text-[#7745A2]'>{String(t('Hero.title4'))}</span> 
                                <span className='block text-[15px] font-medium leading-[28px] lg:hidden'>
                                    {String(t('Hero.subtitleMobile'))}
                                </span> 
                            </h1>
                            <p className='text-[#707070] text-base xlg:text-[18px]'>
                                <span className='hidden lg:flex'>{String(t('Hero.subtitleDesktop1'))}</span>
                                {String(t('Hero.subtitleDesktop2'))}
                            </p>
                        </div>
                        <div className='flex items-center justify-center gap-[8.71px] lg:justify-start xlg:gap-[13px]'>
                            <Image 
                                src={"/app-store.svg"} 
                                alt={String(t('Hero.appStoreAlt'))} 
                                width={190.97} 
                                height={63.66} 
                                className='cursor-pointer w-[128px] h-[42.67px] lg:w-[155px] lg:h-[53px] xlg:w-[190.97px] xlg:h-[63.66px]' 
                            />
                            <Image 
                                src={"/play-store.svg"} 
                                alt={String(t('Hero.playStoreAlt'))} 
                                width={214.84} 
                                height={63.66} 
                                className='cursor-pointer w-[144px] h-[42.67px] lg:w-[196px] lg:h-[53px] xlg:w-[214.84px] xlg:h-[63.66px]' 
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-center w-full'>
                    <div className='w-full h-full relative'>
                        <Image 
                            src={"/hero.png"} 
                            alt={String(t('Hero.imageAlt'))} 
                            width={570} 
                            height={564} 
                            className='w-full h-full xlg:!h-[564px] lg:scale-150 xl:scale-125 overflow-hidden' 
                        />
                        <div className={`absolute rounded-full bg-white flex items-center gap-[7.26px] shadow-hero py-[5.13px] ps-[5.13px] pe-[15.4px] 
                            ${String(t('Navbar.lang')) === 'en' ? 'right-0 md:right-[180px] lg:-right-14 xl:right-0' : 'left-0 md:left-[180px] lg:-left-14 xl:left-0'} 
                            top-20 md:top-[180px] lg:top-10 xl:top-[95px] xl:py-[7.26px] xl:ps-[7.26px] xl:pe-[21.78px]`}>
                            <div className='rounded-full bg-[#7745A2] w-[23.09px] h-[23.09px] flex items-center justify-center xl:w-[32.67px] xl:h-[32.67px]'>
                                <Image 
                                    src={"/rocket.svg"} 
                                    alt={String(t('Hero.rocketAlt'))} 
                                    width={21.78} 
                                    height={21.78} 
                                    className='w-[15.4px] h-[15.4px] xl:w-[21.78px] xl:h-[21.78px]'
                                />
                            </div>
                            <p className='text-black font-medium text-[12.26px] xl:text-[14.52px]'>
                                {String(t('Hero.fastService'))}
                            </p>
                        </div>
                        <div className={`absolute rounded-full bg-white py-[5.13px] ps-[5.13px] pe-[15.4px] flex items-center gap-[7.26px] shadow-hero 
                            ${String(t('Navbar.lang')) === 'en' ? 'left-10 md:left-[180px] lg:left-0 xl:left-[45px]' : 'right-10 md:right-[180px] lg:right-0 xl:right-[45px]'} 
                            bottom-[100px] md:bottom-[180px] lg:bottom-14 xl:bottom-[125px] xl:py-[7.26px] xl:ps-[7.26px] xl:pe-[21.78px]`}>
                            <div className='rounded-full bg-[#7745A2] w-[23.09px] h-[23.09px] flex items-center justify-center xl:w-[32.67px] xl:h-[32.67px]'>
                                <Image 
                                    src={"/white-upload.svg"} 
                                    alt={String(t('Hero.uploadAlt'))} 
                                    width={21.78} 
                                    height={21.78} 
                                    className='w-[15.4px] h-[15.4px] xl:w-[21.78px] xl:h-[21.78px]'
                                />
                            </div>
                            <p className='text-black font-medium text-[12.26px] xl:text-[14.52px]'>
                                {String(t('Hero.easyUpload'))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero