import {
  websiteDevelopmentContent,
} from "@/lib/content/digital-services";
import {
  DigitalServicePage,
  buildDigitalServiceMetadata,
} from "@/components/sections/digital-service-page";
import { WebsiteBuildsGallery } from "@/components/sections/website-builds-gallery";

export const metadata = buildDigitalServiceMetadata(websiteDevelopmentContent);

export default function WebsiteDevelopmentPage() {
  return (
    <DigitalServicePage
      content={websiteDevelopmentContent}
      serviceName="Website Development Services"
      afterFeatures={<WebsiteBuildsGallery />}
    />
  );
}
