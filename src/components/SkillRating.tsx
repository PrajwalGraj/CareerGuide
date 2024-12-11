import React from 'react';
import { ratings } from '../data/careers';

interface SkillRatingProps {
  skill: string;
  value: number;
  onChange: (value: number) => void;
}

export function SkillRating({ skill, value, onChange }: SkillRatingProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {skill}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 border rounded-md bg-white shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      >
        {ratings.map((rating) => (
          <option key={rating.value} value={rating.value}>
            {rating.label}
          </option>
        ))}
      </select>
    </div>
  );
}