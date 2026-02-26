import { Metadata } from 'next'
import { Shield, Target, Users, Award, CheckCircle, Lock } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us - Leading Cybersecurity Experts | SecureGuard',
  description: 'Learn about SecureGuard\'s mission, values, and team of certified cybersecurity professionals. Discover why organizations trust us to protect their digital assets.',
  keywords: ['cybersecurity experts', 'security professionals', 'CISSP', 'CEH', 'security certifications', 'about SecureGuard'],
  ogImage: '/images/og-about.jpg',
  ogType: 'website',
  canonical: 'https://secureguard.com/about',
  twitterCard: 'summary_large_image',
})

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SecureGuard</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Protecting organizations from cyber threats with expertise, innovation, and unwavering commitment to security excellence.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Company Background</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Founded in 2015, SecureGuard emerged from a vision to provide enterprise-grade cybersecurity services to organizations of all sizes. Our founders, veterans of the information security industry with combined experience spanning over 50 years, recognized the growing gap between evolving cyber threats and the ability of businesses to defend against them.
              </p>
              <p>
                What started as a small team of passionate security professionals has grown into a trusted cybersecurity partner serving clients across healthcare, finance, technology, and government sectors. We&apos;ve successfully protected over 500 organizations from cyber threats, prevented countless security incidents, and helped our clients achieve compliance with industry standards.
              </p>
              <p>
                Today, SecureGuard stands at the forefront of cybersecurity innovation, combining cutting-edge technology with human expertise to deliver comprehensive security solutions. Our track record speaks for itself: zero successful breaches among our managed security clients, 99.9% threat detection rate, and an average incident response time of under 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Mission & Values</h2>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower organizations with robust cybersecurity solutions that protect their digital assets, ensure business continuity, and build trust with their stakeholders. We strive to make advanced security accessible, understandable, and effective for every client we serve.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Integrity First</h4>
                      <p className="text-gray-600">
                        We operate with complete transparency and honesty, never compromising on ethical standards in our security practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Excellence in Execution</h4>
                      <p className="text-gray-600">
                        We deliver exceptional results through meticulous attention to detail and continuous improvement of our methodologies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Client-Centric Approach</h4>
                      <p className="text-gray-600">
                        Your security is our priority. We tailor our solutions to your unique needs and maintain responsive, proactive communication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Innovation & Adaptation</h4>
                      <p className="text-gray-600">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Team Expertise</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              Our team comprises elite cybersecurity professionals with diverse backgrounds in offensive security, defensive operations, compliance, and risk management. We maintain the highest industry certifications and continuously expand our expertise.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Security Professionals</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-700 font-medium">Years Combined Experience</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Security Operations</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Team Certifications & Credentials</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">CISSP</div>
                    <div className="text-sm text-gray-600">Certified Information Systems Security Professional</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">CEH</div>
                    <div className="text-sm text-gray-600">Certified Ethical Hacker</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">OSCP</div>
                    <div className="text-sm text-gray-600">Offensive Security Certified Professional</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">CISM</div>
                    <div className="text-sm text-gray-600">Certified Information Security Manager</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">GIAC</div>
                    <div className="text-sm text-gray-600">Global Information Assurance Certification</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">CRISC</div>
                    <div className="text-sm text-gray-600">Certified in Risk and Information Systems Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Why Choose SecureGuard</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              In a crowded cybersecurity market, SecureGuard stands apart through our unique combination of technical excellence, industry experience, and client dedication.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Threat Intelligence</h3>
                <p className="text-gray-700">
                  We don&apos;t just react to threats—we anticipate them. Our threat intelligence team monitors global cyber threat landscapes, ensuring you&apos;re protected against emerging attack vectors before they reach your infrastructure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry-Specific Expertise</h3>
                <p className="text-gray-700">
                  With deep experience across healthcare (HIPAA), finance (PCI-DSS), and government (FedRAMP) sectors, we understand the unique compliance requirements and threat profiles of your industry. Our solutions are tailored, not templated.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Incident Response</h3>
                <p className="text-gray-700">
                  When seconds count, our 24/7 Security Operations Center responds in under 15 minutes. Our incident response team has successfully contained and remediated breaches for organizations worldwide, minimizing damage and downtime.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Communication</h3>
                <p className="text-gray-700">
                  Security shouldn&apos;t be a black box. We provide clear, jargon-free reporting and maintain open communication channels. You&apos;ll always understand your security posture, risks, and the actions we&apos;re taking to protect you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-700">
                  Our results speak for themselves: 500+ protected organizations, zero breaches among managed clients, 99.9% threat detection rate, and a 98% client retention rate. We don&apos;t just promise security—we deliver it.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
                <p className="text-gray-700">
                  Cyber threats evolve daily, and so do we. We invest heavily in research and development, maintain partnerships with leading security vendors, and continuously update our methodologies to stay ahead of adversaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Security?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with SecureGuard and experience the difference that expert cybersecurity makes.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
