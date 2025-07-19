"use client"
import { useTranslations } from 'next-intl';
import React from 'react';

export default function TermsCondition() {
    const t = useTranslations('Terms');
    return (
        <div className="min-h-screen bg-white flex justify-center py-8 pt-20 lg:pt-32 px-2">
            <div className="general-container xlg:mx-auto xlg:max-w-[1920px]">
                <h1 className="text-x font-semibold text-[#7745A2] mb-8 tracking-wide uppercase">{t('title')}</h1>

                {/* Section: The general terms and conditions */}
                <h2 className="text-2xl font-bold text-[#7745A2] mb-2">{t('generalTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('general').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: The legal usage */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('legalUsageTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('legalUsage').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: The content */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('contentTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('content').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Electronic website for others */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('externalSitesTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('externalSites').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Intellectual property */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('intellectualPropertyTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('intellectualProperty').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: The responsibility in joining the Print platform */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('responsibilityTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('responsibility').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Privacy */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('privacyTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('privacy').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Compensations */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('compensationsTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('compensations').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Termination */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('terminationTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('termination').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: Providing website */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('providingWebsiteTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('providingWebsite').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: General */}
                <h2 className="text-xl font-bold text-[#7745A2] mb-2">{t('generalTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('generalSection').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                {/* Section: The special terms and conditions */}
                <h2 className="text-2xl font-bold text-[#7745A2] mb-2 mt-8">{t('specialTitle')}</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                    {t.raw('special').map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}