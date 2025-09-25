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
  grades,
  interests,
  mbti,
  universities,
  years,
} from "@/lib/data/subjects/constants";
import { filteredSubjects } from "@/lib/data/subjects/subjects";

function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-600 text-sm">{message}</p>;
}

export default function SortingHatForm() {
  const generatedContentRef = useRef<HTMLDivElement>(null);
  const coreSubjects = filteredSubjects("A", "Core");
  const electiveSubjects = filteredSubjects("A", "Elective");
  const bSubjects = filteredSubjects("B");
  const cSubjects = filteredSubjects("C");

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    career: string;
    otherCareer: string;
    universityPreference: boolean;
    universities: string[];
    disciplinePreference: boolean;
    disciplines: string[];
    interests: string[];
    otherInterests: string;
    currentYear: string;
    subjectsCore: {
      id?: number;
      uuid: string;
      category: string;
      subCategory: string;
      subject: string;
      abbreviation: string | string[];
      grade: string;
    }[];
    subjectsElective: {
      id?: number;
      uuid: string;
      category?: string;
      subCategory?: string;
      subject: string;
      abbreviation?: string | string[];
      grade: string;
    }[];
    subjectsB: {
      id?: number;
      uuid: string;
      category?: string;
      subCategory?: string;
      subject: string;
      abbreviation?: string | string[];
      grade: string;
    }[];
    subjectsC: {
      id?: number;
      uuid: string;
      category?: string;
      subCategory?: string;
      subject: string;
      abbreviation?: string | string[];
      grade: string;
    }[];
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
    subjectsCore: "Please select at least one subject and its grade",
    subjectsElective: "",
    subjectsB: "",
    subjectsC: "",
    personalityType: "Please select your MBTI personality type or choose 'Other'",
    additionalNotes: "",
  });
  const [data, setData] = useState<null | State>(null);
  const [showErrors, setShowErrors] = useState(false);

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

  const handleUniversityChange = (university: string) => {
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
    const response = await submitSortingHatForm(form);
    setData(response);
    setLoading(false);
    if (generatedContentRef.current) {
      generatedContentRef.current.scrollIntoView({ behavior: "smooth" });
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
    let error = "";
    if (
      form.subjectsCore.length === 0 ||
      form.subjectsCore.some((subj) => !subj.subject || !subj.grade)
    ) {
      error = "Please select at least one subject and its grade";
    }
    setErrors((prev) => ({ ...prev, subjectsCore: error }));
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
                      checked={form.universities.includes(u)}
                      onCheckedChange={() => handleUniversityChange(u)}
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
                          : grades
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
                        {grades.map((g, i) => (
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
                        {grades.map((g, i) => (
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
                        {grades.map((g, i) => (
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
            </CardContent>
          </Card>
          {data && (
            <Card ref={generatedContentRef}>
              <CardContent className="grid gap-4 pt-6">
                <label className="font-bold">Recommendations</label>
                {data.data.generatedText ? (
                  <div className="text-sm">
                    <ReactMarkdown>{data.data.generatedText}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-gray-600">
                    No recommendations yet. Please fill out the form above.
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </TooltipProvider>
    </form>
  );
}
