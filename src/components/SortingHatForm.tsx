"use client";
import { useEffect, useState, useRef } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Trash2 } from "lucide-react";
import { State, submitSortingHatForm } from "@/actions/actions";
import { uuid } from "@/lib/helpers/uuid";
import ReactMarkdown from "react-markdown";
import {
  careers,
  csdGrades,
  disciplines,
  categoryAGrades,
  interests,
  mbti,
  years,
  categoryBGrades,
  categoryCGrades,
  koreanGrades,
  japaneseGrades,
} from "@/lib/data/subjects/constants";
import { filteredSubjects } from "@/lib/data/subjects/subjects";
import { StudentSubject, University } from "@/lib";

function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-600 text-sm">{message}</p>;
}

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

function ScoreBreakdownTabs({ 
  calculatedScores, 
  selectedUniversities 
}: { 
  calculatedScores: Record<string, Array<{
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
  }>>; 
  selectedUniversities: University[] 
}) {
  const [activeTab, setActiveTab] = useState<string>(selectedUniversities[0] || 'hku');

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

  type BreakdownItem = {
    subject: string;
    abbreviation: string;
    grade: string;
    rawScore: number;
    calculatedScore: number;
    variable?: string;
  };

  const formatBreakdown = (breakdown: BreakdownItem[]) => {
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
    <div>
      <div className="border-b border-gray-200 mb-4">
        <div className="flex flex-wrap gap-2">
          {selectedUniversities.map((uni) => (
            <button
              key={uni}
              onClick={(e) => {e.preventDefault(); setActiveTab(uni)}}
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
          <h3 className="text-xl font-bold mb-4">
            {universityInfo[activeTab]?.name || activeTab.toUpperCase()}
          </h3>

          {calculatedScores[activeTab] && calculatedScores[activeTab].length > 0 ? (
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
                  {calculatedScores[activeTab].map((programmeResult, idx: number) => (
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
  );
}

export default function SortingHatForm() {
  const generatedContentRef = useRef<HTMLDivElement>(null);
  const coreSubjects = filteredSubjects("A", "Core");
  const electiveSubjects = filteredSubjects("A", "Elective");
  const bSubjects = filteredSubjects("B");
  const cSubjects = filteredSubjects("C");

  const universities = ["HKU", "CUHK", "PolyU", "CityU", "HKBU", "Lingnan", "EduHK", "HKUST"];

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    career: string;
    otherCareer: string;
    universityPreference: boolean;
    universities: University[];
    disciplinePreference: boolean;
    disciplines: string[];
    interests: string[];
    otherInterests: string;
    currentYear: string;
    subjectsCore: StudentSubject[];
    subjectsElective: StudentSubject[];
    subjectsB: StudentSubject[];
    subjectsC: StudentSubject[];
    personalityType: string;
    additionalNotes: string;
  }>({
    career: "",
    otherCareer: "",
    universityPreference: true,
    universities: [],
    disciplinePreference: true,
    disciplines: [],
    interests: [],
    otherInterests: "",
    currentYear: "",
    subjectsCore: coreSubjects.map((subj) => ({ ...subj, grade: "", uuid: uuid() })),
    subjectsElective: [],
    subjectsB: [],
    subjectsC: [],
    personalityType: "",
    additionalNotes: "",
  });
  const [errors, setErrors] = useState<{
    career?: string;
    otherCareer?: string;
    universities?: string;
    disciplines?: string;
    interests?: string;
    currentYear?: string;
    subjectsCore?: string;
    subjectsElective?: string;
    subjectsB?: string;
    subjectsC?: string;
    personalityType?: string;
    additionalNotes?: string;
  }>({
    career: "Please select a career",
    universities: "Please select at least one university or choose no preference",
    disciplines: "Please select at least one discipline or choose no preference",
    interests: "Please select at least one interest or hobby",
    currentYear: "Please select your current year of study",
    subjectsCore: "",
    subjectsElective: "",
    subjectsB: "",
    subjectsC: "",
    personalityType: "Please select your MBTI personality type or choose 'Other'",
    additionalNotes: "",
  });
  const [data, setData] = useState<null | State>(null);
  const [showErrors, setShowErrors] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const addSubject = (e: React.MouseEvent<HTMLButtonElement>, category: "A" | "B" | "C") => {
    e.preventDefault();
    setForm((prev) => ({
      ...prev,
      [`subjects${category === "A" ? "Elective" : category}`]: [
        ...prev[`subjects${category === "A" ? "Elective" : category}`],
        { uuid: uuid(), subject: "", grade: "", category: "", subCategory: "", abbreviation: "" },
      ],
    }));
    console.log("Subject added to category ", category);
  };

  const updateSubjectField = (
    category: "Core" | "Elective" | "B" | "C",
    idx: number,
    field: string,
    value: string
  ) => {
    const selectedSubject =
      field === "subject" &&
      (category === "Core"
        ? coreSubjects.find((s) => s.id.toString() === value)
        : category === "Elective"
        ? electiveSubjects.find((s) => s.id.toString() === value)
        : category === "B"
        ? bSubjects.find((s) => s.id.toString() === value)
        : category === "C"
        ? cSubjects.find((s) => s.id.toString() === value)
        : null);
    setForm((prev) => ({
      ...prev,
      [`subjects${category}`]: [
        ...prev[`subjects${category}`].map((subj, sidx) =>
          sidx === idx
            ? field === "subject"
              ? { ...subj, ...(selectedSubject || {}) }
              : { ...subj, [field]: value }
            : subj
        ),
      ],
    }));
    console.log(
      "Subject updated in category ",
      category,
      " field ",
      field,
      " to ",
      selectedSubject || value
    );
  };

  const deleteSubject = (category: "A" | "B" | "C", index: number) => {
    setForm((prev) => ({
      ...prev,
      [`subjects${category === "A" ? "Elective" : category}`]: prev[
        `subjects${category === "A" ? "Elective" : category}`
      ].filter((_, sidx) => sidx !== index),
    }));
    console.log("Subject deleted from category ", category, " at index ", index);
  };

  const handleUniversityChange = (university: University) => {
    setForm((prev) => {
      const universities = prev.universities.includes(university)
        ? prev.universities.filter((item) => item !== university)
        : [...prev.universities, university];
      return { ...prev, universities };
    });
  };

  const handleDisciplineChange = (discipline: string) => {
    setForm((prev) => {
      const disciplines = prev.disciplines.includes(discipline)
        ? prev.disciplines.filter((item) => item !== discipline)
        : [...prev.disciplines, discipline];
      return { ...prev, disciplines };
    });
  };

  const handleInterestChange = (interest: string) => {
    setForm((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    if (error()) return;
    
    setLoading(true);
    setSubmitError(null); // Clear any previous errors
    
    try {
      const response = await submitSortingHatForm(form);
      
      if (!response) {
        throw new Error("No response received from the server");
      }
      
      if (!response.success) {
        throw new Error(response.message || "Failed to generate recommendations");
      }
      
      setData(response);
      
      // Scroll to results
      if (generatedContentRef.current) {
        generatedContentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(errorMessage);
      
      // Scroll to show the error
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  const error = () => Object.values(errors).some((err) => err && err.length > 0);

  useEffect(() => {
    let error = "";
    if (!form.career) {
      error = "Please select a career";
    } else if (form.career === "Other" && !form.otherCareer.trim()) {
      error = "Please specify your preferred career";
    }
    setErrors((prev) => ({ ...prev, career: error, otherCareer: "" }));
  }, [form.career, form.otherCareer]);

  useEffect(() => {
    let error = "";
    if (form.universityPreference && form.universities.length === 0) {
      error = "Please select at least one university or choose no preference";
    }
    setErrors((prev) => ({ ...prev, universities: error }));
  }, [form.universityPreference, form.universities]);

  useEffect(() => {
    let error = "";
    if (form.disciplinePreference && form.disciplines.length === 0) {
      error = "Please select at least one discipline or choose no preference";
    }
    setErrors((prev) => ({ ...prev, disciplines: error }));
  }, [form.disciplinePreference, form.disciplines]);

  useEffect(() => {
    let error = "";
    if (form.interests.length === 0 && !form.otherInterests.trim()) {
      error = "Please select at least one interest or hobby";
    }
    setErrors((prev) => ({ ...prev, interests: error }));
  }, [form.interests, form.otherInterests]);

  useEffect(() => {
    let error = "";
    if (!form.currentYear) {
      error = "Please select your current year of study";
    }
    setErrors((prev) => ({ ...prev, currentYear: error }));
  }, [form.currentYear]);

  useEffect(() => {
    // Grades are now optional - no validation needed for grades
    // Students without grades yet (younger students) can still use the system
    setErrors((prev) => ({ ...prev, subjectsCore: "" }));
  }, [form.subjectsCore, form.subjectsElective, form.subjectsB, form.subjectsC]);

  useEffect(() => {
    let error = "";
    if (!form.personalityType) {
      error = "Please select your MBTI personality type or choose 'Other'";
    }
    setErrors((prev) => ({ ...prev, personalityType: error }));
  }, [form.personalityType]);

  return (
    <form onSubmit={handleSubmit}>
      <TooltipProvider>
        <div className="p-6 grid gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="grid gap-4 pt-6">
              <label className="font-semibold">What profession would you like to be?</label>
              <div
                className={`grid gap-2 ${
                  form.career === "Other" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                } gap-2`}>
                <Select
                  onValueChange={(val) => {
                    setForm((prev) => ({
                      ...prev,
                      career: val,
                      otherCareer: val !== "Other" ? "" : prev.otherCareer,
                    }));
                  }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a career" />
                  </SelectTrigger>
                  <SelectContent>
                    {careers.map((c, i) => (
                      <SelectItem key={i} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.career === "Other" && (
                  <Input
                    placeholder="Please specify"
                    value={form.otherCareer}
                    onChange={(e) => setForm((prev) => ({ ...prev, otherCareer: e.target.value }))}
                    name="other-career"
                  />
                )}
              </div>
              {showErrors && <ErrorMessage message={errors.career || ""} />}

              {/* Universities */}
              <div className="flex items-center justify-between">
                <label className="font-semibold">Preferred Universities</label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="no-preference-universities"
                    checked={!form.universityPreference}
                    onCheckedChange={(checked) => {
                      setForm((prev) => ({ ...prev, universityPreference: !checked }));
                      if (checked) setForm((prev) => ({ ...prev, universities: [] }));
                    }}
                    name="no-preference-universities"
                  />
                  <Label htmlFor="no-preference-universities">No preference</Label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {universities.map((u, i) => (
                  <label
                    key={i}
                    className={`
                      flex items-center space-x-2 ${
                        !form.universityPreference ? "text-gray-400 cursor-not-allowed" : ""
                      }
                    `}>
                    <Checkbox
                      checked={form.universities.includes(u.toLowerCase() as University)}
                      onCheckedChange={() => handleUniversityChange(u.toLowerCase() as University)}
                      disabled={!form.universityPreference}
                      value={u}
                      name="universities"
                    />
                    <span>{u}</span>
                  </label>
                ))}
              </div>
              {showErrors && <ErrorMessage message={errors.universities || ""} />}

              {/* Disciplines */}
              <div className="flex items-center justify-between">
                <label className="font-semibold">Preferred Disciplines</label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="no-preference-disciplines"
                    checked={!form.disciplinePreference}
                    onCheckedChange={(checked) => {
                      setForm((prev) => ({ ...prev, disciplinePreference: !checked }));
                      if (checked) setForm((prev) => ({ ...prev, disciplines: [] }));
                    }}
                    name="no-preference-disciplines"
                  />
                  <Label htmlFor="no-preference-disciplines">No preference</Label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {disciplines.map((d, i) => (
                  <label
                    key={i}
                    className={`
                      flex items-center space-x-2 ${
                        !form.disciplinePreference ? "text-gray-400 cursor-not-allowed" : ""
                      }
                    `}>
                    <Checkbox
                      checked={form.disciplines.includes(d)}
                      onCheckedChange={() => handleDisciplineChange(d)}
                      disabled={!form.disciplinePreference}
                      name="disciplines"
                      value={d}
                    />
                    <span>{d}</span>
                  </label>
                ))}
              </div>
              {showErrors && <ErrorMessage message={errors.disciplines || ""} />}

              {/* Interests */}
              <label className="font-semibold">Your Interests / Hobbies</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {interests.map((i, idx) => (
                  <label key={idx} className="flex items-center space-x-2">
                    <Checkbox
                      checked={form.interests.includes(i)}
                      onCheckedChange={() => handleInterestChange(i)}
                      name="interests"
                      value={i}
                    />
                    <span>{i}</span>
                  </label>
                ))}
              </div>
              <Input
                placeholder="Other hobbies"
                value={form.otherInterests}
                onChange={(e) => setForm((prev) => ({ ...prev, otherInterests: e.target.value }))}
                name="otherInterests"
              />
              {showErrors && <ErrorMessage message={errors.interests || ""} />}

              {/* Year Selection */}
              <label className="font-semibold">Current Year of Study</label>
              <Select
                onValueChange={(val) => setForm((prev) => ({ ...prev, currentYear: val }))}
                name="currentYear">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y, i) => (
                    <SelectItem key={i} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {showErrors && <ErrorMessage message={errors.currentYear || ""} />}

              {/* Subjects & Grades */}
              <label className="font-semibold">Your HKDSE Subjects & Grades</label>
              {form.subjectsCore.map((subj, idx) => (
                <div className="flex items-center" key={`core-${subj.uuid}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    <Input
                      value={subj.subject}
                      onChange={(e) => {
                        const newSubjects = [...form.subjectsCore];
                        newSubjects[idx].subject = e.target.value;
                        setForm((prev) => ({ ...prev, subjectsCore: newSubjects }));
                      }}
                      readOnly
                      placeholder="Subject name"
                      name={`subjects[${idx}].subject`}
                      className="pointer-events-none bg-gray-100"
                    />
                    <Select
                      onValueChange={(val) => updateSubjectField("Core", idx, "grade", val)}
                      name={`subjects[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {(subj.subject === "Citizenship and Social Development"
                          ? csdGrades
                          : categoryAGrades
                        ).map((g, i) => (
                          <SelectItem key={i} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              {showErrors && errors.subjectsCore && (
                <ErrorMessage message={errors.subjectsCore || ""} />
              )}
              {form.subjectsElective.map((subj, idx) => (
                <div className="flex items-center" key={`elective-${subj.uuid}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    <Select
                      onValueChange={(val) => updateSubjectField("Elective", idx, "subject", val)}
                      name={`subjectsElective[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Elective Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {electiveSubjects.map((g, i) => (
                          <SelectItem key={i} value={g.id.toString()}>
                            {g.subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      onValueChange={(val) => updateSubjectField("Elective", idx, "grade", val)}
                      name={`subjectsElective[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryAGrades.map((g, i) => (
                          <SelectItem key={i} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start md:items-center shrink-0 ml-2">
                    <Trash2
                      size={18}
                      color="red"
                      cursor="pointer"
                      onClick={() => {
                        deleteSubject("A", idx);
                      }}
                    />
                  </div>
                </div>
              ))}
              {showErrors && errors.subjectsElective && (
                <ErrorMessage message={errors.subjectsElective || ""} />
              )}
              <Button
                className="hover:cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm"
                onClick={(e) => addSubject(e, "A")}>
                + Add Category A Subject: Elective
              </Button>
              {form.subjectsB.map((subj, idx) => (
                <div className="flex items-center" key={`b-subject-${subj.uuid}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    <Select
                      onValueChange={(val) => updateSubjectField("B", idx, "subject", val)}
                      name={`subjectsB[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Category B Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {bSubjects.map((g, i) => (
                          <SelectItem key={i} value={g.id.toString()}>
                            {g.subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      onValueChange={(val) => updateSubjectField("B", idx, "grade", val)}
                      name={`subjectsB[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryBGrades.map((g, i) => (
                          <SelectItem key={i} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start md:items-center shrink-0 ml-2">
                    <Trash2
                      size={18}
                      color="red"
                      cursor="pointer"
                      onClick={() => {
                        deleteSubject("B", idx);
                      }}
                    />
                  </div>
                </div>
              ))}
              {showErrors && errors.subjectsB && <ErrorMessage message={errors.subjectsB || ""} />}
              <Button
                className="hover:cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm"
                onClick={(e) => addSubject(e, "B")}>
                + Add Category B Subject: Applied Learning
              </Button>
              {form.subjectsC.map((subj, idx) => (
                <div className="flex items-center" key={`c-subject-${subj.uuid}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    <Select
                      onValueChange={(val) => updateSubjectField("C", idx, "subject", val)}
                      name={`subjectsC[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Category C Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {cSubjects.map((g, i) => (
                          <SelectItem key={i} value={g.id.toString()}>
                            {g.subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      onValueChange={(val) => updateSubjectField("C", idx, "grade", val)}
                      name={`subjectsC[${idx}].grade`}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {(subj.subject === "Korean"
                          ? koreanGrades
                          : subj.subject === "Japanese"
                          ? japaneseGrades
                          : subj.subject === ""
                          ? []
                          : categoryCGrades
                        ).map((g, i) => (
                          <SelectItem key={i} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start md:items-center shrink-0 ml-2">
                    <Trash2
                      size={18}
                      color="red"
                      cursor="pointer"
                      onClick={() => {
                        deleteSubject("C", idx);
                      }}
                    />
                  </div>
                </div>
              ))}
              {showErrors && errors.subjectsC && <ErrorMessage message={errors.subjectsC || ""} />}
              <Button
                className="hover:cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-sm"
                onClick={(e) => addSubject(e, "C")}>
                + Add Category C Subject: Other Languages
              </Button>

              {/* MBTI */}
              <label className="font-semibold">Your MBTI Personality Type</label>
              <Select
                onValueChange={(val) => setForm((prev) => ({ ...prev, personalityType: val }))}
                name="personalityType">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select personality" />
                </SelectTrigger>
                <SelectContent>
                  {mbti.map((m, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <SelectItem value={m.code}>{m.code}</SelectItem>
                      </TooltipTrigger>
                      <TooltipContent>{m.desc}</TooltipContent>
                    </Tooltip>
                  ))}
                </SelectContent>
              </Select>
              {showErrors && <ErrorMessage message={errors.personalityType || ""} />}

              {/* Notes */}
              <label className="font-semibold">Other Information (e.g. work preferences)</label>
              <Textarea
                value={form.additionalNotes}
                onChange={(e) => setForm((prev) => ({ ...prev, additionalNotes: e.target.value }))}
                placeholder="e.g. I don't want an indoor job or to work in government."
                name="additional-notes"
              />

              <Button
                className="whitespace-pre-wrap wrap-anywhere py-2 h-auto"
                disabled={loading || (error() && showErrors)}
                aria-disabled={loading}
                type="submit">
                {loading ? "Submitting..." : "Generate Degree Recommendations"}
              </Button>
              {showErrors && error() && (
                <ErrorMessage message="Please fix the errors above before submitting." />
              )}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error Generating Recommendations</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{submitError}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          onClick={() => setSubmitError(null)}
                          className="text-sm font-medium text-red-800 hover:text-red-900 underline"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          {data && (
            <>
              <Card ref={generatedContentRef}>
                <CardContent className="grid gap-4 pt-6">
                  <h2 className="text-2xl font-bold">AI Recommendations</h2>
                  {data.data.generatedText ? (
                    <div className="prose max-w-none">
                      <ReactMarkdown>{data.data.generatedText}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Generating recommendations...
                    </p>
                  )}
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Generation Time: {data.data.totalExecutionTime.toFixed(2)}s</p>
                    <p>Tokens: {data.data.numberOfTokens} ({data.data.speed.toFixed(2)} tokens/sec)</p>
                  </div>
                </CardContent>
              </Card>

              {data.hasGrades && data.calculatedScores && data.selectedUniversities && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Detailed Score Breakdown</h2>
                    <ScoreBreakdownTabs 
                      calculatedScores={data.calculatedScores}
                      selectedUniversities={data.selectedUniversities}
                    />
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </TooltipProvider>
    </form>
  );
}
