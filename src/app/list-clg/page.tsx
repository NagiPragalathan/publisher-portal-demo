'use client';

import { useState, useEffect } from 'react';

interface Institute {
  institute: {
    institute: {
      name: string;
      website: string;
      city: string;
      state: string;
    };
    institute_nirf_data: {
      tlr: number;
      rp: number;
      go: number;
      oi: number;
    };
  };
  score: number;
}

export default function RankingResults() {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const stored_data = JSON.parse(localStorage.getItem('form_data') || '{}');
        
        const response = await fetch('https://edulot-api.netlify.app/ranker', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            state: stored_data.state,
            city: stored_data.city,
            rankingType: stored_data.rankingType,
            researchScore: stored_data.researchScore,
            theoryScore: stored_data.Theory,
            campusLifeScore: stored_data.campusLifeScore,
            internationalExposureScore: stored_data.internationalExposureScore,
            placementRecordScore: stored_data.placementRecordScore,
            academicScore: stored_data.academicScore,
            infrastructureScore: stored_data.infrastructureScore,
            researchOpportunitiesScore: stored_data.researchOpportunitiesScore,
            industryConnectionScore: stored_data.industryConnectionScore,
            costEffectivenessScore: stored_data.costEffectivenessScore,
            influenceFactor: stored_data.influenceFactor
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch rankings');
        }

        const data = await response.json();
        setInstitutes(data);
      } catch (err) {
        setError('Failed to fetch rankings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-center p-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">College Rankings</h1>
      <div className="grid gap-6">
        {institutes.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  {item.institute.institute.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  {item.institute.institute.city}, {item.institute.institute.state}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {item.score.toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">Score</div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">TLR</div>
                <div>{item.institute.institute_nirf_data.tlr.toFixed(2)}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">RP</div>
                <div>{item.institute.institute_nirf_data.rp.toFixed(2)}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">GO</div>
                <div>{item.institute.institute_nirf_data.go.toFixed(2)}</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">OI</div>
                <div>{item.institute.institute_nirf_data.oi.toFixed(2)}</div>
              </div>
            </div>

            <div className="mt-4">
              <a 
                href={item.institute.institute.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
