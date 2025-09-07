"use client";

// import { useState } from "react";

export default function ContactPage() {
  // const [form, setForm] = useState({ name: "", email: "", message: "" });

  // function handleChange(
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted (functionality not yet active).");
  }

  return (
    <main className="grid grid-cols-[40%_1fr] min-h-screen">
      <div className="flex bg-foreground-100 w-full h-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="grid gap-10 w-lg text-marine-900"
        >
          <div className="mb-2">
            <h1 className="font-secondary text-5xl font-bold mb-5">
              Let&apos;s work together
            </h1>
            <p className="text-foreground-800 text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, saepe?
            </p>
          </div>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <div className="flex items-center">
            <span className="font-bold bg-marine-900 text-foreground-100 flex items-center justify-center w-[50px] h-full">
              +63
            </span>
            <input
              className="pl-3"
              type="text"
              name="phone"
              placeholder="917 8707 337"
            />
          </div>
          <textarea
            name="message"
            placeholder="What can we do for you?"
            rows={5}
          ></textarea>
          <button className="cursor-pointer bg-marine-900 text-marine-100 font-bold w-full h-12">
            Get started
          </button>
        </form>
      </div>
      <div className="bg-cover bg-[url('/images/services/uw-cutting/2.png')] bg-marine-300 bg-blend-multiply"></div>
    </main>
  );
}
