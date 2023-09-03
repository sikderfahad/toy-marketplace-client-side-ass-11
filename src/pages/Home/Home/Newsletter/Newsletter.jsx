import "./style.css";
import paperPlain from "../../../../assets/img/paper-plane.png";
import axios from "axios";
import {
  ToastMsgSuc,
  ToastMsgWarn,
} from "../../../../components/Toast/ToastMsg";

const Newsletter = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    // console.log(newEmail);

    axios.get("https://express-workspace.vercel.app/subscribe").then((res) => {
      //   console.log(res.data);
      const subBox = res.data;
      const mailExist = subBox.find((subscriber) => subscriber.email === email);
      if (mailExist) {
        // console.log(mailExist);
        ToastMsgWarn("Already subscribed!");
        return;
      } else {
        axios
          .post("https://express-workspace.vercel.app/subscribe", { email })
          .then((res) => {
            {
              //   console.log(res.data);
              if (res.data.insertedId) {
                form.reset();
                ToastMsgSuc("🎉 Welcome to joining us!");
              }
            }
          });
      }
      //   if (!mailExist && newEmail) {

      //   }
    });
  };
  return (
    <div>
      <div className="newsletter-area">
        <div className="news-wraper w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="sec-title text-center pb-12">
            <h2 className="text-[#333333] text-3xl md:text-5xl mb-3 font-bold">
              Subscribe For Offer!
            </h2>
            <p className="text-[#333333] mb-2 uppercase font-medium">
              NEWSLETTER SIGNUP
            </p>
          </div>
          <div>
            <form onSubmit={onSubmit} action="">
              <div className="relative w-full mx-auto md:w-3/4 xl:w-[55%] border-b-2 bg-transparent border-[#333]">
                <input
                  className="block pr-4 md:px-0 w-10/12 text-lg text-[#333] h-14 bg-transparent border-none outline-none"
                  type="email"
                  name="email"
                  id="email"
                />
                <button
                  type="submit"
                  className="absolute right-2 md:right-0 top-0  w-11 md:w-12 duration-200 transform hover:rotate-45"
                >
                  <img src={paperPlain} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
