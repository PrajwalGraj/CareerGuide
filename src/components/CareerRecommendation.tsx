import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

interface CareerMatch {
  career: string;
  similarity: number;
}

interface CareerRecommendationProps {
  matches: CareerMatch[];
}

const RANK_ICONS = [
  { icon: Trophy, color: 'text-yellow-500' },
  { icon: Award, color: 'text-gray-400' },
  { icon: Medal, color: 'text-amber-600' }
];

export function CareerRecommendation({ matches }: CareerRecommendationProps) {
  if (!matches.length) return null;

  return (
    <div className="mt-8 bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Your Top Career Matches
      </h2>
      <div className="space-y-4">
        {matches.map((match, index) => {
          const Icon = RANK_ICONS[index].icon;
          return (
            <div
              key={match.career}
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`mr-4 ${RANK_ICONS[index].color}`}>
                <Icon size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">
                  {match.career}
                </h3>
                <p className="text-sm text-gray-600">
                  Match Score: {match.similarity}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}