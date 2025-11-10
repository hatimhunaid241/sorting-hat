interface Subject {
    id?: number;
    category: string;
    subCategory: string;
    subject: string;
    abbreviation: string | string[];
}

const subjectsRaw: Subject[] = [
    {
        category: "A",
        subCategory: "Core",
        subject: "Chinese Language",
        abbreviation: "CHIN"
    },
    {
        category: "A",
        subCategory: "Core",
        subject: "English Language",
        abbreviation: "ENG"
    },
    {
        category: "A",
        subCategory: "Core",
        subject: "Mathematics",
        abbreviation: "MATH"
    },
    {
        category: "A",
        subCategory: "Core",
        subject: "Citizenship and Social Development",
        abbreviation: "CSD"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Mathematics Extended Part (M1)",
        abbreviation: "MATH-M1"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Mathematics Extended Part (M2)",
        abbreviation: "MATH-M2"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Chinese Literature",
        abbreviation: "CHIN-LIT"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Biology",
        abbreviation: "BIO"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Business, Accounting and Financial Studies",
        abbreviation: "BAFS"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Literature in English",
        abbreviation: "LIT-ENG"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Chemistry",
        abbreviation: "CHEM"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Design and Applied Technology",
        abbreviation: "DAT"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Chinese History",
        abbreviation: "CHIN-HIST"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Physics",
        abbreviation: "PHY"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Health Management and Social Care",
        abbreviation: "HMSC"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Economics",
        abbreviation: "ECO"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Information and Communication Technology",
        abbreviation: "ICT"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Ethics and Religious Studies",
        abbreviation: "ERS"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Technology and Living",
        abbreviation: "T&L"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Geography",
        abbreviation: "GEO"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Music",
        abbreviation: "MUS"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "History",
        abbreviation: "HIST"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Visual Arts",
        abbreviation: "VA"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Tourism and Hospitality Studies",
        abbreviation: "THS"
    },
    {
        category: "A",
        subCategory: "Elective",
        subject: "Physical Education",
        abbreviation: "PE"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Creative Studies",
        abbreviation: "CS"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Cultural and Creative Product Design",
        abbreviation: "CCPD"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Fashion Image Design",
        abbreviation: "FID"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Interior and Exhibition Design/Interior and Event Spatial Design",
        abbreviation: ["IED", "IESD"]
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Jewellery Design in Digital Age",
        abbreviation: "JDDA"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Computer Game and Animation Design",
        abbreviation: "CGAD"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Digital Comic Design and Production",
        abbreviation: "DCDP"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Popular Music Production",
        abbreviation: "PMP"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "Taking a Chance on Dance",
        abbreviation: "TCD"
    },
    {
        category: "B",
        subCategory: "Creative Studies",
        subject: "The Essentials of Theatre Arts",
        abbreviation: "ET"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Digital Media and Radio Production",
        abbreviation: "DMRP"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Film and Transmedia/Film Production",
        abbreviation: ["FT", "FP"]
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Digital Brand Communication/Digital Advertising",
        abbreviation: ["DBC", "DA"]
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Multimedia Storytelling",
        abbreviation: "MS"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "PR and Multimedia Communication",
        abbreviation: "PRMC"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Applied Learning (Vocational English) - English Communication",
        abbreviation: "ALVE-EC"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Applied Learning (Vocational English) - English for Business Services",
        abbreviation: "ALVE-EBS"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Applied Learning (Vocational English) - English for Service Professionals",
        abbreviation: "ALVE-ESP"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Creative English - Cultural Tourism",
        abbreviation: "CE-CT"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Creative English - Biz and Media",
        abbreviation: "CE-BM"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Creative English - PR and Marketing",
        abbreviation: "CE-PRM"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Practical Translation (CHIN-ENG)",
        abbreviation: "PT"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Applied Japanese and Japanese Culture",
        abbreviation: "AJJC"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Everyday Japanese and Japanese Culture",
        abbreviation: "EJJC"
    },
    {
        category: "B",
        subCategory: "Media and Communication",
        subject: "Korean Language and Culture",
        abbreviation: "KLC"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Accounting in Action",
        abbreviation: "AIA"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Accounting for e-Business",
        abbreviation: "AEB"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "AI in Business",
        abbreviation: "AIB"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Data Application for Business/AI Application in Business Data",
        abbreviation: ["DAB", "AIABD"]
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Innovation and Entrepreneurship",
        abbreviation: "IE"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Introduction to Fintech",
        abbreviation: "ITF"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "KOL Marketing and Generative AI",
        abbreviation: "KOL"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Marketing and Online Promotion",
        abbreviation: "MOP"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Modern Logistics Studies",
        abbreviation: "MLS-BML"
    },
    {
        category: "B",
        subCategory: "Business, Management and Law",
        subject: "Law Enforcement in Hong Kong",
        abbreviation: "LE-HK"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Modern Southeast Asian Cuisine",
        abbreviation: "MSAC"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "PÃ¢tisserie and CafÃ© Operations",
        abbreviation: "P&CO"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Western Cuisine",
        abbreviation: "WC"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Airport Passenger Terminal Operations/Airport Operations and Services",
        abbreviation: ["APTO", "AOS"]
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Hospitality Services in Practice",
        abbreviation: "HSP"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Hotel Operations",
        abbreviation: "HO"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Child Care and Development",
        abbreviation: "CCD"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Child Care and Education",
        abbreviation: "CCE"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Fundamental Cosmetology",
        abbreviation: "FC"
    },
    {
        category: "B",
        subCategory: "Services",
        subject: "Gerontech and Services",
        abbreviation: "G&S"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Food Technology and Nutrition",
        abbreviation: "FTN"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Foundation in Chinese Medicine",
        abbreviation: "FCM"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Health Care Practice",
        abbreviation: "HCP"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Medical Laboratory Science",
        abbreviation: "MLS-AS"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Pet Care and Grooming",
        abbreviation: "PCG"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Rehabilitation Care Practice",
        abbreviation: "RCP"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Applied Psychology",
        abbreviation: "AP"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Practical Psychology",
        abbreviation: "PP"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Exercise and Fitness Coaching",
        abbreviation: "EFC"
    },
    {
        category: "B",
        subCategory: "Applied Science",
        subject: "Exercise Science and Health Fitness",
        abbreviation: "ESH"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Digital Construction",
        abbreviation: "DC"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Electrical and Energy Engineering",
        abbreviation: "EEE"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "AI and Robotics",
        abbreviation: "AIR"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Computer Forensic Technology",
        abbreviation: "CFT"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Cybersecurity",
        abbreviation: "CYB"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "eSports Technology and Management",
        abbreviation: "ETM"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Tech Basics",
        abbreviation: "TB"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Aviation Studies",
        abbreviation: "AS"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "Railway Studies",
        abbreviation: "RS"
    },
    {
        category: "B",
        subCategory: "Engineering and Production",
        subject: "UAV and Low-altitude Economy",
        abbreviation: "ULAE"
    },
    {
        category: "B",
        subCategory: "Applied Learning Chinese",
        subject: "Chinese in Business Service",
        abbreviation: "CIBS"
    },
    {
        category: "B",
        subCategory: "Applied Learning Chinese",
        subject: "Chinese in Practical Context",
        abbreviation: "CIPC"
    },
    {
        category: "B",
        subCategory: "Applied Learning Chinese",
        subject: "Communicative Chinese",
        abbreviation: "CC"
    },
    {
        category: "B",
        subCategory: "Applied Learning Chinese",
        subject: "Practical Chinese",
        abbreviation: "PC"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "French",
        abbreviation: "FRENCH"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "German",
        abbreviation: "GERMAN"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "Japanese",
        abbreviation: "JAPANESE"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "Korean",
        abbreviation: "KOREAN"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "Spanish",
        abbreviation: "SPANISH"
    },
    {
        category: "C",
        subCategory: "Other Languages",
        subject: "Urdu",
        abbreviation: "URDU"
    }
];

export const subjectCodes = subjectsRaw.map(subject => subject.abbreviation).flat();

// Function to check for duplicate abbreviations
const checkDuplicates = (subjects: Subject[]) => {
    const abbreviationSet = new Set();
    const duplicates = new Set();

    subjects.forEach(subject => {
        const abbreviations = Array.isArray(subject.abbreviation) ? subject.abbreviation : [subject.abbreviation];

        abbreviations.forEach(abbr => {
            if (abbreviationSet.has(abbr)) {
                duplicates.add(abbr);
            } else {
                abbreviationSet.add(abbr);
            }
        });
    });

    return [...duplicates];
};

export const duplicateAbbreviations = checkDuplicates(subjectsRaw);

export const subjects = subjectsRaw.map((subject, index) => ({
    id: index + 1,
    ...subject
}));

export const filteredSubjects = (category?: string, subCategory?: string) => {
    return subjects.filter(
        (subject) =>
            category && subCategory ? subject.category === category && subject.subCategory === subCategory
                : category && !subCategory ? subject.category === category
                    : !category && subCategory ? subject.subCategory === subCategory
                        : true
    );
}

export const getSubjectByAbbreviation = (abbreviation: string) => {
    return subjects.find(subject => {
        if (Array.isArray(subject.abbreviation)) {
            return subject.abbreviation.includes(abbreviation);
        }
        return subject.abbreviation === abbreviation;
    });
}

export const getSubjectByName = (name: string) => {
    return subjects.find(subject => subject.subject.split("/").includes(name));
}
