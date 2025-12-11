"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSending(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  return (
    <main className="grid md:grid-cols-[40%_1fr] min-h-screen">
      <div className="order-2 md:order-1 flex bg-foreground-100 w-full h-full items-center justify-center px-10 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="grid gap-10 md:w-lg text-marine-900"
        >
          <div className="mb-2">
            <h1 className="font-secondary text-5xl font-bold mb-5">
              Let&apos;s work together
            </h1>
            <p className="text-foreground-800 text-balance">
              Ready to take the next step? Let&apos;s collaborate, we&apos;d
              love to hear from you.
            </p>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <div className="flex items-center">
            <span className="font-bold bg-marine-900 text-foreground-100 flex items-center justify-center w-[50px] h-full">
              +63
            </span>
            <input
              className="pl-3"
              type="text"
              name="phone"
              placeholder="917 8707 337"
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="What can we do for you?"
            rows={5}
            onChange={handleChange}
            required
          ></textarea>
          {sent && "Message recieved. We'll get back to you soon."}
          <button
            className="cursor-pointer bg-marine-900 text-marine-100 font-bold w-full h-12"
            disabled={sending ? true : false}
          >
            {sending ? "Sending..." : "Get started"}
          </button>
        </form>
      </div>
      <div className="order-1 md:order-2 bg-cover bg-[url('/images/services/uw-cutting/2.webp')] bg-marine-300 bg-blend-multiply"></div>
    </main>
  );
}
