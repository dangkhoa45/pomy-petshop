# API Documentation - Pomy Petshop

## Overview
Tài liệu này mô tả các API endpoints, data models, và integration patterns được sử dụng trong dự án Pomy Petshop.

*Lưu ý: Hiện tại dự án chỉ là frontend static. Tài liệu này mô tả các API sẽ được implement trong tương lai.*

## Planned API Architecture

### Base URL
```
Production: https://api.pomypetshopsoctrang.com
Development: http://localhost:3001/api
```

### Authentication
```typescript
// JWT Token based authentication
interface AuthToken {
  token: string;
  expiresIn: number;
  refreshToken: string;
}

// API Headers
{
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
```

## Data Models

### User Model
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  address?: string;
  avatar?: string;
  role: 'customer' | 'admin' | 'staff';
  createdAt: Date;
  updatedAt: Date;
}
```

### Pet Model
```typescript
interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  age: number;
  weight: number;
  color: string;
  gender: 'male' | 'female';
  ownerId: string;
  medicalHistory: MedicalRecord[];
  photos: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Service Model
```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  category: 'grooming' | 'hotel' | 'spa' | 'medical' | 'training';
  price: number;
  duration: number; // in minutes
  image: string;
  isActive: boolean;
  requirements?: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Booking Model
```typescript
interface Booking {
  id: string;
  customerId: string;
  petId: string;
  serviceId: string;
  appointmentDate: Date;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentMethod?: 'cash' | 'card' | 'online';
  createdAt: Date;
  updatedAt: Date;
}
```

### Medical Record Model
```typescript
interface MedicalRecord {
  id: string;
  petId: string;
  type: 'vaccination' | 'checkup' | 'treatment' | 'emergency';
  date: Date;
  description: string;
  medications?: string[];
  nextAppointment?: Date;
  veterinarian: string;
  cost?: number;
  attachments?: string[];
  createdAt: Date;
}
```

## API Endpoints

### Authentication Endpoints

#### POST /auth/register
```typescript
// Request
interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Response
interface RegisterResponse {
  success: boolean;
  user: User;
  token: AuthToken;
}
```

#### POST /auth/login
```typescript
// Request
interface LoginRequest {
  email: string;
  password: string;
}

// Response
interface LoginResponse {
  success: boolean;
  user: User;
  token: AuthToken;
}
```

#### POST /auth/refresh
```typescript
// Request
interface RefreshRequest {
  refreshToken: string;
}

// Response
interface RefreshResponse {
  success: boolean;
  token: AuthToken;
}
```

### User Endpoints

#### GET /users/profile
```typescript
// Headers: Authorization required
// Response
interface ProfileResponse {
  success: boolean;
  user: User;
}
```

#### PUT /users/profile
```typescript
// Request
interface UpdateProfileRequest {
  name?: string;
  phone?: string;
  address?: string;
  avatar?: string;
}

// Response
interface UpdateProfileResponse {
  success: boolean;
  user: User;
}
```

### Pet Endpoints

#### GET /pets
```typescript
// Headers: Authorization required
// Query parameters
interface PetQuery {
  page?: number;
  limit?: number;
  type?: string;
}

// Response
interface PetsResponse {
  success: boolean;
  pets: Pet[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

#### POST /pets
```typescript
// Request
interface CreatePetRequest {
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  age: number;
  weight: number;
  color: string;
  gender: 'male' | 'female';
  photos?: string[];
  notes?: string;
}

// Response
interface CreatePetResponse {
  success: boolean;
  pet: Pet;
}
```

#### GET /pets/:id
```typescript
// Response
interface PetDetailResponse {
  success: boolean;
  pet: Pet;
}
```

#### PUT /pets/:id
```typescript
// Request
interface UpdatePetRequest {
  name?: string;
  type?: 'dog' | 'cat' | 'bird' | 'other';
  breed?: string;
  age?: number;
  weight?: number;
  color?: string;
  gender?: 'male' | 'female';
  photos?: string[];
  notes?: string;
}

// Response
interface UpdatePetResponse {
  success: boolean;
  pet: Pet;
}
```

### Service Endpoints

#### GET /services
```typescript
// Query parameters
interface ServiceQuery {
  category?: string;
  active?: boolean;
  page?: number;
  limit?: number;
}

// Response
interface ServicesResponse {
  success: boolean;
  services: Service[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

#### GET /services/:id
```typescript
// Response
interface ServiceDetailResponse {
  success: boolean;
  service: Service;
}
```

### Booking Endpoints

#### GET /bookings
```typescript
// Headers: Authorization required
// Query parameters
interface BookingQuery {
  status?: string;
  date?: string;
  page?: number;
  limit?: number;
}

// Response
interface BookingsResponse {
  success: boolean;
  bookings: Booking[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

#### POST /bookings
```typescript
// Request
interface CreateBookingRequest {
  petId: string;
  serviceId: string;
  appointmentDate: string; // ISO date string
  notes?: string;
}

// Response
interface CreateBookingResponse {
  success: boolean;
  booking: Booking;
}
```

#### GET /bookings/:id
```typescript
// Response
interface BookingDetailResponse {
  success: boolean;
  booking: Booking;
  pet: Pet;
  service: Service;
  customer: User;
}
```

#### PUT /bookings/:id
```typescript
// Request
interface UpdateBookingRequest {
  appointmentDate?: string;
  status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
}

// Response
interface UpdateBookingResponse {
  success: boolean;
  booking: Booking;
}
```

#### DELETE /bookings/:id
```typescript
// Response
interface CancelBookingResponse {
  success: boolean;
  message: string;
}
```

### Medical Record Endpoints

#### GET /pets/:petId/medical-records
```typescript
// Response
interface MedicalRecordsResponse {
  success: boolean;
  records: MedicalRecord[];
}
```

#### POST /pets/:petId/medical-records
```typescript
// Request
interface CreateMedicalRecordRequest {
  type: 'vaccination' | 'checkup' | 'treatment' | 'emergency';
  date: string;
  description: string;
  medications?: string[];
  nextAppointment?: string;
  veterinarian: string;
  cost?: number;
  attachments?: string[];
}

// Response
interface CreateMedicalRecordResponse {
  success: boolean;
  record: MedicalRecord;
}
```

### Contact Endpoints

#### POST /contact
```typescript
// Request (hiện tại được handle ở frontend)
interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Response
interface ContactResponse {
  success: boolean;
  message: string;
}
```

### File Upload Endpoints

#### POST /upload/image
```typescript
// Request: FormData with file
// Response
interface UploadResponse {
  success: boolean;
  url: string;
  filename: string;
}
```

## Error Handling

### Error Response Format
```typescript
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}
```

### HTTP Status Codes
```typescript
// Success
200: OK
201: Created
204: No Content

// Client Errors
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
422: Unprocessable Entity

// Server Errors
500: Internal Server Error
502: Bad Gateway
503: Service Unavailable
```

### Common Error Codes
```typescript
enum ErrorCodes {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  DUPLICATE_ENTRY = 'DUPLICATE_ENTRY',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  BOOKING_CONFLICT = 'BOOKING_CONFLICT',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE'
}
```

## API Client Implementation

### Base API Client
```typescript
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ApiError(error.error.code, error.error.message);
    }

    return response.json();
  }

  // CRUD methods
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint);
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}
```

### Service Classes
```typescript
class BookingService {
  constructor(private apiClient: ApiClient) {}

  async getBookings(query?: BookingQuery): Promise<BookingsResponse> {
    const params = new URLSearchParams(query as any);
    return this.apiClient.get(`/bookings?${params}`);
  }

  async createBooking(data: CreateBookingRequest): Promise<CreateBookingResponse> {
    return this.apiClient.post('/bookings', data);
  }

  async updateBooking(id: string, data: UpdateBookingRequest): Promise<UpdateBookingResponse> {
    return this.apiClient.put(`/bookings/${id}`, data);
  }

  async cancelBooking(id: string): Promise<CancelBookingResponse> {
    return this.apiClient.delete(`/bookings/${id}`);
  }
}
```

## Integration with Frontend

### React Query Integration
```typescript
// Custom hooks for data fetching
export const useBookings = (query?: BookingQuery) => {
  return useQuery({
    queryKey: ['bookings', query],
    queryFn: () => bookingService.getBookings(query),
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: bookingService.createBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings']);
    },
  });
};
```

### Context Providers
```typescript
interface ApiContextType {
  apiClient: ApiClient;
  user: User | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const ApiContext = createContext<ApiContextType | null>(null);

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within ApiProvider');
  }
  return context;
};
```

## Testing

### API Testing
```typescript
// Mock API responses for testing
export const mockApiClient = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

// Test example
describe('BookingService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create booking successfully', async () => {
    const mockBooking = { id: '1', status: 'pending' };
    mockApiClient.post.mockResolvedValue({ success: true, booking: mockBooking });

    const service = new BookingService(mockApiClient);
    const result = await service.createBooking({
      petId: '1',
      serviceId: '1',
      appointmentDate: '2025-01-15T10:00:00Z',
    });

    expect(result.success).toBe(true);
    expect(result.booking.id).toBe('1');
  });
});
```

## Security Considerations

### Authentication
- JWT tokens với short expiration times
- Refresh token rotation
- Secure HTTP-only cookies cho refresh tokens

### Authorization
- Role-based access control (RBAC)
- Resource-level permissions
- API rate limiting

### Data Validation
- Input sanitization
- Schema validation
- File upload restrictions

### API Security
```typescript
// Middleware example
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Token required' }
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as User;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: { code: 'TOKEN_EXPIRED', message: 'Token invalid or expired' }
    });
  }
};
```

## Performance Optimization

### Caching Strategy
```typescript
// Redis caching for frequently accessed data
const getCachedServices = async (): Promise<Service[]> => {
  const cached = await redis.get('services:active');
  if (cached) {
    return JSON.parse(cached);
  }

  const services = await db.services.findMany({ where: { isActive: true } });
  await redis.setex('services:active', 300, JSON.stringify(services)); // 5 minutes
  return services;
};
```

### Database Optimization
- Proper indexing
- Query optimization
- Connection pooling
- Read replicas for scaling

### API Response Optimization
- Pagination for large datasets
- Field selection (GraphQL-style)
- Compression
- CDN for static assets
