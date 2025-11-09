import React, { useState, useEffect } from 'react';
import './franchise.css'; // Link to the CSS file

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    age: '',
    occupation: '',
    hearAboutUs: '',
    storeAddress: '',
    pinCode: '',
    city: '',
    state: '',
    investment: '',
    fundingSource: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('outlets');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const states = ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Gujarat", "Other"];
  const genders = ["Male", "Female"];
  const investmentOptions = [
    '₹5 Lacs - ₹10 Lacs',
    '₹10 Lacs - ₹20 Lacs (Example)',
    '₹20 Lacs - ₹50 Lacs',
    '₹50 Lacs +'
  ];

  const AnimatedImage = ({ src, alt, description }) => (
    <div className="card h-100 image-card shadow-sm border-danger-subtle">
      <img src={src} alt={alt} className="card-img-top custom-image" />
      <div className="card-img-overlay d-flex align-items-center justify-content-center text-overlay">
        <p className="text-white text-center fw-semibold fs-5">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-vh-100 p-4 p-md-5 custom-bg-light">
      <div className="container-fluid px-0" style={{ maxWidth: '1200px', margin: 'auto' }}>

        {/* Animated Banner */}
        <section 
          className={`position-relative custom-banner mb-5 rounded-3 shadow-lg 
          ${isMounted ? 'mount-in-animation' : 'mount-out-animation'}`}
        ></section>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bolder pb-2 text-primary-custom d-inline-block">
            Partner with FreshnFreeze
          </h1>
          <p className="text-secondary mt-2 fs-5">
            Join our growing family and bring the joy of premium ice cream to your city!
          </p>
        </div>

        {/* Franchise Form */}
        <section className="p-4 p-md-5 rounded-3 shadow-lg mb-5 bg-white form-section-animate">
          <h2 className="h3 fw-bold mb-4 text-primary-custom">Franchise Application</h2>

          {isSubmitted && (
            <div className="alert alert-success bg-primary-custom text-white border-0 text-center fw-bold custom-success-alert mb-4">
              <span className="me-2 fs-5">✅</span> Your form has been submitted successfully! We will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="row g-4">

            {/* Personal Information */}
            <fieldset className="border p-4 rounded-3 border-danger-subtle custom-fieldset">
              <legend className="h5 fw-semibold px-2 text-primary-custom">Personal Information</legend>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <select name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                    <option value="" disabled>Select Gender</option>
                    {genders.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-6">
                  <input type="text" name="occupation" placeholder="Current Occupation" value={formData.occupation} onChange={handleChange} className="form-control" required />
                </div>
              </div>
              <input type="text" name="hearAboutUs" placeholder="How did you hear about us?" value={formData.hearAboutUs} onChange={handleChange} className="form-control mt-3" />
            </fieldset>

            {/* Location Information */}
            <fieldset className="border p-4 rounded-3 border-danger-subtle custom-fieldset">
              <legend className="h5 fw-semibold px-2 text-primary-custom">Location Information (Proposed Store)</legend>
              <input type="text" name="storeAddress" placeholder="Proposed Store Address" value={formData.storeAddress} onChange={handleChange} className="form-control mt-3 mb-3" required />
              <div className="row g-3">
                <div className="col-md-4">
                  <input type="text" name="pinCode" placeholder="Pin Code" value={formData.pinCode} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-4">
                  <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="form-control" required />
                </div>
                <div className="col-md-4">
                  <select name="state" value={formData.state} onChange={handleChange} className="form-select" required>
                    <option value="" disabled>Select State</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Investment Details */}
            <fieldset className="border p-4 rounded-3 border-danger-subtle custom-fieldset">
              <legend className="h5 fw-semibold px-2 text-primary-custom">Investment Details</legend>
              <div className="mt-3">
                <label className="form-label text-dark fw-medium mb-3">Your Investment Amount:</label>
                <div className="d-flex flex-wrap gap-3">
                  {investmentOptions.map(amount => (
                    <div key={amount} className="form-check me-3 custom-radio-label">
                      <input
                        type="radio"
                        name="investment"
                        id={`investment-${amount}`}
                        value={amount}
                        checked={formData.investment === amount}
                        onChange={handleChange}
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label text-dark" htmlFor={`investment-${amount}`}>
                        {amount}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <input type="text" name="fundingSource" placeholder="Source of Funding" value={formData.fundingSource} onChange={handleChange} className="form-control mt-4" required />
            </fieldset>

            <button type="submit" className="btn btn-lg w-100 fw-bold rounded-3 shadow custom-submit-btn">Submit Application</button>
          </form>
        </section>

        {/* Design for Impact */}
        <section className="p-4 p-md-5 rounded-3 shadow-lg bg-white">
          <h2 className="h3 fw-bold mb-4 text-primary-custom text-center">Design for Impact</h2>
          <p className="text-secondary mb-4 fs-6 text-center">A visual look inside the vibrant world of Fresh and Freeze stores and media presence.</p>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <button className={`btn btn-lg rounded-pill fw-semibold ${activeTab === 'outlets' ? 'custom-submit-btn' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('outlets')}>
              FreshnFreeze Outlets
            </button>
            <button className={`btn btn-lg rounded-pill fw-semibold ${activeTab === 'social' ? 'custom-submit-btn' : 'btn-outline-secondary'}`} onClick={() => setActiveTab('social')}>
              In Social Media
            </button>
          </div>

          <div className="p-3 border-dashed-custom rounded-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {activeTab === 'outlets' ? (
                <>
                  <div className="col"><AnimatedImage src="https://tse1.mm.bing.net/th/id/OIP.GdLz4_W5szLLMraaMU1BrQHaEJ?pid=Api&P=0&h=180" alt="Store Interior" description="A glimpse inside our vibrant FreshnFreeze stores." /></div>
                  <div className="col"><AnimatedImage src="https://tse2.mm.bing.net/th/id/OIP.GsV6ryW5LLrVO64A6ilYaQHaHa?pid=Api&P=0&h=180" alt="Product Display" description="Delicious ice creams beautifully displayed." /></div>
                  <div className="col"><AnimatedImage src="https://tse1.mm.bing.net/th/id/OIP._YabBJWtNSkqR8VJTdLZZwHaHa?pid=Api&P=0&h=180" alt="Store Exterior" description="The welcoming exterior of a FreshnFreeze outlet." /></div>
                  <div className="col"><AnimatedImage src="https://tse2.mm.bing.net/th/id/OIP.kyZEV0e1bkKmGxeINwcMzQHaHa?pid=Api&P=0&h=180" alt="Store View 4" description="Another view of our charming FreshnFreeze store." /></div>
                </>
              ) : (
                <>
                  <div className="col"><AnimatedImage src="https://tse2.mm.bing.net/th/id/OIP.rAMT2kTQDaUZIks6HyEvXwHaEK?pid=Api&P=0&h=180" alt="Social Media Post 1" description="Trending post on FreshnFreeze's social media." /></div>
                  <div className="col"><AnimatedImage src="https://tse3.mm.bing.net/th/id/OIP.gIaE7p4YemKPKfim_LR-fAHaHZ?pid=Api&P=0&h=180" alt="Social Media Post 2" description="Engaging content from FreshnFreeze." /></div>
                  <div className="col"><AnimatedImage src="https://tse3.mm.bing.net/th/id/OIP.CjFOz8DMI8GJa-FjSvoJ-AHaJt?pid=Api&P=0&h=180" alt="Social Media Post 3" description="Viral moment from FreshnFreeze." /></div>
                  <div className="col"><AnimatedImage src="https://tse3.mm.bing.net/th/id/OIP.aeTP3Dx9XqSje2y5z5jYAgHaEK?pid=Api&P=0&h=180" alt="Social Media Post 4" description="FreshnFreeze's latest campaign online." /></div>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Franchise;
