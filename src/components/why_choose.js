import { FaBullseye } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const WhyChoose = ({bgLight}) => {
    return (
        <div className={`container-fluid feature ${bgLight ? "bg-light" : ''} py-5`} id="whychoose">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s">
                    <h1 className="display-4 mb-4">Why Choose Agile Beyond?</h1>
                    {/* <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p> */}
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <FaBullseye className="fa-3x" />
                            </div>
                            <div style={{minHeight: '270px'}}>
                                <h4 className="mb-4">Industry-Specific Expertise with Cross-Sector Versatility</h4>
                                <p className="mb-4">Agile Beyond combines deep industry knowledge with the flexibility to adapt our BPO services to a variety of markets. Whether you’re in logistics, healthcare, finance, or another industry, we provide tailored solutions that drive success.
                                </p>
                            </div>
                    
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <FaArrowsAltH className="fa-3x"/>
                            </div>
                            <div style={{minHeight: '270px'}}>
                                <h4 className="mb-4">Agility and Innovation</h4>
                                <p className="mb-4">We pride ourselves on staying ahead of industry trends and continuously evolving our services to meet the changing needs of our clients. Our innovative platform ensures that your operations are always optimized for efficiency and growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <FaHandshake className="fa-3x"/>
                            </div>
                            <div style={{minHeight: '270px'}}>
                            <h4 className="mb-4">Client-Centric Approach</h4>
                            <p className="mb-4">At Agile Beyond, we prioritize our clients' unique needs. Our team works closely with you to understand your business challenges and deliver customized solutions that provide measurable results.
                            </p>
                             </div>
                        </div>
                    </div>
                 
                
                </div>
            </div>
        </div>
    );
  };
  export default WhyChoose;
  