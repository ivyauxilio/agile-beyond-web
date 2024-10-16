import SubPageBanner from "./../../components/sub_banner";
import Team1 from "./../../assets/images/roland2.png";
import Team2 from "./../../assets/images/peter2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <SubPageBanner name="Our Team" page_name="team" />

      <div className="container-fluid team py-5">
        <div className="container pt-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <p className="mb-0">
              At Agile Beyond, our leadership team brings a wealth of experience
              and expertise from various industries, ensuring that we deliver
              innovative and effective solutions to our clients.
            </p>
          </div>

          {/* <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
              data-bs-toggle="modal"
              data-bs-target="#information_modal_Ceo"
            >
              <div className="team-item">
                <div className="team-img">
                  <img
                    src={Team1}
                    alt="Roland Schaub - CEO & Founder"
                    className="dark:invert img-fluid w-100"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square rounded-pill mb-2"
                      href=""
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square rounded-pill mb-0"
                      href=""
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="team-title p-4">
                  <h4 className="mb-0">Roland M. Schaub</h4>
                  <p className="mb-0">CEO & Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
              data-bs-toggle="modal"
              data-bs-target="#information_modal_GM"
            >
              <div className="team-item">
                <div className="team-img">
                  <img
                    src={Team2}
                    alt="Peter Feuz - General Manager"
                    className="dark:invert img-fluid w-100"
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square rounded-pill mb-2"
                      href=""
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square rounded-pill mb-0"
                      href=""
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="team-title p-4">
                  <h4 className="mb-0">Peter Feuz</h4>
                  <p className="mb-0">General Manager</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container">
        <section className="section-team">
          <div className="section-image col-lg-4">
            <img
              src={Team1}
              alt="Roland Schaub - CEO & Founder"
              className="dark:invert img-fluid w-100"
            />
          </div>
          <div className="section-text col-lg-6">
            <h3 className="mb-0 team-title-text">Roland M. Schaub</h3>
            <p className="team-sub-title-text fw-bold">CEO & Founder</p>
            <ul className="list-unstyled">
              <li>
                <strong>Industry Veteran</strong>
                <p>
                  With four decades of experience in the dynamic world of
                  Freight Forwarding & Supply Chains, Roland Schaub brings
                  unparalleled expertise and insight to Agile Beyond. Throughout
                  his career, he has navigated various roles and challenges,
                  refining his skills and knowledge to become a leading figure
                  in the industry.
                </p>
              </li>
              <li>
                <strong>Global & Regional Expertise</strong>
                <p>
                  As a Swiss national, Roland possesses a deep understanding of
                  global markets, making him adept at fostering seamless
                  collaboration across borders. His ability to bridge regional
                  differences and align strategies with global trends ensures
                  that Agile Beyond can deliver effective and innovative
                  solutions to clients worldwide.
                </p>
              </li>
              <li>
                {" "}
                <strong>Proven Track Record</strong>
                <p>
                  Beyond his expertise in Freight Forwarding and Supply Chains,
                  Roland has a strong background in Procurement, F&B Management,
                  and BPO Leadership. This diverse experience equips him with
                  the skills necessary to ensure efficient and successful
                  operations, driving Agile Beyond’s growth and our clients'
                  success.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-team reverse">
          <div className="section-image col-lg-4">
            <img
              src={Team2}
              alt="Peter Feuz - General Manager"
              className="dark:invert img-fluid w-100"
            />
          </div>
          <div className="section-text col-lg-6">
            <div>
              <h3 className="mb-0 team-title-text">Peter Feuz </h3>
              <p className="team-sub-title-text fw-bold">General Manager</p>
            </div>
            <ul className="list-unstyled">
              <li>
                <strong>Industry Versatility</strong>
                <p>
                  With 20 years of experience spanning multiple industries,
                  Peter Feuz exemplifies adaptability and a keen eye for
                  transferable skills. His diverse background enables him to
                  approach challenges with a unique perspective, driving
                  innovative solutions for our clients.
                </p>
              </li>
              <li>
                <strong>Retail Acumen</strong>
                <p>
                  Peter has a proven ability to navigate the ever-evolving
                  retail landscape. His expertise in customer engagement and
                  sales strategies has led to successful outcomes, making him a
                  valuable asset in crafting effective retail solutions.
                </p>
              </li>
              <li>
                {" "}
                <strong>Travel Expertise</strong>
                <p>
                  Peter's deep understanding of the travel industry has enabled
                  him to create exceptional customer experiences. His insights
                  into the sector ensure that Agile Beyond can deliver tailored
                  services that meet the specific needs of travel businesses.
                </p>
              </li>
              <li>
                <strong>Social Media Savvy</strong>
                <p>
                  Skilled in leveraging the power of social media, Peter has a
                  strong track record in brand building, executing successful
                  marketing campaigns, and engaging with communities. His social
                  media expertise is integral to our approach to modern business
                  challenges.
                </p>
              </li>
              <li>
                <strong>BPO Management</strong>
                <p>
                  Peter has demonstrated leadership in overseeing BPO
                  operations, ensuring that processes are efficient and that
                  client satisfaction is consistently achieved. His experience
                  in BPO management is key to Agile Beyond’s commitment to
                  delivering top-notch services.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div
        className="modal modal_outer right_modal fade"
        id="information_modal_Ceo"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <form method="post" id="get_quote_frm">
            <div className="modal-content ">
              <div className="d-flex pt-4 px-4 justify-content-between">
                <div>
                  <h3>Roland M. Schaub</h3>
                  <p>CEO & Founder</p>
                </div>
                <button
                  type="button"
                  className="close modalClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body get_quote_view_modal_body">
                <ul className="navTabDecimal">
                  <li>
                    <strong>Industry Veteran</strong>
                    <p>
                      With four decades of experience in the dynamic world of
                      Freight Forwarding & Supply Chains, Roland Schaub brings
                      unparalleled expertise and insight to Agile Beyond.
                      Throughout his career, he has navigated various roles and
                      challenges, refining his skills and knowledge to become a
                      leading figure in the industry.
                    </p>
                  </li>
                  <li>
                    <strong>Global & Regional Expertise</strong>
                    <p>
                      As a Swiss national, Roland possesses a deep understanding
                      of global markets, making him adept at fostering seamless
                      collaboration across borders. His ability to bridge
                      regional differences and align strategies with global
                      trends ensures that Agile Beyond can deliver effective and
                      innovative solutions to clients worldwide.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <strong>Proven Track Record</strong>
                    <p>
                      Beyond his expertise in Freight Forwarding and Supply
                      Chains, Roland has a strong background in Procurement, F&B
                      Management, and BPO Leadership. This diverse experience
                      equips him with the skills necessary to ensure efficient
                      and successful operations, driving Agile Beyond’s growth
                      and our clients' success.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="modal modal_outer right_modal fade"
        id="information_modal_GM"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
      >
        <div className="modal-dialog" role="document">
          <form method="post" id="get_quote_frm">
            <div className="modal-content ">
              <div className="d-flex pt-4 px-4 justify-content-between">
                <div>
                  <h3>Peter Feuz </h3>
                  <p>General Manager</p>
                </div>
                <button
                  type="button"
                  className="close modalClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body get_quote_view_modal_body"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Team;
