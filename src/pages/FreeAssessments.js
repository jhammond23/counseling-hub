import React from 'react';
import './Library.css'; // Make sure to update Library.css with the new styles

const FreeAssessments = () => {
    const resources = [
        { url: '/aces-test', title: 'Aces Exam' },
        { url: '/anxiety-test', title: 'Anxiety Test' },

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

export default FreeAssessments;
