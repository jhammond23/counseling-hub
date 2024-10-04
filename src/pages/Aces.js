import React, { useState } from 'react';
import './Aces.css';

const questions = [
    "Did a parent or other adult in the household often or very often… a) Swear at you, insult you, put you down, or humiliate you? or b) Act in a way that made you afraid that you might be physically hurt?",
    "Did a parent or other adult in the household often or very often… a) Push, grab, slap, or throw something at you? or b) Ever hit you so hard that you had marks or were injured?",
    "Did an adult or person at least 5 years older than you ever… a) Touch or fondle you or have you touch their body in a sexual way? or b) Attempt or actually have oral, anal, or vaginal intercourse with you?",
    "Did you often or very often feel that … a) No one in your family loved you or thought you were important or special? or b) Your family didn’t look out for each other, feel close to each other, or support each other?",
    "Did you often or very often feel that … a) You didn’t have enough to eat, had to wear dirty clothes, and had no one to protect you? or b) Your parents were too drunk or high to take care of you or take you to the doctor if you needed it?",
    "Were your parents ever separated or divorced?",
    "Was your parent/caregiver: a) Often or very often pushed, grabbed, slapped or had something thrown at him/her? or b) Sometimes, often, or very often kicked, bitten, hit with a fist, or hit with something hard? or c) Ever repeatedly hit over at least a few minutes or threatened with a gun or knife?",
    "Did you live with anyone who was a problem drinker or alcoholic, or who used street drugs?",
    "Was a household member depressed or mentally ill, or did a household member attempt suicide?",
    "Did a household member go to prison?"
];

const Aces = () => {
    // Initialize answers with null for unanswered questions
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const score = answers.reduce((acc, curr) => acc + (curr === 'Yes' ? 1 : 0), 0);

    return (
        <div className="aces-container">
                                <h1>ACEs Exam</h1>
                    <div className="aces-explanation">
                        <h2>About the ACEs Exam</h2>
                        <p>
                            The Adverse Childhood Experiences (ACEs) exam is a tool used to identify
                            early incidents of trauma. It consists of ten questions that cover various
                            domains of abuse, neglect, and household dysfunction experienced before the
                            age of 18. The ACEs score, which is a tally of each 'Yes' response, helps
                            to assess the cumulative effect of these experiences on a person's health
                            and well-being.
                        </p>
                        <p>
                            Research has shown that higher ACEs scores correlate with a range of
                            adverse health outcomes, including chronic diseases, mental illness, and
                            substance misuse in adulthood. Understanding your ACEs score is a step
                            towards recognizing the impact of childhood experiences on lifelong health.
                        </p>
                        <p>
                            For more resources and support, please visit:
                            <ul>
                                <li><a href="https://www.cdc.gov/violenceprevention/aces/resources.html" target="_blank" rel="noopener noreferrer">CDC's Resource Page</a></li>
                                <li><a href="https://www.acestoohigh.com/" target="_blank" rel="noopener noreferrer">ACEs Too High</a></li>
                                <li><a href="https://www.childwelfare.gov/topics/preventing/preventionmonth/resources/ace/" target="_blank" rel="noopener noreferrer">Child Welfare Information Gateway</a></li>
                            </ul>
                        </p>
                    </div>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <h2 className='testHeader'>Take the Test</h2>
                    {questions.map((question, index) => (
                        <div key={index} className="question">
                            <p>{question}</p>
                            <div className='checkboxes'>
                                <label>
                                    <input
                                        type="radio"
                                        name={'question-' + index}
                                        value="Yes"
                                        checked={answers[index] === 'Yes'}
                                        onChange={() => handleOptionChange(index, 'Yes')}
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={'question-' + index}
                                        value="No"
                                        checked={answers[index] === 'No'}
                                        onChange={() => handleOptionChange(index, 'No')}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    ))}
                    <button className='aces-submit-btn' type="submit">Submit</button>
                </form>
            ) : (
                <div className="results">
                    <h1>Your ACEs Score</h1>
                    <p className='aces-score'>{`Your score is: ${score}`}</p>
                    {/* Adding more information about the score interpretation */}
                    <div className="score-interpretation">
                        {score === 0 && <p>A score of 0 indicates no exposure to the adverse childhood experiences surveyed.</p>}
                        {score >= 1 && score <= 3 && (
                            <p>A score between 1 and 3 suggests some exposure to adverse experiences. It's important to consider how these experiences may impact your life and to seek support if needed.</p>
                        )}
                        {score >= 4 && (
                            <p>A score of 4 or higher indicates a significant exposure to adverse childhood experiences. Higher scores are associated with a greater risk of health and social issues. Seeking support from a healthcare professional can be beneficial.</p>
                        )}
                        <p>For more detailed information and support, please visit the resources listed at the top of this page.</p>
                        <a href='/' className='retake-test test-buttons'>Go Home</a>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Aces;