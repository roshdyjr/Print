'use client'
import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const About = () => {
    const { t } = useTranslation()
    return (
        <section className='general-container flex-center flex-col py-8 lg:py-10 lg:px-6 xlg:!py-20'>
            <div className='flex-center flex-col gap-6 py-[2px]'>
                <h6 className='text-[#7745A2] font-semibold uppercase text-xs lg:text-sm'>{t('About.section')}</h6>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-black font-medium text-center text-[28px] lg:text-[36px]'>{t('About.headline')}</h2>
                        <p className='text-[#7745A2] text-center max-w-[680px] text-base lg:text-[20px]'>{t('About.intro')}</p>
                    </div>
                    <p className='text-[#707070] text-center text-base lg:text-[22px]'>
                        {t('About.desc1')}
                        <br/> <br/>
                        {t('About.desc2')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About