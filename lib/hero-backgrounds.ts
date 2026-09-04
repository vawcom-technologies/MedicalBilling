/**
 * Full-bleed hero photos by route — healthcare-appropriate Unsplash sources.
 */
export const heroBackgrounds = {
  home: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern medical clinic hallway representing MedSol healthcare revenue support",
  },
  "medical-billing": {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=80",
    alt: "Healthcare professional reviewing patient data for medical billing and RCM",
  },
  credentialing: {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=80",
    alt: "Medical professionals collaborating on provider credentialing and enrollment",
  },
  mips: {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2400&q=80",
    alt: "Clinician reviewing quality metrics and MIPS reporting on a tablet",
  },
  "virtual-front-desk": {
    src: "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?auto=format&fit=crop&w=2400&q=80",
    alt: "Front desk support specialist wearing a headset and typing at a computer workstation",
  },
  about: {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2400&q=80",
    alt: "Physician in a modern practice representing the MedSol partnership team",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2400&q=80",
    alt: "Healthcare consultation desk ready for patient and practice support calls",
  },
  "webpage-development": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80",
    alt: "Laptop and analytics workspace for medical practice webpage development",
  },
  "social-media-marketing": {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2400&q=80",
    alt: "Smartphone social media interface representing healthcare practice marketing",
  },
  "seo-services": {
    src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=2400&q=80",
    alt: "Search and analytics workspace for medical practice SEO services",
  },
  calculator: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    alt: "Financial charts and documents representing revenue leakage analysis",
  },
} as const;

export type HeroBackgroundKey = keyof typeof heroBackgrounds;
