'use client';

import { useTranslations } from "next-intl";
import Form from "./Form";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ServiceProvider = () => {
  const t = useTranslations("ServiceProvider");

  return (
    <section className="relative z-10 overflow-hidden bg-[#f7f2fa]    pt-[60px]   md:pt-[80px]   xl:pt-[100px]   2xl:pt-[120px]">
      <div className=" ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 pt-16">
            <div className="mx-auto max-w-6xl text-center px-2">
              <h3 className="mb-2 text-xl font-bold text-[#8d5fd3] uppercase tracking-wide">{t("title")}</h3>
              <h2 className="mb-2 text-2xl font-extrabold text-dark sm:text-4xl">
                {t("subtitle").split("Print.sa")[0]}
                <span className="text-[#8d5fd3]">Print.sa</span>
                {t("subtitle").split("Print.sa")[1] || ""}
              </h2>
              <p className="mb-8 text-base text-[#6c648b] font-medium">
                {t("description")}
              </p>
            </div>
            {/* Features Section */}
            {/* Swiper for mobile */}
            <div className="mb-16 block sm:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true, el: undefined }}
                modules={[Pagination]}
                className="custom-swiper-pagination"
              >
                {t.raw("features").map((feature: { title: string }, idx: number) => {
                  const icons = [
                    "/service_provider/Customers.svg",
                    "/service_provider/Clarity.svg",
                    "/service_provider/orders.svg",
                    "/service_provider/working.svg"
                  ];
                  const alts = [
                    "Customers icon",
                    "Clarity icon",
                    "Orders icon",
                    "Working 24/7 icon"
                  ];
                  return (
                    <SwiperSlide key={idx}>
                      <div className="rounded-xl bg-[#7745A20A] p-8 text-center shadow flex flex-col items-center w-full max-w-xs mx-auto">
                        <Image src={icons[idx]} alt={alts[idx]} width={100} height={100} />
                        <p className="mt-4 font-bold text-xl text-[#2d2346]">{feature.title}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* Grid for larger screens */}
            <div className="mb-16 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-6xl">
              {t.raw("features").map((feature: { title: string }, idx: number) => {
                const icons = [
                  "/service_provider/Customers.svg",
                  "/service_provider/Clarity.svg",
                  "/service_provider/orders.svg",
                  "/service_provider/working.svg"
                ];
                const alts = [
                  "Customers icon",
                  "Clarity icon",
                  "Orders icon",
                  "Working 24/7 icon"
                ];
                return (
                  <div key={idx} className="rounded-xl bg-[#7745A20A] p-8 text-center shadow flex flex-col items-center">
                    <Image src={icons[idx]} alt={alts[idx]} width={100} height={100} />
                    <p className="mt-4 font-bold text-xl text-[#2d2346]">{feature.title}</p>
                  </div>
                );
              })}
            </div>
            {/* End Features Section */}
            <div className="bg-white py-10">
                          <Form />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider; 