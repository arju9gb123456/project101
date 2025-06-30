import React, { useState } from 'react';

export default function DreamCareerApp() {
  const [page, setPage] = useState(0);
  const pages = [
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🎯 FIND YOUR DREAM CAREER NOW</h1>
      <p>Self-assessment, Explore Career Options, Skill Mapping, Qualification, Mentorship, Goal Setting, and Suggestions.</p>
      <button onClick={() => setPage(1)}>Get Started</button>
    </div>,
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>🌐 Choose Your Preferred Language</h2>
      {['Hindi', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'English', 'Bengali'].map(lang => (
        <button key={lang} onClick={() => setPage(2)}>{lang}</button>
      ))}
    </div>,
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>📝 User Registration</h2>
      <input type="email" placeholder="Gmail" /><br/><br/>
      <input type="text" placeholder="Phone Number" /><br/><br/>
      <button onClick={() => setPage(3)}>Next</button>
    </div>,
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>🎓 Academic Qualification</h2>
      {['Highest Qualification', 'Branch Stream', 'University', 'Passing Year', '10th CGPA / %', '12th CGPA / %', 'Graduation CGPA / %', 'Any Diploma/Course', 'Backlogs (if any)'].map(field => (
        <div key={field}><input type="text" placeholder={field} /><br/><br/></div>
      ))}
      <button onClick={() => setPage(4)}>Proceed</button>
    </div>,
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>👥 Connect with Mentor</h2>
      <p>Chat, Voice Chat, Video Chat, and AI Tools for personalized guidance to shape your career path.</p>
      <button onClick={() => setPage(5)}>Next</button>
    </div>,
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>💼 Subscription Page</h2>
      <p>Unlock full career support with our Premium Plan including live mentor chats, video calls, and downloadable career roadmaps.</p>
      <button>Subscribe Now</button><br/><br/>
      <button onClick={() => setPage(0)}>Restart</button>
    </div>
  ];
  return <div>{pages[page]}</div>;
}