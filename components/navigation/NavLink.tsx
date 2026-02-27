'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const pathname = usePathname()
  
  // Check if it's an anchor link
  const isAnchor = href.startsWith('#')
  
  // For anchor links, check if we're on the home page
  const isActive = isAnchor 
    ? pathname === '/' && typeof window !== 'undefined' && window.location.hash === href
    : pathname === href || (href !== '/' && pathname.startsWith(href))

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault()
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update URL hash without jumping
        window.history.pushState(null, '', href)
      }
    }
    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
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
