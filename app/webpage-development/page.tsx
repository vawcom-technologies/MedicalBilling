import {
  webpageDevelopmentContent,
} from "@/lib/content/digital-services";
import {
  DigitalServicePage,
  buildDigitalServiceMetadata,
} from "@/components/sections/digital-service-page";
import { WebsiteBuildsGallery } from "@/components/sections/website-builds-gallery";

export const metadata = buildDigitalServiceMetadata(webpageDevelopmentContent);

export default function WebpageDevelopmentPage() {
  return (
    <DigitalServicePage
      content={webpageDevelopmentContent}
      serviceName="Webpage Development Services"
      afterFeatures={<WebsiteBuildsGallery />}
    />
  );
}
