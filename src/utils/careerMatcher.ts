import { CareerData } from '../data/careers';

interface CareerMatch {
  career: string;
  similarity: number;
}

export function findTopCareerMatches(userRatings: number[], careerData: CareerData[], count: number = 3): CareerMatch[] {
  const matches: CareerMatch[] = careerData.map(career => ({
    career: career.career,
    similarity: calculateSimilarity(userRatings, career.ratings)
  }));

  // Sort by similarity score in descending order and get top matches
  return matches
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, count)
    .map(match => ({
      ...match,
      similarity: Math.round(match.similarity * 100) // Convert to percentage
    }));
}

function calculateSimilarity(userRatings: number[], careerRatings: number[]): number {
  let dotProduct = 0;
  let normUser = 0;
  let normCareer = 0;

  for (let i = 0; i < userRatings.length; i++) {
    dotProduct += userRatings[i] * careerRatings[i];
    normUser += userRatings[i] * userRatings[i];
    normCareer += careerRatings[i] * careerRatings[i];
  }

  return dotProduct / (Math.sqrt(normUser) * Math.sqrt(normCareer));
}