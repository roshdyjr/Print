"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

const FAQs = () => {
    const { t } = useTranslation()
    const { locale } = useLanguage()

    const faqs = [
        {
            question: t('FAQs.q1'),
            answer: t('FAQs.a1')
        },
        {
            question: t('FAQs.q2'),
            answer: t('FAQs.a2')
        },
        {
            question: t('FAQs.q3'),
            answer: t('FAQs.a3')
        },
        {
            question: t('FAQs.q4'),
            answer: t('FAQs.a4')
        },
        {
            question: t('FAQs.q5'),
            answer: t('FAQs.a5')
        },
        {
            question: t('FAQs.q6'),
            answer: t('FAQs.a6')
        }
    ]

    return (
        <section 
            className='general-container py-8 flex-center flex-col gap-8 lg:py-10 xlg:!py-20'
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
            <div className='flex-center flex-col gap-3 lg:gap-12'>
                <div className='flex-center flex-col gap-2'>
                    <h6 className='text-[#7745A2] font-semibold text-xs lg:text-sm'>{t('FAQs.sectionTitle')}</h6>
                    <h4 className='font-bold text-center text-[28px] lg:text-[32px] xlg:!text-[36px]'>
                        {t('FAQs.mainTitle1')} <span className='text-[#7745A2]'>{t('FAQs.mainTitle2')}</span>
                    </h4>
                    <p className='text-[#51564E] opacity-80 text-base lg:text-lg lg:text-[#7745A2]'>
                        {t('FAQs.subtitle')}
                    </p>
                </div>

                <div className='w-full grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 xlg:!grid-cols-3'>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`min-w-[340px] max-[375px]:min-w-[310px] flex flex-col gap-2 lg:gap-4 ${
                                locale === 'ar' ? 'text-right' : 'text-left'
                            }`}
                        >
                            <p className='text-[#7745A2] font-semibold text-[20px] max-[375px]:text-base'>
                                {faq.question}
                            </p>
                            <p className='text-[#51564E] font-medium max-[375px]:text-xs'>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQs