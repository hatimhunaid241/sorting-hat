"use client";

import { useState } from "react";
import { calculateProgrammeScore } from "@/lib/calculators/scoringCalculator";
import { allUniversities } from "@/lib/data/universities";
import { StudentSubject, University } from "@/lib/core/types";
import { uuid } from "@/lib/helpers/uuid";

// Test case definitions
const testCases = [
  {
    id: "excellent-student",
    name: "Excellent Student (All 5** grades)",
    description: "Perfect grades across all subjects",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "5**",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Chemistry",
        uuid: uuid(),
        abbreviation: "CHEM",
        grade: "5**",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Biology",
        uuid: uuid(),
        abbreviation: "BIO",
        grade: "5**",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "History",
        uuid: uuid(),
        abbreviation: "HIST",
        grade: "5**",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Economics",
        uuid: uuid(),
        abbreviation: "ECON",
        grade: "5**",
        category: "C",
        subCategory: "Business",
      },
    ] as StudentSubject[],
  },
  {
    id: "average-student",
    name: "Average Student (Mixed grades)",
    description: "Typical student with mix of 4-5 grades",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "5*",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "4",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "5",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "4",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Chemistry",
        uuid: uuid(),
        abbreviation: "CHEM",
        grade: "5",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Geography",
        uuid: uuid(),
        abbreviation: "GEOG",
        grade: "5*",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Economics",
        uuid: uuid(),
        abbreviation: "ECON",
        grade: "4",
        category: "C",
        subCategory: "Business",
      },
    ] as StudentSubject[],
  },
  {
    id: "minimal-student",
    name: "Minimal Requirements",
    description: "Only core subjects + 1 elective",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "4",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "3",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "3",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "3",
        category: "A",
        subCategory: "Science",
      },
    ] as StudentSubject[],
  },
  {
    id: "science-specialist",
    name: "Science Specialist",
    description: "Strong in sciences with M1/M2",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "5",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "4",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "5**",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Chemistry",
        uuid: uuid(),
        abbreviation: "CHEM",
        grade: "5*",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Biology",
        uuid: uuid(),
        abbreviation: "BIO",
        grade: "5",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Mathematics Extended Part Module 1",
        uuid: uuid(),
        abbreviation: "MATH-M1",
        grade: "5*",
        category: "A",
        subCategory: "Extended Module",
      },
      {
        subject: "Mathematics Extended Part Module 2",
        uuid: uuid(),
        abbreviation: "MATH-M2",
        grade: "5",
        category: "A",
        subCategory: "Extended Module",
      },
    ] as StudentSubject[],
  },
  {
    id: "humanities-focused",
    name: "Humanities Focused",
    description: "Strong in humanities and languages",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "5*",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "4",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "History",
        uuid: uuid(),
        abbreviation: "HIST",
        grade: "5**",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Geography",
        uuid: uuid(),
        abbreviation: "GEOG",
        grade: "5*",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Chinese Literature",
        uuid: uuid(),
        abbreviation: "CHINLIT",
        grade: "5",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Economics",
        uuid: uuid(),
        abbreviation: "ECON",
        grade: "5",
        category: "C",
        subCategory: "Business",
      },
      {
        subject: "Business Accounting and Financial Studies",
        uuid: uuid(),
        abbreviation: "BAFS",
        grade: "4",
        category: "C",
        subCategory: "Business",
      },
    ] as StudentSubject[],
  },
  {
    id: "failing-student",
    name: "Below Requirements",
    description: "Some subjects below minimum requirements",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "2",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "3",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "1",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Not Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "U",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Chemistry",
        uuid: uuid(),
        abbreviation: "CHEM",
        grade: "2",
        category: "A",
        subCategory: "Science",
      },
    ] as StudentSubject[],
  },
  {
    id: "edge-case-mixed",
    name: "Edge Case Mixed",
    description: "Mix of very high and very low grades",
    subjects: [
      {
        subject: "English Language",
        uuid: uuid(),
        abbreviation: "ENG",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Chinese Language",
        uuid: uuid(),
        abbreviation: "CHIN",
        grade: "2",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Mathematics",
        uuid: uuid(),
        abbreviation: "MATH",
        grade: "5**",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Citizenship and Social Development",
        uuid: uuid(),
        abbreviation: "CSD",
        grade: "Attained",
        category: "A",
        subCategory: "Core",
      },
      {
        subject: "Physics",
        uuid: uuid(),
        abbreviation: "PHY",
        grade: "U",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "Chemistry",
        uuid: uuid(),
        abbreviation: "CHEM",
        grade: "5**",
        category: "A",
        subCategory: "Science",
      },
      {
        subject: "History",
        uuid: uuid(),
        abbreviation: "HIST",
        grade: "1",
        category: "B",
        subCategory: "Humanities",
      },
      {
        subject: "Economics",
        uuid: uuid(),
        abbreviation: "ECON",
        grade: "5**",
        category: "C",
        subCategory: "Business",
      },
    ] as StudentSubject[],
  },
];

type TestResult = {
  [university: string]: {
    [programmeIndex: string]: {
      programmeName: string;
      totalScore: number;
      breakdown: {
        subjectScores: number;
        bestN: number;
        csdStatus: string;
        usedSubjects: string[];
        requiredSubjects: number;
        electiveSubjects: number;
        finalScore: number;
        allSubjects: Array<{
          abbreviation: string;
          grade: string;
          calculatedScore: number;
          rawScore: number;
          isUsed: boolean;
          multiplier?: number;
          variable?: string;
          comments: string[];
        }>;
      } | null;
      error?: string;
    };
  };
};

export default function TestHKUPage() {
  const [testStatus, setTestStatus] = useState<"idle" | "running" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [currentTestCase, setCurrentTestCase] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<TestResult | null>(null);

  const runTest = async (testCase: (typeof testCases)[0]) => {
    setTestStatus("running");
    setError(null);
    setCurrentTestCase(testCase.id);
    setTestResults(null);

    try {
      console.log(`=== Starting Test: ${testCase.name} ===`);
      console.log("Student subjects:", testCase.subjects);

      const results: TestResult = {};

      // Test all universities
      const universities = Object.keys(allUniversities) as University[];

      for (const university of universities) {
        results[university] = {};
        const programmes = allUniversities[university];

        console.log(
          `\n--- Testing ${university.toUpperCase()} (${programmes.length} programmes) ---`
        );

        for (let i = 0; i < programmes.length; i++) {
          const programme = programmes[i];

          try {
            if (programme.calculation?.conditions) {
              const result = calculateProgrammeScore(university, programme, testCase.subjects);

              results[university][i.toString()] = {
                programmeName: programme.programmeDetails.name,
                totalScore: result.totalScore,
                breakdown: {
                  subjectScores: result.subjectScores.length,
                  bestN: result.bestN.length,
                  csdStatus: result.csdStatus,
                  usedSubjects: result.bestN.map((s) => `${s.abbreviation}:${s.grade}`),
                  requiredSubjects: result.breakdown.requiredSubjects,
                  electiveSubjects: result.breakdown.electiveSubjects,
                  finalScore: result.breakdown.finalScore,
                  allSubjects: result.subjectScores.map((s) => ({
                    abbreviation: Array.isArray(s.abbreviation)
                      ? s.abbreviation[0]
                      : s.abbreviation,
                    grade: s.grade,
                    calculatedScore: s.calculatedScore,
                    rawScore: s.rawScore,
                    isUsed: s.isUsed,
                    multiplier: s.variable ? 1 : undefined,
                    variable: s.variable,
                    comments: s.comments.map((c) => c.message),
                  })),
                },
              };

              console.log(`? ${programme.programmeDetails.name}: ${result.totalScore} points`);
            } else {
              results[university][i.toString()] = {
                programmeName: programme.programmeDetails.name,
                totalScore: 0,
                breakdown: null,
                error: "No calculation conditions defined",
              };
              console.log(`? ${programme.programmeDetails.name}: No calculation conditions`);
            }
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            results[university][i.toString()] = {
              programmeName: programme.programmeDetails.name,
              totalScore: 0,
              breakdown: null,
              error: errorMessage,
            };
            console.error(`? ${programme.programmeDetails.name}: ${errorMessage}`);
          }
        }
      }

      setTestResults(results);
      console.log("=== Test Completed Successfully ===");
      console.log("Full results:", results);
      setTestStatus("success");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      console.error("=== Test Failed ===", err);
      setTestStatus("error");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">University Admission Calculator Test Suite</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {testCases.map((testCase) => (
          <div
            key={testCase.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white"
            onClick={() => runTest(testCase)}>
            <h3 className="font-semibold text-lg mb-2">{testCase.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{testCase.description}</p>
            <div className="text-xs text-gray-500">
              <strong>Subjects ({testCase.subjects.length}):</strong>
              <div className="flex flex-wrap gap-1 mt-1">
                {testCase.subjects.map((subject, idx) => (
                  <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
                    {subject.abbreviation}:{subject.grade}
                  </span>
                ))}
              </div>
            </div>
            <button
              disabled={testStatus === "running"}
              className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
              {testStatus === "running" && currentTestCase === testCase.id
                ? "Testing..."
                : "Run Test"}
            </button>
          </div>
        ))}
      </div>

      {testStatus === "success" && testResults && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">? Test Completed Successfully!</h2>
          <p>Results for all universities and programmes are shown below.</p>
          <p className="text-sm">Check the browser console (F12) for detailed logs.</p>
        </div>
      )}

      {testStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">? Test Failed</h2>
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {testResults && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Test Results</h2>
          {Object.entries(testResults).map(([university, programmes]) => (
            <div key={university} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 bg-gray-100 p-2 rounded">
                {university.toUpperCase()} ({Object.keys(programmes).length} programmes)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                {Object.entries(programmes).map(([programmeIndex, result]) => (
                  <div
                    key={programmeIndex}
                    className={`border rounded p-4 ${
                      result.error ? "bg-red-50 border-red-300" : "bg-white"
                    }`}>
                    <h4 className="font-medium text-base mb-3">{result.programmeName}</h4>
                    {result.error ? (
                      <p className="text-red-600 text-sm">{result.error}</p>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="font-semibold text-lg">
                            Total Score: {result.totalScore}
                          </span>
                          <span>Required: {result.breakdown?.requiredSubjects}</span>
                          <span>Electives: {result.breakdown?.electiveSubjects}</span>
                          <span>CSD Status: {result.breakdown?.csdStatus}</span>
                        </div>

                        {result.breakdown?.allSubjects && (
                          <div>
                            <h5 className="font-medium text-sm mb-2">Subject Breakdown:</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                              {result.breakdown.allSubjects.map((subject, idx) => (
                                <div
                                  key={idx}
                                  className={`p-2 rounded border ${
                                    subject.isUsed
                                      ? "bg-green-50 border-green-200"
                                      : "bg-gray-50 border-gray-200"
                                  }`}>
                                  <div className="font-medium">
                                    {subject.abbreviation}: {subject.grade}
                                    {subject.isUsed && " ?"}
                                  </div>
                                  <div className="text-gray-600">
                                    Raw: {subject.rawScore} | Calc: {subject.calculatedScore}
                                    {subject.variable && ` (${subject.variable})`}
                                  </div>
                                  {subject.comments.length > 0 && (
                                    <div className="text-gray-500 text-xs mt-1">
                                      {subject.comments.join(", ")}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-sm text-gray-600">
        <h3 className="font-semibold mb-2">Test Information:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Each test case runs against all universities and all programmes</li>
          <li>Results show calculated admission scores based on programme requirements</li>
          <li>Error handling for missing data or calculation failures</li>
          <li>Console logs provide detailed execution information</li>
          <li>Different test cases cover various student profiles and edge cases</li>
        </ul>
      </div>
    </div>
  );
}
