'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StudentSubject } from '@/lib/core/types';
import { calculateUniversityScores } from '@/lib/calculators/scoreCalculator';
import { universities } from '@/lib/data/universities/index';

const studentProfiles = [
  {
    id: 'excellent',
    name: 'Excellent Student',
    description: '8 subjects with mostly 5** and 5* grades, CSD Attained',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '5**',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '5*',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '5**',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Physics',
        abbreviation: 'PHY',
        grade: '5**',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chemistry',
        abbreviation: 'CHEM',
        grade: '5*',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Biology',
        abbreviation: 'BIO',
        grade: '5*',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Mathematics Extended Part Module 2',
        abbreviation: 'MATH-M2',
        grade: '5**',
      },
    ] as StudentSubject[],
  },
  {
    id: 'good',
    name: 'Good Student',
    description: '8 subjects with mix of 5, 4, and 3 grades, CSD Attained',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '5',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '4',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '5',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Physics',
        abbreviation: 'PHY',
        grade: '4',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chemistry',
        abbreviation: 'CHEM',
        grade: '4',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Economics',
        abbreviation: 'ECO',
        grade: '5',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Business, Accounting and Financial Studies',
        abbreviation: 'BAFS',
        grade: '3',
      },
    ] as StudentSubject[],
  },
  {
    id: 'average',
    name: 'Average Student',
    description: '8 subjects with mostly 3 and 2 grades, CSD Attained',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '3',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '3',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '3',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Geography',
        abbreviation: 'GEO',
        grade: '3',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'History',
        abbreviation: 'HIST',
        grade: '2',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Economics',
        abbreviation: 'ECO',
        grade: '3',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chinese History',
        abbreviation: 'CHIN-HIST',
        grade: '2',
      },
    ] as StudentSubject[],
  },
  {
    id: 'missing-csd',
    name: 'Missing CSD',
    description: 'Strong grades but CSD Not Attained',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '5*',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '5',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '5*',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Not Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Physics',
        abbreviation: 'PHY',
        grade: '5*',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chemistry',
        abbreviation: 'CHEM',
        grade: '5',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Biology',
        abbreviation: 'BIO',
        grade: '5',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Mathematics Extended Part Module 1',
        abbreviation: 'MATH-M1',
        grade: '5',
      },
    ] as StudentSubject[],
  },
  {
    id: 'mixed-performance',
    name: 'Mixed Performance',
    description: 'Strong in sciences, weak in languages',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '3',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '2',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '5**',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Physics',
        abbreviation: 'PHY',
        grade: '5**',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chemistry',
        abbreviation: 'CHEM',
        grade: '5*',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Information and Communication Technology',
        abbreviation: 'ICT',
        grade: '5*',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Mathematics Extended Part Module 2',
        abbreviation: 'MATH-M2',
        grade: '5**',
      },
    ] as StudentSubject[],
  },
  {
    id: 'business-stream',
    name: 'Business Stream',
    description: 'Arts and business subjects focus',
    subjects: [
      {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '5',
      },
      {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '4',
      },
      {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '4',
      },
      {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained',
      },
      {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Economics',
        abbreviation: 'ECO',
        grade: '5*',
      },
      {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Business, Accounting and Financial Studies',
        abbreviation: 'BAFS',
        grade: '5',
      },
      {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Geography',
        abbreviation: 'GEO',
        grade: '4',
      },
      {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'History',
        abbreviation: 'HIST',
        grade: '4',
      },
    ] as StudentSubject[],
  },
];

const universityInfo: Record<string, { name: string; abbr: string }> = {
  hku: { name: 'The University of Hong Kong', abbr: 'HKU' },
  cuhk: { name: 'The Chinese University of Hong Kong', abbr: 'CUHK' },
  hkust: { name: 'The Hong Kong University of Science and Technology', abbr: 'HKUST' },
  cityu: { name: 'City University of Hong Kong', abbr: 'CityU' },
  polyu: { name: 'The Hong Kong Polytechnic University', abbr: 'PolyU' },
  hkbu: { name: 'Hong Kong Baptist University', abbr: 'HKBU' },
  lingnan: { name: 'Lingnan University', abbr: 'LU' },
  eduhk: { name: 'The Education University of Hong Kong', abbr: 'EdUHK' },
};

export default function TestCalculatorPage() {
  interface ProgrammeResult {
    programme: {
      programmeDetails: {
        id: string;
        name: string;
        faculty?: string;
      };
      expectedScore?: number;
      method?: string;
    };
    totalScore: number;
    csdStatus: string;
    breakdown: Array<{
      subject: string;
      abbreviation: string;
      grade: string;
      rawScore: number;
      calculatedScore: number;
      variable?: string;
    }>;
    comments: Array<{
      message: string;
      type: 'error' | 'warning' | 'info';
    }>;
  }

  type UniversityResults = Record<string, ProgrammeResult[]>;

  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [results, setResults] = useState<UniversityResults | null>(null);
  const [activeTab, setActiveTab] = useState<string>('hku');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (profileId: string) => {
    setIsCalculating(true);
    setSelectedProfile(profileId);
    
    const profile = studentProfiles.find((p) => p.id === profileId);
    if (!profile) return;

    const calculationResults = calculateUniversityScores(universities, profile.subjects);
    
    setResults(calculationResults);
    setActiveTab('hku');
    setIsCalculating(false);
  };

  const getCommentColor = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'warning':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const formatBreakdown = (breakdown: ProgrammeResult['breakdown']) => {
    return breakdown.map((item, idx) => {
      const subjectInfo = `${item.subject} [${item.grade}]`;
      const label = item.variable || item.abbreviation;
      
      return (
        <div key={idx} className="mb-1">
          <span className="font-semibold">{label}</span>
          {' '}({item.calculatedScore.toFixed(1)}): {subjectInfo}
          {item.rawScore !== undefined && (
            <span className="text-gray-600 text-sm ml-1">
              [raw: {item.rawScore.toFixed(1)}]
            </span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto p-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-2">Score Calculator Test Page</h1>
      <p className="text-gray-600 mb-8">
        Select a student profile to calculate scores across all universities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {studentProfiles.map((profile) => (
          <Card
            key={profile.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedProfile === profile.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => handleCalculate(profile.id)}
          >
            <CardHeader>
              <CardTitle>{profile.name}</CardTitle>
              <CardDescription>{profile.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p className="font-semibold text-gray-700">Subjects:</p>
                {profile.subjects.map((subject) => (
                  <div key={subject.uuid} className="text-gray-600">
                    {subject.abbreviation}: {subject.grade}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {results && !isCalculating && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Results</h2>

          <div className="border-b border-gray-200 mb-4">
            <div className="flex flex-wrap gap-2">
              {universities.map((uni) => (
                <button
                  key={uni}
                  onClick={() => setActiveTab(uni)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === uni
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {universityInfo[uni]?.abbr || uni.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {universityInfo[activeTab]?.name || activeTab.toUpperCase()}
              </h3>

              {results[activeTab] && results[activeTab].length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b-2 border-gray-200">
                        <th className="text-left p-3 font-semibold">Programme</th>
                        <th className="text-left p-3 font-semibold w-32">Total Score</th>
                        <th className="text-left p-3 font-semibold">Score Breakdown</th>
                        <th className="text-left p-3 font-semibold">Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results[activeTab].map((programmeResult: ProgrammeResult, idx: number) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="p-3 align-top">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {programmeResult.programme.programmeDetails.id}
                              </div>
                              {programmeResult.programme.programmeDetails.name && (
                                <div className="text-sm text-gray-700 mt-1">
                                  {programmeResult.programme.programmeDetails.name}
                                </div>
                              )}
                              {programmeResult.programme.programmeDetails.faculty && (
                                <div className="text-sm text-gray-600 mt-1">
                                  {programmeResult.programme.programmeDetails.faculty}
                                </div>
                              )}
                              <div className="text-xs text-gray-500 mt-1">
                                CSD: {programmeResult.csdStatus}
                              </div>
                            </div>
                          </td>

                          <td className="p-3 align-top">
                            <div className="text-2xl font-bold text-blue-600">
                              {programmeResult.totalScore.toFixed(1)}
                            </div>
                            {programmeResult.programme.expectedScore && (
                              <div className="text-sm text-gray-600 mt-1">
                                Expected: {programmeResult.programme.expectedScore}
                              </div>
                            )}
                          </td>

                          <td className="p-3 align-top">
                            <div className="text-sm">
                              {programmeResult.breakdown.length > 0 ? (
                                formatBreakdown(programmeResult.breakdown)
                              ) : (
                                <div className="text-gray-500 italic">
                                  No breakdown available
                                </div>
                              )}
                            </div>
                          </td>

                          <td className="p-3 align-top">
                            {programmeResult.comments.length > 0 ? (
                              <div className="space-y-2">
                                {programmeResult.comments.map((comment, cIdx: number) => (
                                  <div
                                    key={cIdx}
                                    className={`text-sm px-3 py-2 rounded border ${getCommentColor(
                                      comment.type
                                    )}`}
                                  >
                                    <div className="font-semibold uppercase text-xs mb-1">
                                      {comment.type}
                                    </div>
                                    <div>{comment.message}</div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-gray-500 italic text-sm">
                                No comments
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No programmes available for this university
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isCalculating && (
        <div className="text-center py-12">
          <div className="text-xl text-gray-600">Calculating scores...</div>
        </div>
      )}

      {!results && !isCalculating && (
        <div className="text-center py-12 text-gray-500">
          Select a student profile above to see results
        </div>
      )}
    </div>
  );
}
