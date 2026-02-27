import { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Target, Users, Award, CheckCircle, Lock } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us - Leading Cybersecurity Experts | Zylax Systems',
  description: 'Learn about Zylax Systems\' mission, values, and team of certified cybersecurity professionals. Discover why organizations trust us to protect their digital assets.',
  keywords: ['cybersecurity experts', 'security professionals', 'CISSP', 'CEH', 'security certifications', 'about Zylax Systems'],
  ogImage: '/images/og-about.jpg',
  ogType: 'website',
  canonical: 'https://zylaxsystems.com/about',
  twitterCard: 'summary_large_image',
})

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative bg-cyber-darker text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cybersecurity website background images (3).jpg"
            alt="About Background"
            fill
            className="object-cover opacity-20"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker/90 via-cyber-dark/85 to-primary-900/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-2">
            ABOUT US
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">About Zylax Systems</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl drop-shadow-lg">
            Protecting organizations from cyber threats with expertise, innovation, and unwavering commitment to security excellence.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="relative py-16 overflow-hidden">
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
              <h2 className="text-3xl font-bold text-white drop-shadow-lg">Company Background</h2>
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
      </section>

      {/* Mission & Values */}
      <section className="relative py-16 overflow-hidden">
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
      </section>

      {/* Team Expertise */}
      <section className="relative py-16 overflow-hidden">
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
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 overflow-hidden">
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
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/displays/robynne-o-HOrhCnQsxnQ-unsplash.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-darker/95 to-cyber-dark/95" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-2xl">Ready to Strengthen Your Security?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Partner with Zylax Systems and experience the difference that expert cybersecurity makes.
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyber-blue text-cyber-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
