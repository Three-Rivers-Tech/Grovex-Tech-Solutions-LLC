import Link from "next/link";

export default function EnhancedHero() {
  const slides = [
    {
      title: "Build Sustainable Growth from Turtle Creek",
      subtitle:
        "GroveX helps local businesses strengthen the foundation first—clear websites, dependable systems, and practical support that can later power stronger Google Ads results without leading as a consumer repair brand.",
      ctaPrimary: "Start a Growth Conversation",
      ctaSecondary: "Explore Services",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/services",
      bgColor: "from-teal-600 to-emerald-700"
    },
    {
      title: "Websites, Systems, and Real Local Momentum",
      subtitle:
        "From storefront presentation to behind-the-scenes operations, we build practical infrastructure that helps local brands look sharper and run cleaner.",
      ctaPrimary: "See What We Do",
      ctaSecondary: "Book a Consultation",
      ctaPrimaryLink: "/services",
      ctaSecondaryLink: "/contact",
      bgColor: "from-emerald-600 to-teal-700"
    },
    {
      title: "A Growth Studio Taking Root at 124 Grant Street",
      subtitle:
        "Technology, retail energy, and community presence are coming together in one place—designed to help good local businesses grow with confidence.",
      ctaPrimary: "Learn Our Story",
      ctaSecondary: "Get in Touch",
      ctaPrimaryLink: "/about",
      ctaSecondaryLink: "/contact",
      bgColor: "from-teal-700 to-green-700"
    }
  ];

  const currentSlide = 0;

  return (
    <section className="relative overflow-hidden" role="banner" aria-label="Hero section">
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-all duration-1000 ease-in-out`} aria-hidden="true"></div>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10 max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white/95 text-sm font-medium mb-6 animate-fade-in">
            <span className="mr-2">📍</span>
            124 Grant Street, Turtle Creek, PA 15145
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ease-in-out leading-tight px-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto transition-all duration-700 ease-in-out leading-relaxed px-4 font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 max-w-2xl mx-auto" role="group" aria-label="Call to action buttons">
            <Link
              href={slides[currentSlide].ctaPrimaryLink}
              className="bg-white text-primary font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
            >
              {slides[currentSlide].ctaPrimary}
            </Link>
            <Link
              href={slides[currentSlide].ctaSecondaryLink}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary text-center min-h-[48px] flex items-center justify-center text-base sm:text-lg font-medium"
            >
              {slides[currentSlide].ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
