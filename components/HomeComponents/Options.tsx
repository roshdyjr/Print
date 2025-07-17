"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Options = () => {
    const { t } = useTranslation()

    return (
        <section className="general-container flex-center py-8 bg-[url('/dotsBg.png')] lg:h-[400px] xl:h-[480px] xlg:!h-[704px] lg:py-10 xlg:!py-20"             dir={String(t('Navbar.lang')) === 'en' ? 'rtl' : 'ltr'}
>
            <div className='flex flex-col gap-4 items-center justify-between w-full lg:flex-row lg:gap-0'>
                <div className='flex flex-col gap-9'>
                    <div className='flex flex-col gap-8 lg:w-[544px]'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-[28px] text-center leading-[38px] lg:text-start lg:text-[32px] xlg:leading-[49px] xlg:!text-[40px]'>
                                {t('Options.title1')} <br className='hidden lg:block' /> 
                                {t('Options.title2')} <br />
                                <span className='text-[#7745A2]'>{t('Options.title3')}</span>
                            </h2>
                            <p className='text-black font-medium text-base text-center lg:text-start xlg:!text-[18px]'>
                                {t('Options.description1')} <br className='hidden lg:block' /> 
                                {t('Options.description2')} <br className='hidden lg:block' /> 
                                {t('Options.description3')}
                            </p>
                        </div>
                    </div>
                </div>
                <Image 
                    src={"/iPhoneGroup.svg"} 
                    alt={t('Options.imageAlt')} 
                    width={646.64} 
                    height={591.76} 
                    className='w-[271.48px] h-[248.44px] lg:w-[340px] lg:h-[300px] xl:w-[420px] xl:h-[370px] xlg:!w-[646.64px] xlg:!h-[591.76px]'
                />
            </div>
        </section>
    )
}

export default Options