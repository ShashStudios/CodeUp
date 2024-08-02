'use client'
import React, { useState } from 'react';
import Card from './Card';

const cardData = {
    python: [
        {
            title: 'Warm Up',
            description: 'Simple exercises to get started.',
            badgeText: 'Easy',
            badges: ['Loops']
        },
        {
            title: 'Warm Up',
            description: 'Intermediate warm-up challenges.',
            badgeText: 'Medium',
            badges: ['String', 'List', 'Loops']
        },
        {
            title: 'List',
            description: 'Basic list handling tasks.',
            badgeText: 'Easy',
            badges: ['No Loops']
        },
        {
            title: 'List',
            description: 'Advanced list operations.',
            badgeText: 'Medium',
            badges: ['Loops']
        },
        {
            title: 'Logic',
            description: 'Basic logical operations.',
            badgeText: 'Easy',
            badges: ['If Else', 'And Or Not']
        },
        {
            title: 'Logic',
            description: 'Complex logical challenges.',
            badgeText: 'Medium',
            badges: ['If Else', 'And Or Not']
        },
        {
            title: 'String',
            description: 'Basic string manipulations.',
            badgeText: 'Easy',
            badges: ['String']
        },
        {
            title: 'String',
            description: 'Advanced string tasks.',
            badgeText: 'Medium',
            badges: ['String', 'Loops']
        }
    ],
    java: [
        {
            title: 'Warm Up-1',
            description: 'Simple warmup problems to get started (solutions available).',
            badgeText: 'Easy',
            badges: ['Loops']
        },
        {
            title: 'Warm Up-2',
            description: 'Medium warmup string/array loops (solutions available).',
            badgeText: 'Medium',
            badges: ['String', 'List', 'Loops']
        },
        {
            title: 'String-1',
            description: 'Basic string problems -- no loops.',
            badgeText: 'Easy',
            badges: ['String']
        },
        {
            title: 'Array-1',
            description: 'Basic array problems -- no loops.',
            badgeText: 'Easy',
            badges: ['No Loops']
        },
        {
            title: 'Logic-1',
            description: 'Basic boolean logic puzzles -- if else && || !',
            badgeText: 'Easy',
            badges: ['If Else', 'And Or Not']
        },
        {
            title: 'Logic-2',
            description: 'Medium boolean logic puzzles -- if else && || !',
            badgeText: 'Medium',
            badges: ['If Else', 'And Or Not']
        },
        {
            title: 'String-2',
            description: 'Medium String problems -- 1 loop.',
            badgeText: 'Medium',
            badges: ['String', 'Loops']
        },
        {
            title: 'String-3',
            description: 'Harder String problems -- 2 loops.',
            badgeText: 'Hard',
            badges: ['String', 'Loops']
        },
        {
            title: 'Array-2',
            description: 'Medium array problems -- 1 loop.',
            badgeText: 'Medium',
            badges: ['Loops']
        },
        {
            title: 'Array-3',
            description: 'Harder array problems -- 2 loops, more complex logic.',
            badgeText: 'Hard',
            badges: ['Loops']
        },
        {
            title: 'AP-1',
            description: 'AP CS medium problems.',
            badgeText: 'Medium',
            badges: ['AP CS']
        },
        {
            title: 'Recursion-1',
            description: 'Basic recursion problems.',
            badgeText: 'Easy',
            badges: ['Recursion']
        },
        {
            title: 'Recursion-2',
            description: 'Harder recursion problems.',
            badgeText: 'Hard',
            badges: ['Recursion']
        },
        {
            title: 'Map-1',
            description: 'Basic Map get()/put(), no loops.',
            badgeText: 'Easy',
            badges: ['Map']
        },
        {
            title: 'Map-2',
            description: 'Maps with bulk data and loops.',
            badgeText: 'Medium',
            badges: ['Map', 'Loops']
        },
        {
            title: 'Functional-1',
            description: 'Functional mapping operations on lists with lambdas.',
            badgeText: 'Medium',
            badges: ['Functional', 'Lambdas']
        },
        {
            title: 'Functional-2',
            description: 'Functional filtering and mapping operations on lists with lambdas.',
            badgeText: 'Hard',
            badges: ['Functional', 'Lambdas']
        }
    ]
};

const CardGrid: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java'>('python');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    const currentCards = cardData[selectedLanguage].slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    const totalPages = Math.ceil(cardData[selectedLanguage].length / cardsPerPage);

    return (
        <div className="container mx-auto px-4 py-6">
            <div role="tablist" className="tabs-lg tabs-boxed mb-4 inline-flex">
                <a
                    role="tab"
                    className={`tab ${selectedLanguage === 'python' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedLanguage('python')}
                >
                    <h2>Python</h2>
                </a>
                <a
                    role="tab"
                    className={`tab ${selectedLanguage === 'java' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedLanguage('java')}
                >
                    <h2>Java</h2>
                </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {currentCards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        badgeText={card.badgeText}
                        badges={card.badges}
                    />
                ))}
            </div>

            <div className="join mt-6 flex justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <input
                        key={index}
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label={`${index + 1}`}
                        checked={currentPage === index + 1}
                        onChange={() => setCurrentPage(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
