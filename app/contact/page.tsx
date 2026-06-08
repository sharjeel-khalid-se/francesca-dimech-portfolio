"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  MonitorPlay,
} from "lucide-react";

// Placeholder images for the bottom grid[cite: 11]
import Img1 from "@/assets/acting.jpg";
import Img2 from "@/assets/music_placeholder.jpg";
import Img3 from "@/assets/world_salad.jpg";
import Img4 from "@/assets/teaching.jpg";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State[cite: 11, 12]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Professional Booking",
    message: "",
  });

  // Validation Errors State[cite: 11, 12]
  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors as user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = { email: "", message: "" };

    // Validation Check
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.message.length < 20) {
      newErrors.message = "Minimum 20 characters required.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // --- REAL EMAIL API INTEGRATION ---
      const response = await fetch("https://formspree.io/f/xojzdoyr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        // Agar email successfully send ho jaye
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "Professional Booking",
          message: "",
        });

        // Success message 5 second baad hide karne ke liye
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Oops! Kuch galat ho gaya, message send nahi hua.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 md:pb-0">
      {/* --- HEADER --- */}
      <section className="pt-24 md:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          {/* Mobile Badge[cite: 12] */}
          <div className="md:hidden inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full text-green-700 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>{" "}
            Available
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            <span className="md:hidden">Let's Create Together</span>
            <span className="hidden md:block">Get in Touch</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            <span className="md:hidden">
              Whether you're looking for an actor, a musician, or a creative
              consultant, I'd love to hear about your vision.
            </span>
            <span className="hidden md:block">
              Whether you're looking to book a performance, inquire about
              workshops, or just want to say hello, I'd love to hear from you.
            </span>
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: DIRECT INQUIRY FORM[cite: 11] */}
          <div className="lg:col-span-7">
            <div className="mb-8 hidden md:block">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Direct Inquiry
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Please use the form below for all non-management inquiries. I
                typically respond within 2-3 business days. If your request is
                urgent, please indicate it in the subject line.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
              {/* Success State Overlay */}
              <div
                className={`absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 ${isSuccess ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Thank you for reaching out. I will get back to you within a
                  few business days.
                </p>
              </div>

              <div className="mb-8 hidden md:block">
                <span className="text-[10px] font-bold text-violet-600 tracking-wider uppercase border border-violet-200 bg-violet-50 px-2 py-1 rounded-md">
                  Inquiry Form
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-1">
                  Send a Message
                </h3>
                <p className="text-sm text-gray-500">
                  For project collaborations, teaching workshops, or general
                  inquiries, please fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full text-black px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-violet-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-semibold mb-2 ${errors.email ? "text-red-600" : "text-gray-900"}`}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={
                          errors.email ? "jane.doe@invalid" : "jane@example.com"
                        }
                        className={`w-full px-4 py-3 rounded-xl text-black border outline-none transition-all ${
                          errors.email
                            ? "border-red-500 text-red-600 focus:ring-2 focus:ring-red-500 bg-red-50"
                            : "border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                        }`}
                      />
                      {errors.email && (
                        <ShieldAlert
                          size={18}
                          className="absolute right-4 top-3.5 text-red-500"
                        />
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-2 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Dropdown[cite: 11, 12] */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Inquiry Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  text-black rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-violet-600 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="Professional Booking">
                      Professional Booking
                    </option>
                    <option value="Collaboration Inquiry">
                      Collaboration Inquiry
                    </option>
                    <option value="Teaching & Workshops">
                      Teaching & Workshops
                    </option>
                    <option value="Translation/Subtitling">
                      Translation / Subtitling
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea[cite: 11, 12] */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    maxLength={500}
                    className={`w-full text-black px-4 py-3 rounded-xl border outline-none transition-all resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
                    }`}
                  ></textarea>
                  <div className="flex justify-between items-center mt-2">
                    <p
                      className={`text-xs ${errors.message ? "text-red-500 font-medium" : "text-gray-500"}`}
                    >
                      {errors.message || "Minimum 20 characters required."}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      {formData.message.length} / 500
                    </p>
                  </div>
                </div>

                {/* Submit Button[cite: 11, 12] */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3.5 bg-violet-600 text-white text-sm font-bold rounded-xl md:rounded-lg hover:bg-violet-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR[cite: 11] */}
          <div className="lg:col-span-5 space-y-6">
            {/* Mobile Divider "OR"[cite: 12] */}
            <div className="md:hidden flex items-center gap-4 my-8">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                OR
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* Representation Card[cite: 11, 12] */}
            <div className="bg-violet-50 border border-violet-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <span className="text-[10px] font-bold text-violet-600 tracking-widest uppercase mb-2 block">
                Professional Representation
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Represented by JK's Management
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 text-violet-600 shadow-sm border border-violet-100">
                    <MonitorPlay size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Acting & Voiceover
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Lead Talent Agency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 text-violet-600 shadow-sm border border-violet-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <a
                      href="mailto:info@jksperformanceacademy.co.uk"
                      className="text-sm font-bold text-gray-900 hover:text-violet-600 transition-colors"
                    >
                      info@jksperformanceacademy.co.uk
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Direct Email</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 text-violet-600 shadow-sm border border-violet-100">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Spotlight PIN
                    </p>
                    <p className="text-xs text-gray-500 mt-1">9492-8979-9003</p>
                  </div>
                </div>
              </div>

              {/* Mobile split buttons[cite: 12] vs Desktop full button[cite: 11] */}
              <div className="flex gap-3">
                <a
                  href="mailto:info@jksperformanceacademy.co.uk"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Mail size={16} className="md:hidden" />{" "}
                  <span className="md:hidden">Email</span>
                  <span className="hidden md:block">Contact Management</span>
                </a>
              </div>
            </div>

            {/* Direct Socials Card[cite: 11] */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 block">
                Direct Socials
              </span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/francesca-dimech-05251435/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-violet-600 hover:text-violet-600 text-sm font-bold text-gray-700 transition-colors"
                >
                  <p>Linkedin </p>
                </a>
                <a
                  href="https://www.instagram.com/misswordsalad"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:border-violet-600 hover:text-violet-600 text-sm font-bold text-gray-700 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Mailing List Card[cite: 11] */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Join the Mailing List
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Stay updated on new performances, classes, and releases.
              </p>
              <form
                className="relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-violet-600 outline-none text-sm pr-12 text-black"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="absolute right-2 top-2 bottom-2 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-violet-600 hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM IMAGE GRID[cite: 11] --- */}
      <section className="hidden md:block pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={Img1}
                alt="Acting Portfolio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 translate-y-8">
              <Image
                src={Img2}
                alt="Studio Work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={Img3}
                alt="Live Performance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 translate-y-8">
              <Image
                src={Img4}
                alt="Voiceover Mic"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
