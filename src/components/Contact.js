import React from "react";

function Contact() {
  return (
    <div className="flex justify-end items-center h-screen mr-40">
      <div className="box border-double border-4 border-slate-300 rounded-full shadow-xl p-20 flex flex-col backdrop-blur-xl text-green-100">
        <h2 className="text-center font-bold text-xl border-b-2 border-slate-300">
          Contact form
        </h2>

        <form className="flex flex-col gap-2 font-semibold">
          <label htmlFor="name" className="pt-4 ">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-slate-200 rounded p-2"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-slate-200 rounded p-2"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-slate-200 rounded p-2"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
