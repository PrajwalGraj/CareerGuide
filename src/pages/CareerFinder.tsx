import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { SkillRating } from '../components/SkillRating';
import { CareerRecommendation } from '../components/CareerRecommendation';
import { skills, careerData } from '../data/careers';
import { findTopCareerMatches } from '../utils/careerMatcher';

export function CareerFinder() {
  const [ratings, setRatings] = useState<number[]>(new Array(skills.length).fill(1));
  const [recommendations, setRecommendations] = useState<Array<{ career: string; similarity: number }>>([]);

  const handleRatingChange = (index: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matches = findTopCareerMatches(ratings, careerData);
    setRecommendations(matches);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <GraduationCap className="h-12 w-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Career Path Finder
        </h1>
        <p className="text-lg text-gray-600">
          Rate your skills and discover your ideal career paths
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillRating
              key={skill}
              skill={skill}
              value={ratings[index]}
              onChange={(value) => handleRatingChange(index, value)}
            />
          ))}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Find My Career Paths
          </button>
        </div>
      </form>

      <CareerRecommendation matches={recommendations} />
    </div>
  );
}