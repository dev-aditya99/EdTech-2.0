import { useState } from "react";
import Container from "../Components/Container";
import ThemeBtns from "../Components/ThemeBtns";
import { Link } from "react-router-dom";

// Assuming you have ThemeBtns and Container components imported

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your subscription logic here
    // For demo purposes, just updating state to simulate subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <Container className="bg-[#dc944b] shadow-lg mt-16">
      <div
        className="w-full max-w-[1200px] mx-auto flex items-center justify-center gap-4 lg:flex-row flex-col py-20"
        id="news-letter"
      >
        <div className="w-full h-full py-4 text-white md:text-[2rem] text-[1.5rem] font-black text-center">
          <h5>Want to learn the latest I.T. skills?</h5>
          <p className="text-[1rem] font-bold">
            Sign up for our newsletter and stay up to date.
          </p>
        </div>
        <div className="w-full h-full py-4">
          {subscribed ? (
            <p className="text-white text-center">
              Thanks for your subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="w-full flex items-center justify-center sm:flex-row flex-col gap-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  className="outline-none border-none px-2 py-3 rounded lg:w-[50%] sm:w-[40%] w-[100%]"
                  required
                />
                <ThemeBtns
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white mt-0"
                >
                  Notify Me
                </ThemeBtns>
              </div>
            </form>
          )}
          <div className="w-full flex items-center justify-center gap-3 mt-4 text-slate-700 font-medium text-center">
            <p>
              We care about the protection of your data. Read our{" "}
              <Link
                to="/privacy-policy"
                className="font-black text-white underline decoration-solid"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterSignup;
