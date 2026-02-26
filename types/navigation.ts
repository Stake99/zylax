/**
 * Navigation type definitions
 */

export interface NavigationItem {
  label: string;           // Display text
  href: string;            // Link destination
  external?: boolean;      // Opens in new tab if true
  children?: NavigationItem[]; // Nested navigation items
}
