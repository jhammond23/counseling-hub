import React from 'react';

const VideoResources = () => {
    const categories = [
        {
            name: 'Anxiety',
            videos: [
                { title: 'What is an Anxiety Disorder?', url: 'https://www.youtube.com/watch?v=vtUdHOx494E' },
                { title: 'The Symptoms of PTSD', url: 'https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/symptoms' },
                { title: 'Defining PTSD and Trauma', url: 'https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/defining-ptsd-and-trauma' },
                { title: 'What is Post Traumatic Stress Disorder (PTSD)?', url: 'https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/what-is-posttraumatic-stress-disorder' },
                { title: 'Generalized Anxiety Disorder', url: 'https://www.khanacademy.org/science/health-and-medicine/mental-health/anxiety/v/generalized-anxiety-disorder' }
            ],
        },
        {
            "name": "Depression Management",
            "videos": [
                {
                    "title": "Understanding Depression: Symptoms, Causes and Treatments",
                    "url": "https://www.youtube.com/watch?v=d7NPnvKFs2Y"
                },
                {
                    "title": "Overview of depression | APA",
                    "url": "https://www.youtube.com/watch?v=bTD8oK9hHXY"
                },
                {
                    "title": "Depression Explained (Major Depressive Disorder)",
                    "url": "https://www.youtube.com/watch?v=tJQRsIbD110"
                },
                {
                    "title": "Personal Stories of Depression",
                    "url": "https://adaa.org/living-with-anxiety/personal-stories"
                },
                {
                    "title": "How To Cope With Depression",
                    "url": "https://www.youtube.com/watch?v=8Su5VtKeXU8&t=1s"
                }
            ]
        },
        {
            "name": "Stress Management",
            "videos": [
                {
                    "title": "Stress Management Strategies: Ways to Unwind",
                    "url": "https://www.youtube.com/watch?v=0fL-pn80s-c"
                },
                {
                    "title": "13 Stress Management Techniques",
                    "url": "https://www.youtube.com/watch?v=HB1snh5ArVw"
                },
                {
                    "title": "7 Stress Management Techniques to Get You Back on Track",
                    "url": "https://www.youtube.com/watch?v=C0GtbGFQgtU"
                },
                {
                    "title": "Stress Management - Khan Academy",
                    "url": "https://www.khanacademy.org/video/stress-management"
                },
                {
                    "title": "3-Minute Stress Management: Reduce Stress With This Short Activity",
                    "url": "https://www.youtube.com/watch?v=grfXR6FAsI8"
                }
            ]
        },

        {
            "name": "Trauma Management",
            "videos": [
                {
                    "title": "What is PTSD? (Whiteboard Video)",
                    "url": "https://www.youtube.com/watch?v=YMC2jt_QVEE&t=9s"
                },
                {
                    "title": "PTSD Treatment: Know Your Options",
                    "url": "https://www.youtube.com/watch?v=FeLLt39DI8A&t=10s"
                },
                {
                    "title": "Understanding PTSD",
                    "url": "https://www.youtube.com/watch?v=PszB2IlYZK4&t=1s"
                },
                {
                    "title": "7 Tips To Help Someone With PTSD | Mental Health 101 | Kati Morton",
                    "url": "https://www.youtube.com/watch?v=aLs0uCZOG8g"
                },
                {
                    "title": "6 Misconceptions of PTSD (post traumatic stress disorder) | Mental Health 101 | Kati Morton",
                    "url": "https://www.youtube.com/watch?v=rfg_J3ixYPk"
                }
            ]
        }
    ];

    return (
        <div className="bookshelf">
            <h1 className='header'>Video Resources</h1>
            <div className="resource-grid-style">
                {categories.map((category, index) => (
                    <div key={index}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.videos.map((video, idx) => (
                                <li key={idx}>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                                        {video.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoResources;
