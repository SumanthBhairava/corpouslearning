import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formData = { firstName: '', lastName: '', company: '', email: '', phone: '', password: '', confirmPassword: '' };
  showPass = false;
  showConfirm = false;
  agreedToTerms = false;
  isLoading = false;
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  get passStrength(): number {
    const p = this.formData.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p) && /[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  }

  get passStrengthLabel(): string {
    return ['', 'Weak', 'Medium', 'Strong'][this.passStrength] || '';
  }

  async onRegister() {
    if (this.formData.password !== this.formData.confirmPassword) {
      this.errorMsg = 'Passwords do not match.';
      return;
    }
    if (!this.agreedToTerms) {
      this.errorMsg = 'Please agree to the Terms of Service.';
      return;
    }
    this.errorMsg = '';
    this.isLoading = true;
    try {
      await this.authService.register(this.formData);
      this.router.navigate(['/app/dashboard']);
    } catch {
      this.errorMsg = 'Registration failed. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  registerWithGoogle(): void {
    this.authService.startSocialAuth('google', 'register', this.formData.company);
  }

  registerWithMicrosoft(): void {
    this.authService.startSocialAuth('microsoft', 'register', this.formData.company);
  }
}
