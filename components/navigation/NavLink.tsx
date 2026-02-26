'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }
        ${className}
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
