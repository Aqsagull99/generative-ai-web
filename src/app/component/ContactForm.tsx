"use client"

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} required />
      
      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} required />
      
      <label>Message</label>
      <textarea name="message" onChange={handleChange} required />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
