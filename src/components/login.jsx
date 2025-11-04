import React, { useState } from 'react';
import { Eye, EyeOff, IceCream, User, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function FreshNFreezeAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
    setSuccessMessage('');
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const response = {
          success: true,
          message: isLogin ? 'Login successful!' : 'Account created successfully!',
          user: {
            name: formData.name || 'User',
            email: formData.email
          }
        };

        setSuccessMessage(response.message);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        setErrors({ submit: 'Something went wrong. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setSuccessMessage('');
  };

  const containerStyle = isLogin ? styles.loginContainer : styles.signupContainer;
  const cardStyle = isLogin ? styles.loginCard : styles.signupCard;
  const iconWrapperStyle = isLogin ? styles.loginIconWrapper : styles.signupIconWrapper;
  const brandStyle = isLogin ? styles.loginBrand : styles.signupBrand;
  const linkStyle = isLogin ? styles.loginLink : styles.signupLink;
  const buttonStyle = isLogin ? styles.loginButton : styles.signupButton;
  const socialButtonStyle = isLogin ? styles.socialButtonLogin : styles.socialButtonSignup;

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .fade-in { animation: fadeIn 0.5s ease-out; }
        .slide-right { animation: slideInRight 0.6s ease-out; }
        .slide-left { animation: slideInLeft 0.6s ease-out; }
        .bounce-animation { animation: bounce 2s ease-in-out infinite; }
        .float-animation { animation: float 3s ease-in-out infinite; }
        
        .input-animate {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input-animate:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .button-animate {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .button-animate::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .button-animate:hover::before {
          width: 300px;
          height: 300px;
        }

        .button-animate:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .button-animate:active {
          transform: translateY(-1px);
        }

        .ice-cream-float {
          position: absolute;
          font-size: 60px;
          opacity: 0.1;
          animation: float 4s ease-in-out infinite;
          pointer-events: none;
        }

        .success-message {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>

      {isLogin ? (
        <>
          <div className="ice-cream-float" style={{ top: '15%', left: '8%', animationDelay: '0s' }}>🍦</div>
          <div className="ice-cream-float" style={{ top: '70%', right: '10%', animationDelay: '1s' }}>🍨</div>
          <div className="ice-cream-float" style={{ bottom: '20%', left: '12%', animationDelay: '2s' }}>🍧</div>
        </>
      ) : (
        <>
          <div className="ice-cream-float" style={{ top: '10%', right: '8%', animationDelay: '0s' }}>🎉</div>
          <div className="ice-cream-float" style={{ top: '60%', left: '10%', animationDelay: '1s' }}>✨</div>
          <div className="ice-cream-float" style={{ bottom: '15%', right: '12%', animationDelay: '2s' }}>🌟</div>
        </>
      )}

      <div className="fade-in" style={cardStyle}>
        <div className="bounce-animation" style={styles.logoSection}>
          <div style={iconWrapperStyle}>
            {isLogin ? (
              <IceCream size={40} style={{ color: 'white' }} />
            ) : (
              <Sparkles size={40} style={{ color: 'white' }} />
            )}
          </div>
          <h1 style={brandStyle}>FreshNFreeze</h1>
          <p style={styles.tagline}>
            {isLogin ? 'Welcome back to sweetness!' : 'Join the sweet revolution!'}
          </p>
        </div>

        {successMessage && (
          <div className="success-message" style={styles.successBanner}>
            {successMessage}
          </div>
        )}

        <div style={styles.formContainer}>
          {!isLogin && (
            <div className="slide-left" style={styles.inputGroup}>
              <label style={styles.label}>
                <User size={16} style={{ marginRight: '8px' }} />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                style={{
                  ...styles.input,
                  ...(errors.name ? styles.inputError : {}),
                }}
                className="input-animate"
              />
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
            </div>
          )}

          <div className={isLogin ? "slide-right" : "slide-left"} style={{ ...styles.inputGroup, animationDelay: '0.1s' }}>
            <label style={styles.label}>
              <Mail size={16} style={{ marginRight: '8px' }} />
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="your@email.com"
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {}),
              }}
              className="input-animate"
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={isLogin ? "slide-right" : "slide-left"} style={{ ...styles.inputGroup, animationDelay: '0.2s' }}>
            <label style={styles.label}>
              <Lock size={16} style={{ marginRight: '8px' }} />
              Password
            </label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="••••••••"
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {}),
                  paddingRight: '45px',
                }}
                className="input-animate"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className="slide-left" style={{ ...styles.inputGroup, animationDelay: '0.3s' }}>
              <label style={styles.label}>
                <Lock size={16} style={{ marginRight: '8px' }} />
                Confirm Password
              </label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="••••••••"
                  style={{
                    ...styles.input,
                    ...(errors.confirmPassword ? styles.inputError : {}),
                    paddingRight: '45px',
                  }}
                  className="input-animate"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeButton}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
            </div>
          )}

          {isLogin && (
            <div style={styles.forgotSection}>
              <a href="#" style={linkStyle}>
                Forgot Password?
              </a>
            </div>
          )}

          {errors.submit && <div style={styles.errorBanner}>{errors.submit}</div>}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            style={buttonStyle}
            className="button-animate"
          >
            {isLoading ? (
              <span style={styles.loadingContent}>
                <span style={styles.spinner}>⚪</span>
                {isLogin ? 'Logging in...' : 'Creating account...'}
              </span>
            ) : (
              <span style={styles.buttonContent}>
                {isLogin ? 'Login Now' : 'Create Account'}
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </span>
            )}
          </button>
        </div>

        <div style={styles.divider}>
          <span style={styles.dividerLine}></span>
          <span style={styles.dividerText}>or continue with</span>
          <span style={styles.dividerLine}></span>
        </div>

        <div style={styles.socialContainer}>
          <button style={socialButtonStyle} className="button-animate">
            <span style={styles.socialText}>G</span>
          </button>
          <button style={socialButtonStyle} className="button-animate">
            <span style={styles.socialText}>f</span>
          </button>
          <button style={socialButtonStyle} className="button-animate">
            <span style={styles.socialText}>in</span>
          </button>
        </div>

        <p style={styles.footer}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <a href="#" onClick={(e) => { e.preventDefault(); switchMode(); }} style={linkStyle}>
            {isLogin ? 'Sign up now' : 'Login here'}
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  signupContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  loginCard: {
    background: 'white',
    borderRadius: '30px',
    padding: '45px',
    width: '100%',
    maxWidth: '460px',
    boxShadow: '0 25px 70px rgba(102, 126, 234, 0.4)',
    position: 'relative',
    zIndex: 1,
  },
  signupCard: {
    background: 'white',
    borderRadius: '30px',
    padding: '45px',
    width: '100%',
    maxWidth: '460px',
    boxShadow: '0 25px 70px rgba(245, 87, 108, 0.4)',
    position: 'relative',
    zIndex: 1,
  },
  logoSection: {
    textAlign: 'center',
    marginBottom: '35px',
  },
  loginIconWrapper: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '50%',
    padding: '18px',
    marginBottom: '16px',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
  },
  signupIconWrapper: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    borderRadius: '50%',
    padding: '18px',
    marginBottom: '16px',
    boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)',
  },
  loginBrand: {
    fontSize: '36px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px 0',
    letterSpacing: '-1px',
  },
  signupBrand: {
    fontSize: '36px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px 0',
    letterSpacing: '-1px',
  },
  tagline: {
    color: '#6b7280',
    fontSize: '15px',
    margin: 0,
    fontWeight: '500',
  },
  successBanner: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '14px 20px',
    borderRadius: '12px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '14px',
  },
  errorBanner: {
    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
    color: 'white',
    padding: '12px 18px',
    borderRadius: '10px',
    marginBottom: '16px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '500',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '15px 18px',
    borderRadius: '14px',
    border: '2px solid #e5e7eb',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontWeight: '500',
  },
  inputError: {
    borderColor: '#ef4444',
    background: '#fef2f2',
  },
  errorText: {
    fontSize: '13px',
    color: '#ef4444',
    fontWeight: '500',
  },
  passwordWrapper: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '8px',
  },
  forgotSection: {
    textAlign: 'right',
    marginTop: '-8px',
  },
  loginLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
  },
  signupLink: {
    color: '#f5576c',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
  },
  loginButton: {
    padding: '17px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
  },
  signupButton: {
    padding: '17px',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 8px 20px rgba(245, 87, 108, 0.3)',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  loadingContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  spinner: {
    display: 'inline-block',
    animation: 'spin 1s linear infinite',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '28px 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: '#e5e7eb',
  },
  dividerText: {
    color: '#9ca3af',
    fontSize: '13px',
    fontWeight: '500',
  },
  socialContainer: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  socialButtonLogin: {
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    border: '2px solid #e5e7eb',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  socialButtonSignup: {
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    border: '2px solid #e5e7eb',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  socialText: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#374151',
  },
  footer: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '500',
  },
};