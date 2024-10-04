import React, { useState, useEffect } from 'react';
import './DailyActivities.css';

const dailyActivities = [
    "Practice mindfulness meditation; spend 10-20 minutes a day focusing on your breath, bodily sensations, or a specific mantra.",
    "Practice using 5-4-3-2-1 technique: identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell and 1 thing you can taste.",
    "Spend 10-15 minutes journaling about your thoughts and feelings today.",
    "Progressive muscle relaxation; Tense and then relax different muscle groups in your body, starting from your feet and working your way up to your head.",
    "Guided imagery; Imagine a safe, peaceful place or a positive memory in vivid detail for a few minutes today.",
    "Gratitude practice; Write down three things you are grateful for each day.",
    "Engage in a physical activity for at least 30 minutes today.",
    "Identify and minimize exposure to situations that activate traumatic responses.",
    "Spend time engaging in creative activities such as drawing, painting, writing poetry, or playing music.",
    "Practice spending time with friends or family members, whether in person or virtually.",
    "Engage with books, podcasts, or videos that focus on healing from trauma and offer positive, empowering messages.",
    "Paint one of your experiences that taught you something about yourself.",
    "Draw feelings down on a piece of paper that shows how we express our feelings.",
    "When you feel very sad, scared, mad, or worried, what are some things you can do to feel better?",
    "Practice awareness by catching the negative thought early and interrupting it.",
    "Tell your story: Make your own book, poem, cartoon strip, etc.",
    "Reflect on your thoughts and feelings about the event.",
    "Draw or write down a few of your trauma reminders.",
    "How would you feel about sharing your story with someone trusting?",
    "Draw a picture of what you do to keep yourself safe.",
    "What are some goals, dreams, aspirations you have for yourself in the future?"
];

const backgroundClasses = [
    'bg-texturedBackground1',
    'bg-texturedBackground2',
    'bg-texturedBackground3',
    'bg-texturedBackground4',
    'bg-texturedBackground5',
    'bg-texturedBackground6',
    'bg-texturedBackground7',
    'bg-texturedBackground8',
    'bg-texturedBackground9',
    'bg-texturedBackground10'
];

const DailyActivities = () => {
    const [currentActivity, setCurrentActivity] = useState(0);
    const [backgroundClass, setBackgroundClass] = useState('');

    useEffect(() => {
        const today = new Date().getDay();
        setCurrentActivity(today % dailyActivities.length);
        setRandomBackground();
    }, []);

    const setRandomBackground = () => {
        const randomIndex = Math.floor(Math.random() * backgroundClasses.length);
        setBackgroundClass(backgroundClasses[randomIndex]);
    };

    const handleNextActivity = () => {
        setCurrentActivity((currentActivity + 1) % dailyActivities.length);
        setRandomBackground(); // Change background when activity changes
    };

    return (
        <div className={`daily-activities-container ${backgroundClass}`}>
            <div className="daily-activities-content">
                <div className="daily-activity-box">
                    <div className="daily-activities-title">Today's Focus</div>
                    <div className="daily-activities-description">
                        Focusing on one activity at a time allows you to fully engage with the task, helping to build mindfulness and reduce stress. It can also enhance your sense of accomplishment and encourage a deeper connection with your thoughts and feelings.
                    </div>
                    <div className="daily-activity-divider"></div>
                    <div className="daily-activity">
                        <strong>{dailyActivities[currentActivity]}</strong>
                    </div>
                </div>
                <button className="daily-activities-button" onClick={handleNextActivity}>
                    Next Activity
                </button>
            </div>
        </div>
    );
};

export default DailyActivities;
