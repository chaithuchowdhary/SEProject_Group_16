import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { Login } from 'src/app/Model/Login';
import { UserRegistration } from 'src/app/Model/UserRegistration';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to login user', () => {
    const dummyLogin: Login = {
      username: 'testuser',
      password: 'testpassword'
    };
    
    const dummyResponse: UserRegistration = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      isActive: true,
      username: 'testuser',
      password: 'hashedpassword',
      lastLogin: '2024-05-02T12:00:00Z'
    };

    service.UserLogin(dummyLogin).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:43501/api/Users/login');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyLogin);
    
    req.flush(dummyResponse);
  });
});
