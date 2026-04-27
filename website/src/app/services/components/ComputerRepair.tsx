import OptimizedImage from "@/components/OptimizedImage";

export default function ComputerRepair() {
  return (
    <section id="home-support" className="py-16 scroll-mt-24">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Repair & Support When Something Critical Breaks</h2>
          <p className="text-foreground-secondary mb-6">
            GroveX still offers practical repair and troubleshooting, but as a supporting service—not the core identity of the brand. This lane is best for business-critical device issues, office tech problems, and selective local support when something needs to be fixed fast.
          </p>

          <div className="bg-background-secondary border-l-4 border-primary p-4 rounded-lg mb-6 shadow-sm">
            <p className="text-sm font-medium text-foreground">
              <strong className="text-primary">Upfront Diagnostic Review</strong> - We assess the issue first, scope the best next step, and give clear pricing before work begins.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Repair & Continuity Services</h3>
            <div className="bg-background border border-border p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Business Device Repair:</strong> Laptops, desktops, and workstations that need to get back online quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Wi-Fi & Network Troubleshooting:</strong> Resolve connectivity issues that interrupt day-to-day operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Data Backup & Recovery:</strong> Protect business files, documents, and operational data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Software Cleanup & Updates:</strong> Restore performance, remove malware, and stabilize the machine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Email & Account Access Help:</strong> Get locked-out or misconfigured systems working again</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0 font-bold">✓</span>
                  <span className="text-foreground"><strong>Selective Local Repair Support:</strong> Available for nearby residents when the fit is right, but not the primary growth focus</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-background-secondary border border-border p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary mb-2">On-Site Support</h4>
              <p className="text-sm text-foreground">
                Available for Turtle Creek, Wilmerding, Monroeville, and the Mon Valley when business continuity or local support needs make an on-site visit the right call.
              </p>
            </div>
            <div className="bg-background-secondary border-l-4 border-amber-500 dark:border-amber-400 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Priority Response</h4>
              <p className="text-sm text-foreground-secondary">
                If a key business system is down, we can prioritize fast troubleshooting and recovery work.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 p-5 rounded-lg mb-6 shadow-sm">
            <h4 className="font-semibold text-primary mb-2">Important Positioning Note</h4>
            <p className="text-sm text-foreground mb-3">
              Repair is available, but GroveX is intentionally business-first. The bigger goal is helping owners build stronger systems so emergencies happen less often and growth efforts perform better.
            </p>
            <p className="text-xs text-foreground-secondary italic">
              That means support is part of the offering, but not the headline identity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact?service=home-support"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Book Support
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:info@grovextech.com?subject=Repair%20and%20support%20request"
              className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Email Our Team
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-background-secondary dark:bg-background p-4 rounded-xl relative overflow-hidden border border-border">
            <div className="absolute top-4 right-4 w-6 h-6 bg-primary/20 rounded-sm animate-pulse transform rotate-12">
              <div className="w-full h-1 bg-primary/40 mt-1"></div>
              <div className="w-3/4 h-1 bg-primary/30 mt-1"></div>
            </div>
            <div className="absolute bottom-6 left-6 w-8 h-6 bg-primary/15 rounded animate-bounce [animation-delay:1s] [animation-duration:3s]">
              <div className="w-full h-2 bg-primary/30 rounded-t"></div>
              <div className="w-full h-2 bg-primary/20 mt-1"></div>
            </div>
            <div className="absolute top-1/2 right-8 w-5 h-5 bg-primary/25 rounded-full animate-ping [animation-delay:2s] border-2 border-primary/20">
              <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
            </div>
            <OptimizedImage
              src="/computer_repair.png"
              alt="Repair and support services for business devices and critical local tech issues"
              width={600}
              height={400}
              className="rounded-lg w-full h-64 md:h-80 object-contain relative z-10"
              priority={false}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
