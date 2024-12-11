import React from 'react';
import { Brain, Target, Code } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CareerGuide AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your intelligent career guidance system powered by advanced algorithms and data analysis
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Brain className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Smart Analysis</h3>
          <p className="text-gray-600 text-center">
            Using cosine similarity algorithm to match your skills with ideal career paths
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Precise Matching</h3>
          <p className="text-gray-600 text-center">
            17 different skill factors analyzed to find your perfect career match
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Code className="h-12 w-12 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Advanced Tech</h3>
          <p className="text-gray-600 text-center">
            Built with modern web technologies for accurate and fast results
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Overview</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Algorithm</h3>
            <p className="text-gray-600">
              The system uses the Cosine Similarity algorithm to calculate the similarity between a user's skill ratings and predefined career profiles. This algorithm measures the cosine of the angle between two vectors in a multi-dimensional space, providing a similarity score between -1 and 1.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
            <p className="text-gray-600">
              Built using React and TypeScript, the application features:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>17-dimensional skill vector analysis</li>
              <li>Real-time calculation and matching</li>
              <li>Top 3 career recommendations with match percentages</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Type-safe implementation with TypeScript</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
            <p className="text-gray-600">
              The system processes user input through these steps:
            </p>
            <ol className="list-decimal ml-6 mt-2 text-gray-600">
              <li>Collect user ratings across 17 different skills</li>
              <li>Convert ratings to numerical values (1-9 scale)</li>
              <li>Calculate similarity scores with predefined career vectors</li>
              <li>Sort and select top 3 matches</li>
              <li>Convert similarity scores to percentages</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}