import { useState } from 'react';

export default function EmailForm() {
  const [to, setTo] = useState("");  
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    // Call API
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}  
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}  
      />
      <textarea 
        rows="3"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}  
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  )
}