"use client"
import { useTranslations, useLocale } from 'next-intl'
import React from 'react'

export default function PrivacyPolicy() {
    const t = useTranslations('PrivacyPolicy')
    const locale = useLocale()
    return (
        <div className="pb-10 pt-20 min-h-screen lg:pt-32">
            <div className="general-container xlg:mx-auto xlg:max-w-[1920px] bg-white">
                <h4 className="text-[#7745A2] font-bold text-xs tracking-widest mb-4 uppercase">{t('title')}</h4>
                <ul className="bg-[#FBF0DA] rounded-lg p-6 mb-8 list-none">
                    <li className="text-[#73510D] mb-2 flex items-start">
                        <span className="text-lg mr-2">•</span>
                        <span className="text-[#73510D]">{t('intro1')}</span>
                    </li>
                    <li className="text-[#73510D] flex items-start">
                        <span className="text-lg mr-2">•</span>
                        <span className="text-[#73510D]">{t('intro2')}</span>
                    </li>
                </ul>
                <h2 className="text-[#7745A2] font-bold text-xl mb-4">{t('mainPointsTitle')}</h2>
                <ul className="mb-8 pl-6 list-disc text-gray-700">
                    <li className="mb-3">{t('mainPoint1')}</li>
                    <li className="mb-3">{t('mainPoint2')}</li>
                    <li className="mb-3">{t('mainPoint3')}</li>
                </ul>
                <h2 className="text-[#7745A2] font-bold text-lg mb-4">{t('collectedInfoTitle')}</h2>
                <ul className="mb-8 pl-6 list-disc text-gray-700">
                    <li>{t('collectedInfo')}</li>
                </ul>
                <h2 className="text-[#7745A2] font-bold text-lg mb-4">{t('usageLimitsTitle')}</h2>
                <ul className="mb-8 pl-6 list-disc text-gray-700">
                    <li className="mb-3">{t('usageLimit1')}</li>
                    <li className="mb-3">{t('usageLimit2')}</li>
                    <li className="mb-3">{t('usageLimit3')}</li>
                </ul>
                <h2 className="text-[#7745A2] font-bold text-lg mb-4">{t('updateDataTitle')}</h2>
                <ul className="mb-8 pl-6 list-disc text-gray-700">
                    <li className="mb-3">{t('updateData1')}</li>
                    <li className="mb-3">{t('updateData2')}</li>
                    <li className="mb-3">{t('updateData3')}</li>
                </ul>
            </div>
        </div>
    )
}