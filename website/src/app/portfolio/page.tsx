import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work & Credentials | GroveX",
  description: "See GroveX work across websites, software, IT support, and practical systems built to help local businesses grow with more confidence.",
  openGraph: {
    title: "Our Work & Credentials | GroveX",
    description: "Client work, reviews, and technical proof from GroveX",
    type: "website",
    url: "https://grovextech.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GroveX Tech & Solutions LLC",
            description: "Websites, software, IT support, and growth systems in Turtle Creek, PA",
            url: "https://grovextech.com/portfolio",
            address: {
              "@type": "PostalAddress",
              streetAddress: "124 Grant Street",
              addressLocality: "Turtle Creek",
              addressRegion: "PA",
              postalCode: "15145",
              addressCountry: "US"
            }
          })
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Building Trust Through Results
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Work & Credentials</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Proof that GroveX can help local businesses look sharper, operate better, and build from a stronger foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">What Our Clients Say</h2>
              <p className="text-foreground-secondary">Real reviews from real customers in our community</p>
            </div>

            <div className="relative w-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=124+Grant+Street,+Turtle+Creek,+PA+15145&output=embed"
                width="100%"
                height="500"
                className="border-0 rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GroveX location on Google Maps"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=124+Grant+Street,+Turtle+Creek,+PA+15145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary hover:text-primary-hover transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                  View the location on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 flex items-center justify-center">
            <div className="max-w-md text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">Technical Capability</h2>
              <p className="text-foreground-secondary leading-relaxed">
                GroveX combines web, systems, support, and software experience to help local businesses clean up operations and build a stronger base for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Ready to Build the Next Layer?</h2>
          <p className="text-foreground-secondary mb-8 text-lg max-w-2xl mx-auto">
            Whether you need a better website, cleaner systems, or a more dependable support setup, GroveX is here to help you build the foundation first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover hover:shadow-glow transform hover:scale-105 transition-all duration-300 min-h-[48px]">
              <span>Start the Conversation</span>
            </Link>

            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 min-h-[48px]">
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
