import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = { email: '', password: '' };
  showPassword = false;
  rememberMe = false;
  isLoading = false;
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const user = this.route.snapshot.queryParamMap.get('user');
    const error = this.route.snapshot.queryParamMap.get('error');
    if (!token && !user && !error) {
      return;
    }

    const result = this.authService.completeSocialAuth({ token, user, error });
    if (result.ok) {
      this.router.navigate(['/app/dashboard'], { replaceUrl: true });
      return;
    }
    this.errorMsg = result.error || 'Social sign-in failed.';
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: {},
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword(e: Event) {
    e.preventDefault();
    alert('Password reset link sent to your email!');
  }

  async onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMsg = 'Please enter your email and password.';
      return;
    }
    this.errorMsg = '';
    this.isLoading = true;
    try {
      await this.authService.login(this.loginData.email, this.loginData.password);
      this.router.navigate(['/app/dashboard']);
    } catch (err: any) {
      this.errorMsg = 'Invalid email or password. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  loginWithGoogle(): void {
    this.authService.startSocialAuth('google', 'login');
  }

  loginWithMicrosoft(): void {
    this.authService.startSocialAuth('microsoft', 'login');
  }
}
