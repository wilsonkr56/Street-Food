import { useState } from "react";
import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className=" mt-24 items-center">
      <div className=" flex">
        <div className=" w-6/12 mt-24 flex justify-center items-center">
          <img className=" mx-auto" src={contact} alt="Contact us" />
        </div>
        <div className=" w-6/12 mt-24 items-center">
          <h1 className=" text-center text-4xl font-bold">Contact us</h1>
          <div className=" items-center">
            <form onSubmit={handleSubmit}>
              <div className=" font-bold text-center">
                <input
                  type="text"
                  placeholder="Name"
                  className=" m-3 p-1 w-10/12 border border-2 rounded-md border-amber-950"
                  required
                />
                <br></br>
                <input
                  type="email"
                  placeholder="Email"
                  className="m-3 p-1 w-10/12 border border-2 rounded-md border-amber-950"
                  required
                />
                <br></br>
                <textarea
                  placeholder="Type your Message here..."
                  className="m-3 p-1 w-10/12 border border-2 rounded-md border-amber-950"
                  required
                ></textarea>
                <br></br>

                <button
                  type="submit"
                  className=" mx-3 bg-red-300 rounded-md px-1"
                >
                  Submit
                </button>

                {message && (
                  <h1>Thanks for contacting StreetFood, We will reply ASAP.</h1>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
