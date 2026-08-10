type ServiceArtProps = {
  variant: "billing" | "credentialing" | "front-desk" | "about";
  className?: string;
};

const titles = {
  billing: "Medical billing services dashboard illustration",
  credentialing: "Provider credentialing and payer enrollment illustration",
  "front-desk": "Virtual front desk and medical answering service illustration",
  about: "Medical billing company partnership illustration",
};

export function ServiceArt({ variant, className }: ServiceArtProps) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={titles[variant]}
    >
      <rect width="480" height="360" rx="32" fill="#F0F7FC" />
      <circle cx="390" cy="70" r="46" fill="#2EC4B6" fillOpacity="0.16" />
      <circle cx="70" cy="300" r="40" fill="#1E88E5" fillOpacity="0.14" />

      {variant === "billing" && (
        <>
          <rect x="70" y="70" width="250" height="170" rx="24" fill="white" stroke="#E5E7EB" />
          <rect x="96" y="100" width="120" height="12" rx="6" fill="#0F4C81" />
          <rect x="96" y="130" width="190" height="8" rx="4" fill="#E5E7EB" />
          <rect x="96" y="150" width="160" height="8" rx="4" fill="#E5E7EB" />
          <rect x="96" y="180" width="54" height="36" rx="10" fill="#EAF6FF" />
          <rect x="162" y="180" width="54" height="36" rx="10" fill="#E8FBF8" />
          <rect x="228" y="180" width="54" height="36" rx="10" fill="#EEF2FF" />
          <rect x="280" y="180" width="140" height="110" rx="22" fill="white" stroke="#E5E7EB" />
          <rect x="304" y="208" width="92" height="10" rx="5" fill="#1E88E5" />
          <rect x="304" y="230" width="70" height="8" rx="4" fill="#E5E7EB" />
          <rect x="304" y="250" width="92" height="22" rx="11" fill="#2EC4B6" />
        </>
      )}

      {variant === "credentialing" && (
        <>
          <rect x="90" y="60" width="220" height="240" rx="24" fill="white" stroke="#E5E7EB" />
          <circle cx="200" cy="120" r="28" fill="#0F4C81" />
          <path d="M200 108v24M188 120h24" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <rect x="120" y="168" width="160" height="10" rx="5" fill="#0F4C81" />
          <rect x="120" y="192" width="130" height="8" rx="4" fill="#E5E7EB" />
          <rect x="120" y="214" width="150" height="8" rx="4" fill="#E5E7EB" />
          <rect x="120" y="246" width="100" height="28" rx="14" fill="#2EC4B6" />
          <rect x="280" y="120" width="130" height="150" rx="22" fill="white" stroke="#E5E7EB" />
          <rect x="302" y="148" width="86" height="10" rx="5" fill="#1E88E5" />
          <rect x="302" y="176" width="70" height="8" rx="4" fill="#E5E7EB" />
          <rect x="302" y="198" width="86" height="8" rx="4" fill="#E5E7EB" />
          <rect x="302" y="230" width="86" height="22" rx="11" fill="#0F4C81" />
        </>
      )}

      {variant === "front-desk" && (
        <>
          <rect x="60" y="90" width="200" height="160" rx="24" fill="white" stroke="#E5E7EB" />
          <circle cx="120" cy="150" r="22" fill="#1E88E5" />
          <rect x="156" y="138" width="78" height="10" rx="5" fill="#0F4C81" />
          <rect x="156" y="158" width="56" height="8" rx="4" fill="#E5E7EB" />
          <rect x="88" y="190" width="144" height="36" rx="12" fill="#EAF6FF" />
          <rect x="250" y="70" width="170" height="210" rx="26" fill="white" stroke="#E5E7EB" />
          <rect x="276" y="100" width="118" height="12" rx="6" fill="#0F4C81" />
          <rect x="276" y="132" width="118" height="42" rx="14" fill="#E8FBF8" />
          <rect x="276" y="188" width="118" height="42" rx="14" fill="#EEF2FF" />
          <rect x="276" y="244" width="118" height="18" rx="9" fill="#2EC4B6" />
        </>
      )}

      {variant === "about" && (
        <>
          <rect x="70" y="80" width="340" height="200" rx="28" fill="white" stroke="#E5E7EB" />
          <circle cx="140" cy="150" r="30" fill="#0F4C81" />
          <circle cx="210" cy="150" r="30" fill="#1E88E5" />
          <circle cx="280" cy="150" r="30" fill="#2EC4B6" />
          <rect x="110" y="210" width="260" height="12" rx="6" fill="#0F4C81" />
          <rect x="140" y="236" width="200" height="10" rx="5" fill="#E5E7EB" />
        </>
      )}
    </svg>
  );
}
