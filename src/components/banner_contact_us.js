const BannerContactUs = () => { 
    return(
        <div className="middle py-5">
            <div className="container py-xl-5 py-lg-3">
            <div className="welcome-left text-left py-3">
                <div className="title-content">
                <h1 className="text-light">Contact Us</h1>
                <p className="text-light">Questions? Email us today.</p>
        
                </div>
                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="/contact-us"><i className="fa fa-phone-alt me-2"></i> Contact Us</a>
                <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="/about">Learn More</a>
            </div>
            </div>
      </div>
    );
  }
  export default BannerContactUs;
