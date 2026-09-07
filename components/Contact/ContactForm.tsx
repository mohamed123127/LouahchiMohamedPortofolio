"use client";

import { useState, useRef } from "react";
import { FiSend, FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SendingResultType = "success" | "error" | "warning" | null;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendingResult, setSendingResult] = useState<{
    message: string;
    type: SendingResultType;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const newErrors = validateForm(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, subject: true, message: true });

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSendingResult({
        message: "Please fill in all required fields correctly.",
        type: "warning",
      });
      return;
    }

    setSending(true);
    setSendingResult(null);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          "service_m902cbx",
          "template_umc0v38",
          formRef.current,
          "A1JMLTnXZN_GblJm_"
        );
      }
      setSending(false);
      setSubmitted(true);
      setSendingResult({
        message: "Thank you! Your email was sent successfully!",
        type: "success",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error("Email sending error:", error);
      setSending(false);
      setSendingResult({
        message:
          "Something went wrong while sending your message. Please send it directly to our email: mohamedlouahchi9@gmail.com",
        type: "error",
      });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-4 gap-3.5">
        <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center text-green-500">
          <FiCheckCircle size={28} />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Message Sent!
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Thank you! Your email was sent successfully! I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSendingResult(null);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setErrors({});
            setTouched({});
          }}
          className="mt-2 inline-flex items-center gap-2 bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-[var(--input)] border rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-[var(--input-border)]"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <FiAlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-[var(--input)] border rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-[var(--input-border)]"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <FiAlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full bg-[var(--input)] border rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 cursor-pointer ${errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-[var(--input-border)]"
            }`}
        >
          <option value="">Select a subject</option>
          <option value="Project Collaboration">Project Collaboration</option>
          <option value="Freelance Work">Freelance Work</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <FiAlertCircle size={12} /> {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full bg-[var(--input)] border rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 resize-y min-h-[110px] ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-[var(--input-border)]"
            }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <FiAlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      {/* Result Status Message */}
      {sendingResult && (
        <p
          className={`text-xs text-center font-medium ${sendingResult.type === "success"
              ? "text-green-500"
              : sendingResult.type === "error"
                ? "text-red-500"
                : "text-amber-500"
            }`}
        >
          {sendingResult.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-75"
      >
        {sending ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
            Sending...
          </>
        ) : (
          <>
            <FiSend size={15} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
