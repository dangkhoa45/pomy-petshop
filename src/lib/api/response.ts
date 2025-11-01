import { NextResponse } from "next/server";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export function apiSuccess<T>(
  data: T,
  message?: string
): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message,
  });
}

export function apiError(
  error: string,
  status: number = 400
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  );
}

export function apiUnauthorized(
  message: string = "Unauthorized"
): NextResponse<ApiResponse> {
  return apiError(message, 401);
}

export function apiForbidden(
  message: string = "Forbidden"
): NextResponse<ApiResponse> {
  return apiError(message, 403);
}

export function apiNotFound(
  message: string = "Not found"
): NextResponse<ApiResponse> {
  return apiError(message, 404);
}

export function apiValidationError(
  message: string = "Validation error"
): NextResponse<ApiResponse> {
  return apiError(message, 422);
}

export function apiServerError(
  message: string = "Internal server error"
): NextResponse<ApiResponse> {
  return apiError(message, 500);
}
