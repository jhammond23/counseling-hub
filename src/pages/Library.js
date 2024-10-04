import React from 'react';
import './Library.css'; // Make sure to update Library.css with the new styles

const Library = () => {
    const resources = [
        { url: '/guided-meditation', title: 'Guided Meditations' },
        { url: '/video-resources', title: 'Video Resources' },
        { url: '/reading-resources', title: 'Reading Resources' },
        { url: '/national-resources', title: 'National Resources' },
        { url: '/how-to-find-a-therapist', title: 'How to Find a Therapist' },
        { url: '/free-assessments', title: 'Free Assessments' },
    ];

    return (
        <div className='bookshelf'>
            <div className="resource-grid">
                {resources.map((resource, index) => (
                    <a key={index} href={resource.url} className="resource-tile">
                        <div className="resource-title">{resource.title}</div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Library;
