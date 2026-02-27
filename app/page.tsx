import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Target, Users, Award, CheckCircle, Lock } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturesSection from '@/components/home/FeaturesSection';
import ServiceShowcase from '@/components/home/ServiceShowcase';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';
import TrustIndicators from '@/components/home/TrustIndicators';
import ContactForm from '@/components/contact/ContactForm';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Zylax Systems - Cybersecurity Services',
  description: 'We provide comprehensive cybersecurity solutions designed to protect businesses from digital threats, data breaches, and system downtime.',
  keywords: ['cybersecurity', 'network security', 'data protection', 'endpoint security', 'CCTV systems', 'alarm systems', 'security services'],
  ogImage: '/images/og-home.jpg',
  ogType: 'website',
  canonical: 'https://zylaxsystems.com',
  twitterCard: 'summary_large_image',
});

export default function Home() {
  const companyInfo = {
    email: 'zylaxit@gmail.com',
    phone: '+266 2231 5730',
    whatsapp: '+266 6309 0922',
    address: 'Maseru, Lesotho',
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <HeroSection
          title="Protect Your Digital Assets"
          subtitle="We provide comprehensive cybersecurity solutions designed to protect businesses from digital threats, data breaches, and system downtime."
          ctaText="Get Started"
          ctaLink="#contact"
        />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesOverview />
        <FeaturesSection />
        <ServiceShowcase />
        <StatsSection />
        <TrustIndicators />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        {/* Company Background */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cybersecurity website background images.jpg"
              alt="Company Background"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">About Zylax Systems</h2>
              </div>
              <div className="prose prose-lg max-w-none text-white space-y-4">
                <p className="drop-shadow-md">
                  Founded in 2015, Zylax Systems emerged from a vision to provide enterprise-grade cybersecurity services to organizations of all sizes. Our founders, veterans of the information security industry with combined experience spanning over 50 years, recognized the growing gap between evolving cyber threats and the ability of businesses to defend against them.
                </p>
                <p className="drop-shadow-md">
                  What started as a small team of passionate security professionals has grown into a trusted cybersecurity partner serving clients across healthcare, finance, technology, and government sectors. We&apos;ve successfully protected over 500 organizations from cyber threats, prevented countless security incidents, and helped our clients achieve compliance with industry standards.
                </p>
                <p className="drop-shadow-md">
                  Today, Zylax Systems stands at the forefront of cybersecurity innovation, combining cutting-edge technology with human expertise to deliver comprehensive security solutions. Our track record speaks for itself: zero successful breaches among our managed security clients, 99.9% threat detection rate, and an average incident response time of under 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/displays/keepcoding-lVF2HLzjopw-unsplash.jpg"
              alt="Mission Background"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-white drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">Mission & Values</h2>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">Our Mission</h3>
                <p className="text-lg text-gray-100 leading-relaxed drop-shadow-md">
                  To empower organizations with robust cybersecurity solutions that protect their digital assets, ensure business continuity, and build trust with their stakeholders. We strive to make advanced security accessible, understandable, and effective for every client we serve.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 drop-shadow-lg">Our Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyber-blue/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Integrity First</h4>
                        <p className="text-gray-300">
                          We operate with complete transparency and honesty, never compromising on ethical standards in our security practices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyber-blue/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Excellence in Execution</h4>
                        <p className="text-gray-300">
                          We deliver exceptional results through meticulous attention to detail and continuous improvement of our methodologies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyber-blue/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Client-Centric Approach</h4>
                        <p className="text-gray-300">
                          Your security is our priority. We tailor our solutions to your unique needs and maintain responsive, proactive communication.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyber-blue/30">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Innovation & Adaptation</h4>
                        <p className="text-gray-300">
                          We stay ahead of emerging threats through continuous learning, research, and adoption of cutting-edge security technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Expertise */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cybersecurity website background images (1).jpg"
              alt="Team Background"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-white drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">Team Expertise</h2>
              </div>
              
              <p className="text-lg text-gray-100 mb-8 drop-shadow-md">
                Our team comprises elite cybersecurity professionals with diverse backgrounds in offensive security, defensive operations, compliance, and risk management. We maintain the highest industry certifications and continuously expand our expertise.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                  <div className="text-4xl font-bold text-cyber-blue mb-2">50+</div>
                  <div className="text-gray-200 font-medium">Security Professionals</div>
                </div>
                <div className="text-center p-6 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                  <div className="text-4xl font-bold text-cyber-blue mb-2">150+</div>
                  <div className="text-gray-200 font-medium">Years Combined Experience</div>
                </div>
                <div className="text-center p-6 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                  <div className="text-4xl font-bold text-cyber-blue mb-2">24/7</div>
                  <div className="text-gray-200 font-medium">Security Operations</div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 drop-shadow-lg">Team Certifications & Credentials</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">CISSP</div>
                      <div className="text-sm text-gray-300">Certified Information Systems Security Professional</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">CEH</div>
                      <div className="text-sm text-gray-300">Certified Ethical Hacker</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">OSCP</div>
                      <div className="text-sm text-gray-300">Offensive Security Certified Professional</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">CISM</div>
                      <div className="text-sm text-gray-300">Certified Information Security Manager</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">GIAC</div>
                      <div className="text-sm text-gray-300">Global Information Assurance Certification</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyber-dark/80 backdrop-blur-sm rounded-lg border border-cyber-blue/30">
                    <Award className="w-6 h-6 text-cyber-blue flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">CRISC</div>
                      <div className="text-sm text-gray-300">Certified in Risk and Information Systems Control</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cybersecurity website background images (2).jpg"
              alt="Why Choose Us Background"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-white drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">Why Choose Zylax Systems</h2>
              </div>
              
              <p className="text-lg text-gray-100 mb-8 drop-shadow-md">
                In a crowded cybersecurity market, Zylax Systems stands apart through our unique combination of technical excellence, industry experience, and client dedication.
              </p>

              <div className="space-y-6">
                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Proactive Threat Intelligence</h3>
                  <p className="text-gray-200">
                    We don&apos;t just react to threats—we anticipate them. Our threat intelligence team monitors global cyber threat landscapes, ensuring you&apos;re protected against emerging attack vectors before they reach your infrastructure.
                  </p>
                </div>

                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Industry-Specific Expertise</h3>
                  <p className="text-gray-200">
                    With deep experience across healthcare (HIPAA), finance (PCI-DSS), and government (FedRAMP) sectors, we understand the unique compliance requirements and threat profiles of your industry. Our solutions are tailored, not templated.
                  </p>
                </div>

                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Rapid Incident Response</h3>
                  <p className="text-gray-200">
                    When seconds count, our 24/7 Security Operations Center responds in under 15 minutes. Our incident response team has successfully contained and remediated breaches for organizations worldwide, minimizing damage and downtime.
                  </p>
                </div>

                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparent Communication</h3>
                  <p className="text-gray-200">
                    Security shouldn&apos;t be a black box. We provide clear, jargon-free reporting and maintain open communication channels. You&apos;ll always understand your security posture, risks, and the actions we&apos;re taking to protect you.
                  </p>
                </div>

                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Proven Track Record</h3>
                  <p className="text-gray-200">
                    Our results speak for themselves: 500+ protected organizations, zero breaches among managed clients, 99.9% threat detection rate, and a 98% client retention rate. We don&apos;t just promise security—we deliver it.
                  </p>
                </div>

                <div className="bg-cyber-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-cyber-blue">
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Innovation</h3>
                  <p className="text-gray-200">
                    Cyber threats evolve daily, and so do we. We invest heavily in research and development, maintain partnerships with leading security vendors, and continuously update our methodologies to stay ahead of adversaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/displays/luis-villasmil-S2qA7JhjI6Y-unsplash.jpg"
              alt="Contact Form Background"
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="text-center mb-12">
              <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-2 drop-shadow-lg">
                GET IN TOUCH
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                Contact Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
                Have questions about our cybersecurity services? Our team of experts is here to help. 
                Reach out to discuss how we can protect your organization.
              </p>
            </div>

            {/* Two-column layout: Contact Form and Company Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form Section */}
              <div className="bg-cyber-dark/90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 border border-cyber-blue/30">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>

              {/* Company Contact Information Section */}
              <div className="space-y-8">
                {/* Contact Details Card */}
                <div className="bg-cyber-dark/90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 border border-cyber-blue/30">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-cyber-blue"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white">Email</h4>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="mt-1 text-base text-cyber-blue hover:text-primary-400 transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-cyber-blue"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white">Phone</h4>
                        <a
                          href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                          className="mt-1 text-base text-cyber-blue hover:text-primary-400 transition-colors"
                        >
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-cyber-blue"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white">WhatsApp</h4>
                        <a
                          href={`https://wa.me/${companyInfo.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-base text-cyber-blue hover:text-primary-400 transition-colors"
                        >
                          {companyInfo.whatsapp}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-cyber-blue"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white">Office</h4>
                        <p className="mt-1 text-base text-gray-300">
                          {companyInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-cyber-dark/90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 border border-cyber-blue/30">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-gray-400">
                    * Emergency security incidents are handled 24/7. Call our emergency hotline for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
