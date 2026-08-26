import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-0 overflow-hidden"
    >
      {/* Hero background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.webp"
          alt="Paver patio with pergola and outdoor lighting at sunset"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
        <div className="inline-block bg-[rgba(200,160,40,0.75)] text-white px-10 sm:px-40 py-[3px] rounded-[10px] text-lg font-semibold mb-[30px] tracking-[0.5px] backdrop-blur-[4px]">
          + 20 years of experience
        </div>
        <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
          TRANSFORM<br />YOUR SPACES
        </h1>
        <p className="text-xl text-white/90 mb-[35px] leading-[1.5] font-normal">
          Custom projects with professional<br />quality &amp; lifetime guarantee
        </p>

      </div>



      {/* Features Bar */}
      <div className="relative z-[2] flex flex-col lg:flex-row gap-4 lg:gap-10 bg-[rgba(30,30,30,0.6)] backdrop-blur-[8px] rounded-xl py-5 sm:py-[35px] px-4 sm:px-5 lg:px-[50px] mt-0.5 mb-6 sm:mb-10 max-w-[1000px] w-full">
        <FeatureItem
          title="Durability"
          description="Quality materials that stand the test of time"
          icon={<CheckCircleIcon />}
        />
        <FeatureItem
          title="Design options"
          description="Wide variety of colors, textures and patterns"
          icon={<DesignIcon />}
        />
        <FeatureItem
          title="Expert Installation"
          description="Skilled team, no shortcuts"
          icon={<TeamIcon />}
        />
      </div>
    </section>
  );
}

function FeatureItem({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-[15px] flex-1">
      <div className="shrink-0">{icon}</div>
      <div>
        <h4 className="text-white text-base font-bold mb-1">{title}</h4>
        <p className="text-white/80 text-sm leading-[1.4]">{description}</p>
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#ea580c" strokeWidth="2" fill="none" />
      <path d="M13 20l4 4 10-10" stroke="#ea580c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="15" cy="17" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="25" cy="17" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="20" cy="27" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="20" cy="14" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="13" cy="25" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
      <circle cx="27" cy="25" r="4" stroke="#ea580c" strokeWidth="2" fill="none" />
    </svg>
  );
}
