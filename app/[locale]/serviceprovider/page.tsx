import ServiceProvider from "@/components/ServiceProviderComponents/ServiceProvider";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslations({ locale, namespace: "ServiceProvider" });

  return {
    title: t("title"),
  };
}

const ServiceProviderPage = () => {
  return (
    <>
      <ServiceProvider />
    </>
  );
};

export default ServiceProviderPage; 