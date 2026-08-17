import {
  socialMediaMarketingContent,
} from "@/lib/content/digital-services";
import {
  DigitalServicePage,
  buildDigitalServiceMetadata,
} from "@/components/sections/digital-service-page";

export const metadata = buildDigitalServiceMetadata(socialMediaMarketingContent);

export default function SocialMediaMarketingPage() {
  return (
    <DigitalServicePage
      content={socialMediaMarketingContent}
      serviceName="Social Media Marketing Services"
    />
  );
}
