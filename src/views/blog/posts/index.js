import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./blogPost";
import "./style.css";

// import Post from "https://agilebeyond.net/blogPost.js"

const Blog1 = () => {
  return (
    <div className="blog-body">
      <p>
        In today’s fast-paced logistics industry, efficiency and agility are
        critical to maintaining a competitive edge. While the focus often falls
        on optimizing supply chains and ensuring timely deliveries, the
        importance of back-office functions cannot be overlooked. These
        essential tasks—ranging from data entry and billing to customer service
        and inventory management—form the backbone of any successful logistics
        operation. However, managing these functions in-house can be
        resource-intensive and detract from your core business activities. This
        is where back office outsourcing offers a strategic advantage.
      </p>
      <h2>Expertise & Specialization</h2>
      <p>
        One of the most compelling reasons to consider back office outsourcing
        is the access to specialized expertise. Our team at Agile Beyond brings
        years of logistics and back-office experience, along with a deep
        understanding of industry best practices. By outsourcing, you gain
        access to a level of specialized skill and industry knowledge that can
        be challenging to maintain internally. This ensures that your
        back-office operations are handled by experts who are adept at
        navigating the complexities of the logistics industry.
      </p>
      <h2>Advanced Technology Integration</h2>
      <p>
        Back office outsourcing partners invest in cutting-edge technologies
        tailored for logistics operations. By leveraging these advanced tools,
        your business gains access to the latest innovations without the need
        for substantial upfront investments. This not only enhances operational
        efficiency but also positions your company to stay ahead of
        technological trends.
      </p>
      <h2>Cost Efficiency</h2>
      <p>
        Managing an in-house logistics back office comes with significant
        overhead costs, from staffing and training to maintaining
        infrastructure. Outsourcing allows you to convert these fixed costs into
        variable ones, paying only for the services you need. This model not
        only leads to substantial cost savings but also frees up capital that
        can be reinvested into core areas of your business. By partnering with a
        reliable BPO provider, you can optimize your budget without compromising
        on quality.
      </p>
      <h2>Enhanced Customer Service</h2>
      <p>
        A well-managed logistics back office is integral to providing
        exceptional customer service. By ensuring that your customers receive
        timely updates, accurate information, and efficient support, you can
        significantly enhance the customer experience. This contributes to
        increased customer loyalty and repeat business, which are crucial for
        sustained growth.
      </p>
      <h2>Scalability & Flexibility</h2>
      <p>
        The logistics industry is inherently dynamic, with demands fluctuating
        based on seasons, market trends, and other variables. Maintaining the
        flexibility to scale operations up or down in response to these changes
        is crucial. Outsourcing provides this scalability, allowing your
        business to adjust to changing requirements without the hassle of
        recruitment and training. Whether you need additional support during
        peak seasons or wish to streamline operations during slower periods,
        outsourcing offers the flexibility to meet your needs.
      </p>
      <h2>Risk Mitigation</h2>
      <p>
        Logistics operations involve inherent risks, including compliance,
        regulatory, and operational challenges. By outsourcing back office
        functions to seasoned professionals, you ensure that these risks are
        effectively managed. This reduces the burden on your internal teams and
        minimizes the likelihood of costly errors or compliance issues.
      </p>
      <h2>Time Savings</h2>
      <p>
        Time is a valuable resource in the logistics industry. Outsourcing back
        office functions allows your business to save time on tasks such as data
        entry, documentation, and paperwork. These tasks are handled swiftly and
        accurately by dedicated professionals, improving overall operational
        efficiency and allowing your team to focus on more strategic
        initiatives.
      </p>
      <h2>Competitive Edge</h2>
      <p>
        In a competitive logistics landscape, efficiency and responsiveness are
        key differentiators. By outsourcing back office functions, your business
        gains a competitive edge, positioning itself as a nimble and agile
        player in the market. This can lead to quicker decision-making, improved
        customer satisfaction, and ultimately, greater market share.
      </p>
      <div className="blog-conclusion">
        <h2>Conclusion</h2>
        <p>
          In an industry where efficiency and precision are paramount,
          outsourcing back office functions can be a game-changer for logistics
          companies. By leveraging specialized expertise, advanced technology,
          cost savings, and the flexibility to scale, businesses can optimize
          their operations and focus on what truly matters—delivering
          exceptional value to their customers. As you consider ways to enhance
          your logistics operations, back office outsourcing with Agile Beyond
          could be the key to unlocking greater efficiency and success.
        </p>
      </div>
    </div>
  );
};

const Blog2 = () => {
  return (
    <div>
      <p>
        The Philippines has established itself as one of the premier
        destinations for Business Process Outsourcing (BPO) globally. With its
        robust infrastructure, skilled workforce, and business-friendly
        environment, the country continues to attract companies seeking to
        optimize their operations and enhance efficiency. Among the many
        promising locations within the Philippines, Clark stands out as an
        exceptional choice for setting up a BPO operation. Here’s why:
      </p>
      <h2>1. Strategic Location and Infrastructure</h2>
      <p>
        Clark is strategically located in Central Luzon, just north of Manila,
        making it easily accessible from the capital while avoiding the
        congestion often associated with Metro Manila. The Clark Freeport Zone,
        where many BPO companies are established, benefits from world-class
        infrastructure, including the Clark International Airport, major
        highways, and a reliable power and telecommunications network. This
        accessibility and connectivity make Clark an ideal hub for BPO
        operations, ensuring seamless communication and logistics.
      </p>
      <h2>2. Highly Skilled and English-Proficient Workforce</h2>
      <p>
        The Philippines is renowned for its highly skilled and
        English-proficient workforce. The country’s educational system
        emphasizes English language proficiency, making it the second-largest
        English-speaking nation in the world. Clark, in particular, is home to
        numerous universities and training institutions that produce a steady
        stream of graduates well-versed in various fields, from IT and customer
        service to finance and healthcare. This talent pool is a key reason why
        companies choose the Philippines—and specifically Clark—for their BPO
        setups.
      </p>
      <h2>3. Cost-Effective Operations</h2>
      <p>
        Cost-efficiency is one of the primary drivers for outsourcing, and the
        Philippines offers a significant advantage in this regard. The cost of
        labor in the Philippines is highly competitive compared to other BPO
        destinations, allowing companies to achieve substantial savings without
        compromising on quality. In Clark, the cost of living and operational
        expenses are generally lower than in Metro Manila, further enhancing the
        cost-effectiveness of setting up a BPO operation in this region.
      </p>
      <h2>4. Business-Friendly Environment and Incentives</h2>
      <p>
        The Philippine government actively supports the BPO industry,
        recognizing its vital role in the country’s economy. In Clark, companies
        can benefit from the incentives offered by the Clark Development
        Corporation (CDC) and the Bases Conversion and Development Authority
        (BCDA). These incentives include tax breaks, duty-free importation of
        equipment, and streamlined business registration processes.
        Additionally, the Clark Freeport Zone provides a stable and secure
        environment for businesses, with clear regulations and strong
        governance.
      </p>
      <h2>5. Cultural Affinity with Western Markets</h2>
      <p>
        The cultural affinity between the Philippines and Western markets,
        particularly the United States, is another significant advantage.
        Filipinos are well-acquainted with Western business practices and
        consumer behavior, making them highly effective in customer-facing
        roles. This cultural alignment ensures smoother interactions and better
        customer satisfaction, which are critical for the success of any BPO
        operation.
      </p>
      <h2>6. Growing BPO Ecosystem in Clark</h2>
      <p>
        Clark has rapidly developed into a thriving BPO hub, with numerous
        multinational companies choosing it as their base of operations. The
        growing ecosystem includes not only BPO providers but also supporting
        industries such as IT services, real estate, and hospitality. This
        ecosystem fosters collaboration, innovation, and a sense of community
        among businesses, creating a dynamic environment where companies can
        thrive.
      </p>
      <h2>7. Quality of Life and Work Environment</h2>
      <p>
        Clark offers a high quality of life for employees, with its clean, green
        environment, low pollution levels, and modern amenities. The area is
        also home to various recreational facilities, shopping centers, and
        international schools, making it an attractive location for both local
        and expatriate employees. A positive work environment is crucial for
        employee satisfaction and retention, and Clark provides an ideal setting
        in this regard.
      </p>
      <div className="blog-conclusion">
        <h2>Conclusion</h2>
        <p>
          Choosing the right location for your BPO setup is critical to the
          success of your operations. The Philippines, with its skilled
          workforce, cost-effective environment, and strong government support,
          remains a top choice for BPO companies worldwide. Within the
          Philippines, Clark stands out as an exceptional option, offering a
          strategic location, business-friendly policies, and a high quality of
          life. By setting up your BPO operations in Clark, you position your
          company to leverage the best that the Philippines has to offer,
          ensuring long-term success and growth.
        </p>
      </div>
    </div>
  );
};

const Posts = () => {
  const { id } = useParams();

  // const posts = [
  //     { id: 1, title: 'First Post', content: 'This is the first post.' },
  //     { id: 2, title: 'Second Post', content: 'This is the second post.' },
  //     { id: 3, title: 'Third Post', content: 'This is the third post.' },
  // ];

  // const blogPosts = async() => {
  //   const api_call = await fetch(`https://agilebeyond.net/blogPost.json`);
  //   const data = await api_call.json();
  //   return console.log(data);
  // }

  // const [posts, setPosts] = useState([]);
  // // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(async() => {
  //   await fetch("https://agilebeyond.net/blogPost.json") // Replace with your JSON file URL
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('data',data)
  //       const foundPost = data.find((p) => p.id === parseInt(id)); // Filter by ID
  //       if (foundPost) {
  //         setPosts(foundPost);
  //       } else {
  //         setError(new Error("Post not found"));
  //       }
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       // setLoading(false);
  //     });
  // }, []);

  const post = Post.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="container blog-post-container">
      <div className="d-flex justify-content-center mb-3">
        <img
          className="image"
          id="thumbnail-image"
          width={"100%"}
          src={post.imgUrl}
          alt="post"
        />
      </div>
      <div class="d-flex label text-content-grey flex-wrap">
        <div class="d-flex align-items-center  me-lg-5 me-md-2 category">
          <a
            class="category-name mr-5"
            href="#"
            id="category-name"
            data-wpel-link="internal"
            rel="follow"
          >
            Business
          </a>
        </div>
        <div class="d-flex align-items-center me-2 mr-1">
          <p class="post-info">Sept 01, 2024 </p>
        </div>
        <div class="d-flex align-items-center me-2 mr-1">
          <p class="ml-2 post-info">Admin </p>
        </div>
        <div class="d-flex align-items-center">
          <p class="ml-2 post-info">5min Read </p>
        </div>
      </div>
      <h1 className="heading pb-3">{post.title}</h1>
      {post.id == 1 ? <Blog1 /> : <Blog2 />}
    </div>
  );
};
export default Posts;
