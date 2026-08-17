import { seoServicesContent } from "@/lib/content/digital-services";
import {
  DigitalServicePage,
  buildDigitalServiceMetadata,
} from "@/components/sections/digital-service-page";
import { SeoGallery } from "@/components/sections/seo-gallery";

export const metadata = buildDigitalServiceMetadata(seoServicesContent);

export default function SeoServicesPage() {
  return (
    <DigitalServicePage
      content={seoServicesContent}
      serviceName="SEO Services"
      afterFeatures={<SeoGallery />}
    />
  );
}
