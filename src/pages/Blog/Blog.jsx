import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { LuShieldQuestion } from "react-icons/lu";
import useTitle from "../../Custom/UseTitle/useTitle";

const blogBox = [
  {
    title:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side",
    desc: "An access token is a credential used to authenticate and authorize a client to access protected resources in a system. It is usually short-lived and grants specific permissions for a limited period. A refresh token, on the other hand, is a long-lived token used to obtain new access tokens without requiring the user to reauthenticate. It is typically issued alongside an access token. Access tokens work by including them in API requests as a means of proving the client's identity and permissions. The server validates the token and grants or denies access based on the token's validity and associated permissions. Refresh tokens are exchanged for new access tokens when the current one expires, extending the client's session.  On the client-side, access tokens and refresh tokens should be securely stored. Best practices include storing them in an encrypted format, such as using browser storage mechanisms like HTTP-only cookies, local storage, or session storage. It is essential to protect them from unauthorized access to prevent misuse and potential security breaches",
  },
  {
    title: "Compare SQL and NoSQL databases? on the client-side",
    desc: "SQL databases follow a structured schema with fixed tables and SQL querying language, providing strong consistency and transactional integrity. In contrast, NoSQL databases offer a flexible schema, horizontal scalability, and a variety of data models, sacrificing some consistency for increased scalability and performance",
  },
  {
    title: "What is express js? What is Nest JS",
    desc: "Express.js is a minimal and flexible web application framework for Node.js, designed to build web applications and APIs. It provides a simple and intuitive interface to handle HTTP requests and responses, routing, middleware, and other web-related functionalities. Nest.js is a progressive and opinionated Node.js framework built on top of Express.js. It follows a modular and scalable architecture inspired by Angular, combining elements of object-oriented programming, functional programming, and reactive programming. Nest.js simplifies the development of server-side applications by providing features like dependency injection, decorators, and a powerful CLIe",
  },
  {
    title: "What is MongoDB aggregate and how does it work",
    desc: "MongoDB's aggregate is a powerful framework for data aggregation and processing within the MongoDB database. It allows you to perform complex data analysis tasks by applying multiple operations on a collection of documents. Using the aggregate framework, you can group, filter, transform, and calculate data using various operators like $match, $group, $project, $sort, and more. The aggregation pipeline in MongoDB consists of multiple stages that process the documents sequentially, passing the result of one stage as the input to the next. Each stage performs a specific operation, allowing you to reshape and manipulate the data in a flexible and efficient manner. Aggregation pipelines can include operations such as filtering documents, grouping them based on specific fields, performing calculations or aggregations, sorting the results, and even joining data from multiple collections. The output of an aggregate operation is typically a new set of documents that reflect the transformations and calculations applied to the original data, providing valuable insights and aggregated results based on the specified operations",
  },
];

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto h-[500px] md:h-auto bg-black text-white p-5 lg:p-10 rounded-xl overflow-y-scroll lg:overflow-hidden">
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        swipeScrollTolerance="100"
        useKeyboardArrows="true"
        autoFocus="true"
        emulateTouch="true"
      >
        {blogBox.map(({ title, desc }) => (
          <div
            key={title}
            className="px-0 py-4 my-5 lg:px-16 lg:py-24 flex flex-col gap-10"
          >
            <h1 className="font-medium lg:font-bold text-lg lg:text-2xl text-[#4acdd5] text-justify md:text-center">
              <LuShieldQuestion className="text-4xl inline mr-1" />
              {title} ?
            </h1>{" "}
            <p
              style={{ lineHeight: "2" }}
              className="text-gray-400 text-justify"
            >
              <span className="text-[#4acdd5] inline-block mr-4 text-2xl lg:text-4xl">
                →
              </span>{" "}
              {desc}.
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;
