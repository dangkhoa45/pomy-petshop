/**
 * Common TypeScript types and interfaces
 * Shared across the application for type safety
 */

/**
 * Layout props interface
 * Standard props for Next.js layouts
 */
export interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Page props interface with params
 */
export interface PageProps<T = Record<string, string>> {
  params: T;
  searchParams?: Record<string, string | string[] | undefined>;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationMeta;
}
