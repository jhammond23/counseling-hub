import React from 'react';
import './AboutPage.css'; // Import the new styles

const About = () => {
  return (
    <main className='aboutPage cozyBackground'>
        <header className='aboutHeader'>
            <h1 className='cozyTitle'>About Mirandus Hub</h1>
        </header>
        <div className='aboutContentCont'>
            <p>
              Welcome to SAVE, a dedicated space created to support transgender individuals who face significant barriers to accessing mental health care. We recognize the challenges that many transgender people encounter when seeking affirming, compassionate mental health services—whether it’s due to systemic barriers, stigma, lack of specialized care, or financial constraints. Our mission is to bridge this gap by providing an inclusive platform where transgender individuals can find the resources, tools, and support they need to improve their mental well-being.
            </p>
            <p>
              We created SAVE because we believe that mental health care should be accessible to everyone, regardless of gender identity. We understand the unique experiences and struggles that transgender individuals face, from discrimination and social isolation to navigating complex healthcare systems. Our platform offers a range of mental health resources designed specifically with the needs of the transgender community in mind, including self-help guides, therapeutic exercises, coping strategies, and connections to affirming care providers.
            </p>
            <p>
              By using SAVE, you can take control of your mental health journey. Our tools and resources are designed to help you manage daily stressors, build resilience, and enhance your emotional well-being. Whether you're dealing with anxiety, depression, trauma, or simply seeking ways to improve your mental health, SAVE is here to offer practical, accessible solutions that can help you lead a more balanced and fulfilling life. Our goal is to empower you with the support and knowledge you deserve—because your mental health matters.
            </p>
            <p>
              Together, we can create a space where transgender individuals are seen, heard, and valued. Welcome to your community of care.
            </p>
        </div>
    </main>
  );
}

export default About;
