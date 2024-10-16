const subPageBanner = ({name, page_name}) => {
    return (
      <div>
        <div className={`container-fluid bg-breadcrumb bg-breadcrumb-${page_name}`}>
          <div className="container text-center py-5">
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              {name}
            </h4>
            <ol
              className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            ></ol>
          </div>
        </div>
      </div>
    );
  };
  export default subPageBanner;
  