import React from 'react';
import './ReadingResources.css';

const ReadingResources = () => {
    const categories = [
        {
            name: 'Anxiety',
            resources: [
                { title: 'NIMH Resources on Anxiety', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
                { title: 'ADAA Resources', url: 'https://adaa.org/finding-help' },
                { title: 'Mental Health America Resources', url: 'https://mhanational.org/conditions/anxiety-disorders' },
                { title: 'ACA Resources', url: 'https://www.counseling.org/knowledge-center/mental-health-resources/anxiety' },
                { title: 'NAMI Resources', url: 'https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders' },
            ],
        },
        {
            name: 'Depression',
            resources: [
                { title: 'NIMH Resources on Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' },
                { title: 'Mayo Clinic Resources', url: 'https://www.mayoclinic.org/diseases-conditions/depression' },
                { title: 'MHA Resources on Depression', url: 'https://mhanational.org/conditions/depression' },
                { title: 'Verywell Mind Resources', url: 'https://www.verywellmind.com/depression-4157261' },
                { title: 'NAMI Resources on Depression', url: 'https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Depression' },
            ],
        },
        {
            name: 'Stress Management',
            resources: [
                { title: 'Mayo Clinic Stress Management Tips', url: 'https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/11-tips-for-coping-with-an-anxiety-disorder' },
                { title: 'MHA Resources on Stress', url: 'https://mhanational.org/stress' },
                { title: 'APA Stress Resources', url: 'https://www.apa.org/topics/stress' },
                { title: 'NIMH Resources on Stress', url: 'https://www.nimh.nih.gov/health/publications/stress' },
                { title: 'NHS Stress Resources', url: 'https://www.nhs.uk/oneyou/every-mind-matters/stress/' },
            ],
        },
        {
            name: 'PTSD',
            resources: [
                { title: 'Mayo Clinic - PTSD', url: 'https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967' },
                { title: 'NIMH - PTSD', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd' },
                { title: 'ADAA - PTSD', url: 'https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd' },
                { title: 'Mental Health America - PTSD', url: 'https://www.mhanational.org/conditions/post-traumatic-stress-disorder' },
                { title: 'NHS UK - PTSD', url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/' },
            ],
        },
        {
            name: 'Trauma',
            resources: [
                { title: 'National Sexual Assault Hotline: Confidential 24/7 Support | RAINN', url: 'https://rainn.org/resources' },
                { title: 'National Sexual Violence Resource Center', url: 'https://www.nsvrc.org/' },
                { title: 'Maryland Coalition Against Sexual Assault | MCASA', url: 'https://mcasa.org/survivors/other-resources' },
                { title: 'Survivor Support - Enough Abuse', url: 'https://enoughabuse.org/get-help/survivor-support/' },

            ],
        },
        {
            name: 'Identity',
            resources: [
                { title: 'Trans Health - Health and Fitness for Transgender People', url: 'https://www.trans-health.com/' },
                { title: 'Financial aid for gender-affirming healthcare by Point of Pride', url: 'https://www.pointofpride.org/annual-transgender-surgery-fund' },

            ],
        },
    ];


    return (
        <div className="bookshelf">
            <h1 className='header'>Reading Resources</h1>

            <div className="resource-grid-style">
                {categories.map((category, index) => (
                    <div key={index}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.resources.map((resource, idx) => (
                                <li key={idx}>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                        {resource.title}
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

export default ReadingResources;
