import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: '1',
    slug: 'network-security',
    title: 'Network Security',
    description: 'Comprehensive network protection with firewall management and intrusion detection systems.',
    fullDescription: 'Our network security services provide robust protection for your business infrastructure. We offer firewall configuration and management, secure network design and monitoring, and advanced intrusion detection & prevention systems (IDS/IPS). Our expert team ensures your network remains secure against evolving cyber threats while maintaining optimal performance.',
    icon: 'shield-check',
    benefits: [
      'Firewall configuration and management',
      'Secure network design and monitoring',
      'Intrusion detection & prevention systems (IDS/IPS)',
      'Real-time threat monitoring and response',
      'Network segmentation and access control'
    ],
    useCases: [
      'Enterprise network protection',
      'Remote workforce security',
      'Multi-site network management',
      'Cloud infrastructure security',
      'IoT device network isolation'
    ],
    category: 'Security'
  },
  {
    id: '2',
    slug: 'data-protection',
    title: 'Data Protection',
    description: 'Secure your sensitive data with encryption and reliable backup solutions.',
    fullDescription: 'Protect your organization\'s most valuable asset - your data. Our data protection services include data encryption (at rest and in transit), secure backups and disaster recovery solutions, and comprehensive data loss prevention strategies. We ensure your critical business data remains confidential, available, and recoverable.',
    icon: 'database',
    benefits: [
      'Data encryption at rest and in transit',
      'Secure backups and disaster recovery solutions',
      'Data loss prevention (DLP) implementation',
      'Compliance with data protection regulations',
      'Automated backup monitoring and testing'
    ],
    useCases: [
      'Financial data protection',
      'Healthcare records security (HIPAA)',
      'Customer data privacy (GDPR)',
      'Intellectual property protection',
      'Business continuity planning'
    ],
    category: 'Protection'
  },
  {
    id: '3',
    slug: 'endpoint-security',
    title: 'Endpoint Security',
    description: 'Protect all devices with antivirus, anti-malware, and comprehensive device management.',
    fullDescription: 'Secure every endpoint in your organization with our comprehensive endpoint security solutions. We provide antivirus and anti-malware protection, device management for computers, servers, and mobile devices, and endpoint detection and response (EDR) capabilities. Keep your workforce protected whether they\'re in the office or working remotely.',
    icon: 'laptop',
    benefits: [
      'Antivirus and anti-malware protection',
      'Device management for computers, servers, and mobile devices',
      'Endpoint detection and response (EDR)',
      'Mobile device management (MDM)',
      'Application whitelisting and control'
    ],
    useCases: [
      'Remote workforce protection',
      'BYOD (Bring Your Own Device) security',
      'Server and workstation hardening',
      'Mobile device security',
      'Ransomware prevention'
    ],
    category: 'Security'
  },
  {
    id: '4',
    slug: 'risk-assessment',
    title: 'Risk Assessment & Compliance',
    description: 'Identify vulnerabilities and ensure compliance with security standards.',
    fullDescription: 'Understand and mitigate your security risks with our comprehensive assessment services. We conduct cybersecurity risk assessments, vulnerability scanning and penetration testing, and provide compliance support for ISO, GDPR, HIPAA, and other standards. Our detailed reports help you prioritize security investments and meet regulatory requirements.',
    icon: 'clipboard-check',
    benefits: [
      'Cybersecurity risk assessments',
      'Vulnerability scanning and penetration testing',
      'Compliance support (ISO, GDPR, HIPAA, etc.)',
      'Security policy development',
      'Third-party risk management'
    ],
    useCases: [
      'Annual security audits',
      'Pre-deployment security validation',
      'Regulatory compliance verification',
      'Vendor security assessments',
      'Security program maturity evaluation'
    ],
    category: 'Assessment'
  },
  {
    id: '5',
    slug: 'monitoring-incident-response',
    title: 'Monitoring & Incident Response',
    description: '24/7 security monitoring with rapid threat detection and incident response.',
    fullDescription: 'Stay protected around the clock with our security monitoring and incident response services. We provide 24/7 security monitoring, real-time threat detection and alerts, and comprehensive incident response and recovery support. When security incidents occur, our expert team responds quickly to contain threats and minimize damage.',
    icon: 'alert-triangle',
    benefits: [
      '24/7 security monitoring',
      'Threat detection and real-time alerts',
      'Incident response and recovery support',
      'Security event correlation and analysis',
      'Post-incident forensics and reporting'
    ],
    useCases: [
      'Continuous security operations',
      'Data breach response',
      'Ransomware attack containment',
      'Insider threat detection',
      'Advanced persistent threat (APT) hunting'
    ],
    category: 'Response'
  },
  {
    id: '6',
    slug: 'cctv-systems',
    title: 'CCTV Systems',
    description: 'Professional video surveillance solutions for enhanced physical security.',
    fullDescription: 'Enhance your physical security with our comprehensive CCTV solutions. We provide indoor and outdoor camera installation, support for IP cameras, analog cameras, and wireless systems, and customized layouts based on site assessment. Our video surveillance solutions integrate seamlessly with your overall security strategy.',
    icon: 'video',
    benefits: [
      'Indoor and outdoor camera installation',
      'IP cameras, analog cameras, and wireless systems',
      'Customized layouts based on site assessment',
      'Remote viewing and monitoring capabilities',
      'High-definition recording and storage'
    ],
    useCases: [
      'Retail store security',
      'Office building surveillance',
      'Warehouse monitoring',
      'Parking lot security',
      'Perimeter protection'
    ],
    category: 'Physical Security'
  },
  {
    id: '7',
    slug: 'alarm-systems',
    title: 'Alarm Systems',
    description: 'Fast and reliable security and safety alarm solutions for your premises.',
    fullDescription: 'Protect your premises with our advanced alarm systems. We provide fast alerts for unauthorized access, customized solutions for businesses and homes, and professional installation with ongoing support. Our alarm systems integrate with your existing security infrastructure for comprehensive protection.',
    icon: 'bell',
    benefits: [
      'Fast alerts for unauthorized access',
      'Customized solutions for businesses and homes',
      'Professional installation and ongoing support',
      'Integration with access control systems',
      '24/7 monitoring and response services'
    ],
    useCases: [
      'Business premises protection',
      'Residential security',
      'After-hours intrusion detection',
      'Emergency evacuation alerts',
      'Fire and smoke detection'
    ],
    category: 'Physical Security'
  }
];

/**
 * Get all available services
 * @returns Array of all services
 */
export function getAllServices(): Service[] {
  return services;
}

/**
 * Get a specific service by its slug
 * @param slug - The URL-friendly identifier for the service
 * @returns The service object if found, undefined otherwise
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}
