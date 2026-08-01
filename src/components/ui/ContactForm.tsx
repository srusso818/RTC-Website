"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!siteConfig.form.endpoint) {
      alert("Form endpoint is not configured. Please email us directly.");
      return;
    }
    
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    
    // Add Web3Forms access key
    if (siteConfig.form.web3formsKey) {
      formData.append("access_key", siteConfig.form.web3formsKey);
    }
    
    try {
      const response = await fetch(siteConfig.form.endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-slate-950/60 backdrop-blur-md border border-white/15 text-white p-8 rounded-lg text-center shadow-lg shadow-black/20">
        <h3 className="text-2xl font-bold mb-2">Message Sent Successfully</h3>
        <p className="mb-6 text-gray-300">Thank you for reaching out. We will review your request and get back to you shortly.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="border-[var(--color-rtc-blue)] text-[var(--color-rtc-blue)] hover:bg-[var(--color-rtc-blue)] hover:text-white">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam prevention */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Name <span className="text-red-500">*</span></label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Company or Organization</label>
          <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Email <span className="text-red-500">*</span></label>
          <input required type="email" id="email" name="email" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Preferred Contact Method</label>
          <select id="preferredContact" name="preferredContact" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors">
            <option value="Email" className="bg-[#022c16]">Email</option>
            <option value="Phone" className="bg-[#022c16]">Phone</option>
          </select>
        </div>
        <div>
          <label htmlFor="serviceNeeded" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Service Needed</label>
          <select id="serviceNeeded" name="serviceNeeded" className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none transition-colors">
            <option value="" className="bg-[#022c16]">Select a service...</option>
            <option value="IT Consulting" className="bg-[#022c16]">IT Consulting</option>
            <option value="Managed IT Support" className="bg-[#022c16]">Managed IT Support</option>
            <option value="Cybersecurity" className="bg-[#022c16]">Cybersecurity</option>
            <option value="Microsoft 365" className="bg-[#022c16]">Microsoft 365</option>
            <option value="Networking" className="bg-[#022c16]">Networking</option>
            <option value="Servers and Virtualization" className="bg-[#022c16]">Servers and Virtualization</option>
            <option value="Backup and Disaster Recovery" className="bg-[#022c16]">Backup and Disaster Recovery</option>
            <option value="Mobile Device Management" className="bg-[#022c16]">Mobile Device Management</option>
            <option value="Website Services" className="bg-[#022c16]">Website Services</option>
            <option value="Technology Project" className="bg-[#022c16]">Technology Project</option>
            <option value="Other" className="bg-[#022c16]">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-rtc-blue)] mb-1">Message <span className="text-red-500">*</span></label>
        <textarea required id="message" name="message" rows={5} className="w-full px-4 py-2 border border-white/10 bg-slate-950/50 text-white rounded-md focus:ring-2 focus:ring-[var(--color-rtc-blue)] focus:border-[var(--color-rtc-blue)] outline-none resize-y transition-colors"></textarea>
      </div>

      <div className="flex items-start">
        <input required type="checkbox" id="consent" name="consent" className="mt-1 mr-3 h-4 w-4 text-[var(--color-rtc-blue)] bg-slate-950/50 border-white/10 rounded focus:ring-2 focus:ring-[var(--color-rtc-blue)]" />
        <label htmlFor="consent" className="text-sm text-gray-400 leading-relaxed">
          I consent to being contacted by Russo Technology Consulting regarding my inquiry. Submitting this form does not create a client relationship or guarantee immediate support.
        </label>
      </div>

      {status === "error" && (
        <div className="bg-red-950/80 backdrop-blur-md border border-red-500/50 text-white p-4 rounded-md text-sm shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          There was an error sending your message. Please verify your connection or try again later. If the problem persists, please email us directly.
        </div>
      )}

      <Button type="submit" disabled={status === "submitting"} size="lg" className="w-full md:w-auto font-bold bg-[var(--color-rtc-blue)] text-white hover:bg-[var(--color-rtc-blue-dark)]">
        {status === "submitting" ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
}
