import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const notify = () => toast("Wow so easy!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e5r3qak", "template_sybbad9", form.current, {
        publicKey: "tIShYA_u43FEMhp2C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Sended");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 boredr-2 border-fuchsia-800 b_glow text-xl text-slate-500 "
            placeholder="Enter your Name"
            type="text"
            name="user_name"
            required
          />
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 boredr-2 border-fuchsia-800 b_glow text-xl text-slate-500 "
            placeholder="Enter your Email"
            type="email"
            name="user_email"
            required
          />
        </div>
        <textarea
          className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 boredr-2 border-fuchsia-800 b_glow text-xl text-slate-500 "
          placeholder="Write your Message.."
          name="message"
          id=""
          cols="20"
          rows="8"
          required
        />
        <button
          type="submit"
          value="Send"
          onClick={notify}
          className="neno-button showdow-xl hover:shadow-fuchsia-800/50 text-white boredr-2 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb=10"
        >
          Send
        </button>
        <div>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Contact;
