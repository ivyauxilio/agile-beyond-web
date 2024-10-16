import SubPageBanner from "./../../components/sub_banner";

const Pricing = () => {
  return (
    <>
        <SubPageBanner name="Pricing & Revenue Model" page_name="pricing"/>

        <div className="container-fluid service mb-5 py-5">
            <div className="container py-5">

                <div className="consistent-height">
                    <h1 className="text-primary overline">Revenue Stream</h1>
                    <p className="mb-0">At Agile Beyond, our pricing and revenue model is designed with flexibility and cost-effectiveness in mind, ensuring that our clients receive the best possible value for their investment.</p>
          
                    <ul className="nav nav-tabs pricing mt-5 mb-3 cursor-default">
                      <li className="nav-item">
                        <a className="nav-link h5 active" data-bs-toggle="tab" data-bs-target="#tab1" >
                            Pay-per-Labour
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link h5" data-bs-toggle="tab" data-bs-target="#tab2" >
                            Pay for Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link h5" data-bs-toggle="tab" data-bs-target="#tab3" >
                            Pricing Strategy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link h5" data-bs-toggle="tab" data-bs-target="#tab4" >
                            Discounts and Loyalty Programs
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="tab1" className="tab-pane active">
                        <p>We base our primary revenue on a pay-per-labour model, where clients are charged according to the actual usage of our comprehensive back-office platform and solutions. This model ensures that your business only pays 
                            for the services it needs, without the burden of fixed costs. We also ensure full compliance with local regulations and 
                            labor laws, so you don't need to establish a legal entity in the Philippines.</p>
                      </div>
                      <div id="tab2" className="tab-pane">
                        <p>We offer several additional services to enhance your business operations, each billed separately:</p>
                        <ul className="navTabDecimal">
                            <li><strong>Personalized Analytics and Reporting Tools</strong>
                                <p>Enhance your decision-making with our add-on analytics and reporting tools, providing you with the insights necessary to optimize your operations.</p>
                            </li>
                            <li><strong>Customization Services</strong>
                                <p>Whether you need customized dashboards, system integration, or bespoke features, our team is ready to tailor the platform to your exact needs.</p>
                            </li>
                            <li> <strong>Consulting Services</strong>
                                <p>Benefit from our expert consulting services to streamline your operations and improve efficiency. These services are available on an hourly basis or as part of a package tailored to your business.</p>
                            </li>
                        </ul>
                      </div>
                      <div id="tab3" className="tab-pane">
                        <p>We ensure our pricing remains competitive and fair by conducting regular market research and cost analysis. Our pricing strategy reflects industry standards and is designed to provide maximum value to our clients.</p>
                      </div>
                      <div id="tab4" className="tab-pane">
                        <p>To encourage ongoing partnerships, we offer volume-based discounts and long-term engagement discounts. We also plan to introduce a loyalty program that rewards regular platform users with exclusive benefits and discounts.</p>
                        <p>With this revenue model, Agile Beyond is committed to creating value-driven, long-term relationships with clients across various industries.</p>
                    </div>
                    </div>
                  </div>
            </div>
        </div>

    </>
  );
};
export default Pricing;
