"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted (functionality not yet active).");
  }

  return (
    <main>
      <h1 className="text-5xl font-secondary font-bold mb-10 text-center">
        Get in Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-1">
              Head Office
            </h2>
            <p className="text-foreground-400">
              Placeholder Address, Legazpi City, Philippines
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-1">
              Metro Manila Office
            </h2>
            <p className="text-foreground-400">
              Placeholder Address, Taguig City
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-1">
              Southern Luzon Office
            </h2>
            <p className="text-foreground-400">
              Placeholder Address, Batangas City
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-1">Email</h2>
            <p className="text-foreground-400">info@tridentcbpmarine.com</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gold-400 mb-1">Phone</h2>
            <p className="text-foreground-400">+63 912 345 6789</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-bold text-white">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gold-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-white">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gold-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-white">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gold-500"
              placeholder="How can we help you?"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-3 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
