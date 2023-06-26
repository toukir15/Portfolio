import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import emailloti from "../../assets/emailloti.json";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(true);

  const container = useRef(null);
  const form = useRef();

  console.log(form);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",

      autoplay: true,
      animationData: emailloti,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setText("");
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <div className="">
      <div
        id="contact"
        className=" text-gray-100 px-8 py-12 md:mt-20 container mx-auto"
      >
        <div data-aos="fade-up" className="text-center font-medium">
          <h5 className="uppercase mb:2 md:mb-5 text-xl">My Contact</h5>
          <h2 className="text-3xl md:text-5xl font-medium">
            <span>Contact</span> <span className="text-highlight">Me Here</span>
          </h2>
        </div>
        <div className="mt-16 flex flex-col md:flex-row">
          <div className="flex flex-col justify-between overflow-hidden md:w-1/2">
            <div>
              <h2 className="text-2xl text-center lg:text-3xl font-bold leading-tight hidden md:block">
                Lets talk about everything!
              </h2>
            </div>
            <div className="md:mt-8  h-72 md:max-h-96 " ref={container}></div>
          </div>
          <form className="md:w-1/2 px-6" onSubmit={handleSubmit} ref={form}>
            <div>
              <span className="uppercase text-sm text-gray-300 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-transparent border text-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="user_name"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-300 font-bold">
                Email
              </span>
              <input
                className="w-full bg-transparent border text-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-300 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-transparent border text-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="message"
              ></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                {!loading ? "Loading..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
