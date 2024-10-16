import SubPageBanner from "../../components/sub_banner";
import Blog1 from "../../assets/images/blog01.jpg";
import Blog2 from "../../assets/images/blog2.jpg";
import Blog3 from "../../assets/images/instagram-footer-3.jpg";
// import { FaCheck } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <SubPageBanner name="Our News" page_name="blog"/>
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          {/* <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h4 className="text-primary">From Blog</h4>
            <h1 className="display-4 mb-4">News And Updates</h1>
          </div> */}
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={Blog1}
                    alt="AG Logo"
                    className="dark:invert img-fluid rounded w-100"
                  />
                  <div className="blog-categiry py-2 px-4">
                    <span>Business</span>
                  </div>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-end gap-2 mb-3">
                    <div className="small">
                      <span className="fa fa-user text-primary"></span> Admin
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary"></span> Sept 01, 2024
                    </div>
                    {/* <div className="small">
                      <span className="fa fa-comment-alt text-primary"></span> 6
                      Comments
                    </div> */}
                  </div>
                  <a href="/blog/posts/1" className="h4 d-inline-block mb-3">
                    Why You Should Consider Back Office Outsourcing for
                    Logistics
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={Blog2}
                    alt="AG Logo"
                    className="dark:invert img-fluid rounded w-100"
                    
                  />
                  <div className="blog-categiry py-2 px-4">
                    <span>Business</span>
                  </div>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-end gap-2 mb-3">
                    <div className="small">
                      <span className="fa fa-user text-primary"></span> Admin
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary"></span>  Sept 01, 2024
                    </div>
                    {/* <div className="small">
                      <span className="fa fa-comment-alt text-primary"></span> 6
                      Comments
                    </div> */}
                  </div>
                  <a href="/blog/posts/2" className="h4 d-inline-block mb-3">
                    Why Choose the Philippines, Especially Clark, for Your BPO
                    Setup
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src={Blog3}
                    alt="AG Logo"
                    className="dark:invert img-fluid rounded w-100"
                    
                  />
                  <div className="blog-categiry py-2 px-4">
                    <span>Business</span>
                  </div>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between mb-3">
                    <div className="small">
                      <span className="fa fa-user text-primary"></span> Martin.C
                    </div>
                    <div className="small">
                      <span className="fa fa-calendar text-primary"></span> 30 Dec
                      2025
                    </div>
                    <div className="small">
                      <span className="fa fa-comment-alt text-primary"></span> 6
                      Comments
                    </div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    Leverage agile frameworks to provide
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
