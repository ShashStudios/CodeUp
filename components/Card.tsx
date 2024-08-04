'use client'; // Ensure this is a client component

import React from 'react';
import { useRouter } from 'next/navigation';

// Define badge class mappings
const badgeClassMap: { [key: string]: string } = {
  easy: 'badge-success',
  medium: 'badge-warning',
  hard: 'badge-error'
};

const Card: React.FC<CardProps> = ({ title, description, badgeText, badges, keyId }) => {
  const router = useRouter();

  // Function to get badge class
  const getBadgeClass = (badgeText: string) => {
    return badgeClassMap[badgeText.toLowerCase()] || 'badge-secondary';
  };

  // Navigate to the sandbox page with the specific keyId
  const handlePracticeClick = () => {
    router.push(`/sandbox?keyId=${keyId}`);
  };

  return (
    <div className="card bg-base-100 w-72 shadow-sm p-3 mb-4 mt-2">
      <div className="card-body space-y-3">
        <h2 className="card-title text-lg font-semibold flex items-center space-x-2">
          <span>{title}</span>
          <div className={`badge ${getBadgeClass(badgeText)} text-xs`}>
            {badgeText}
          </div>
        </h2>
        <p className="text-sm text-left">{description}</p>
        <div className="card-actions flex flex-col space-y-2 mt-2">
          <div className="flex flex-wrap space-x-2">
            {badges.map((badge, index) => (
              <div key={index} className="badge badge-outline text-xs">
                {badge}
              </div>
            ))}
          </div>
          <button
            className="btn btn-accent btn-md self-start"
            onClick={handlePracticeClick}
          >
            Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

