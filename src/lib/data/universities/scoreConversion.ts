import { ScoreConversion } from "@/lib/core/types";

export const scoreConversion: ScoreConversion = {
    hku: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 8.5,
                "5*": 7,
                "5": 5.5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 7,
                "N1": 8.5
            },
            korean: {
                "Level 3": 4,
                "Level 4": 5.5,
                "Level 5": 7,
                "Level 6": 8.5
            },
            french: {
                "A2": 4,
                "B1": 5.5,
                "B2": 7,
                "C1": 8.5,
                "C2": 8.5,
            },
            german: {
                "A2": 4,
                "B1": 5.5,
                "B2": 7,
                "C1": 8.5,
                "C2": 8.5,
            },
            spanish: {
                "A2": 4,
                "B1": 5.5,
                "B2": 7,
                "C1": 8.5,
                "C2": 8.5,
            },
            urdu: {
                "E": 1,
                "D": 2,
                "C": 3,
                "B": 4,
                "B+": 5.5,
                "B++": 7,
                "A": 8.5,
                "A+": 8.5,
                "A++": 8.5,
            },
            others: {},
        }
    },
    cuhk: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 8.5,
                "5*": 7,
                "5": 5.5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 5.5,
                "N1": 7
            },
            korean: {
                "Level 3": 3,
                "Level 4": 4,
                "Level 5": 5.5,
                "Level 6": 7
            },
            french: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            german: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            spanish: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            urdu: {
                "E": 0,
                "D": 0,
                "C": 3,
                "B": 4,
                "B+": 5.5,
                "B++": 5.5,
                "A": 7,
                "A+": 7,
                "A++": 7,
            },
            others: {},
        }
    },
    hkust: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 8.5,
                "5*": 7,
                "5": 5.5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 0,
                "U": 0,
            }
        },
        B: {
            others: {
                "Attained with distinction (II)": 4,
                "Attained with distinction (I)": 3,
                "Atained": 0
            }
        },
        C: {
            japanese: {
                "N3": 3,
                "N2": 5.5,
                "N1": 8.5
            },
            korean: {
                "Level 3": 3,
                "Level 4": 4,
                "Level 5": 5.5,
                "Level 6": 8.5
            },
            french: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            german: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            spanish: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            urdu: {
                "E": 1,
                "D": 2,
                "C": 3,
                "B": 3,
                "B+": 4,
                "B++": 5.5,
                "A": 7,
                "A+": 7,
                "A++": 8.5,
            },
            others: {
                "E": 1,
                "D": 2.5,
                "C": 4,
                "B": 5.5,
                "A": 7,
            },
        }
    },
    cityu: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 8.5,
                "5*": 7,
                "5": 5.5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        B: {
            others: {
                "Attained with distinction (II)": 4,
                "Attained with distinction (I)": 3,
                "Atained": 0
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 5.5,
                "N1": 7
            },
            korean: {
                "Level 3": 3,
                "Level 4": 4,
                "Level 5": 5.5,
                "Level 6": 7
            },
            french: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            german: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            spanish: {
                "A2": 3,
                "B1": 3,
                "B2": 4,
                "C1": 5.5,
                "C2": 7,
            },
            urdu: {
                "E": 0,
                "D": 0,
                "C": 3,
                "B": 4,
                "B+": 5.5,
                "B++": 5.5,
                "A": 7,
                "A+": 7,
                "A++": 7,
            },
            others: {},
        }
    },
    polyu: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 8.5,
                "5*": 7,
                "5": 5.5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        B: {
            others: {
                "Attained with distinction (II)": 4,
                "Attained with distinction (I)": 3,
                "Atained": 0
            }
        },
        C: {
            japanese: {
                "N3": 3,
                "N2": 5.5,
                "N1": 8.5
            },
            korean: {
                "Level 3": 3,
                "Level 4": 4,
                "Level 5": 7,
                "Level 6": 8.5
            },
            french: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            german: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            spanish: {
                "A2": 3,
                "B1": 4,
                "B2": 5.5,
                "C1": 7,
                "C2": 8.5,
            },
            urdu: {
                "E": 2,
                "D": 2,
                "C": 3,
                "B": 4,
                "B+": 5.5,
                "B++": 5.5,
                "A": 7,
                "A+": 8.5,
                "A++": 8.5,
            },
        }
    },
    hkbu: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 7,
                "5*": 6,
                "5": 5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        B: {
            others: {
                "Attained with distinction (II)": 4,
                "Attained with distinction (I)": 3,
                "Atained": 0
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 5.5,
                "N1": 7
            },
            korean: {
                "Level 3": 4,
                "Level 4": 5.5,
                "Level 5": 5.5,
                "Level 6": 7
            },
            french: {
                "A2": 4,
                "B1": 5.5,
                "B2": 5.5,
                "C1": 7,
                "C2": 7,
            },
            german: {
                "A2": 4,
                "B1": 5.5,
                "B2": 5.5,
                "C1": 7,
                "C2": 7,
            },
            spanish: {
                "A2": 4,
                "B1": 5.5,
                "B2": 5.5,
                "C1": 7,
                "C2": 7,
            },
            urdu: {
                "E": 1,
                "D": 2.5,
                "C": 2.5,
                "B": 4,
                "B+": 4,
                "B++": 5.5,
                "A": 7,
                "A+": 7,
                "A++": 7,
            },
        }
    },
    lingnan: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 7,
                "5*": 6,
                "5": 5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 5,
                "N1": 7
            },
            korean: {
                "Level 3": 4,
                "Level 4": 5,
                "Level 5": 6,
                "Level 6": 7
            },
            french: {
                "A2": 4,
                "B1": 5,
                "B2": 6,
                "C1": 7,
                "C2": 7,
            },
            german: {
                "A2": 4,
                "B1": 5,
                "B2": 6,
                "C1": 7,
                "C2": 7,
            },
            spanish: {
                "A2": 4,
                "B1": 5,
                "B2": 6,
                "C1": 7,
                "C2": 7,
            },
            urdu: {
                "E": 0,
                "D": 0,
                "C": 0,
                "B": 4,
                "B+": 5,
                "B++": 6,
                "A": 7,
                "A+": 7,
                "A++": 7,
            },
        }
    },
    eduhk: {
        A: {
            csd: {
                "Attained": 1,
                "Not Attained": 0,
            },
            others: {
                "5**": 7,
                "5*": 6,
                "5": 5,
                "4": 4,
                "3": 3,
                "2": 2,
                "1": 1,
                "U": 0,
            }
        },
        B: {
            others: {
                "Attained with distinction (II)": 4,
                "Attained with distinction (I)": 3,
                "Atained": 0
            }
        },
        C: {
            japanese: {
                "N3": 4,
                "N2": 5,
                "N1": 7
            },
            korean: {
                "Level 3": 4,
                "Level 4": 5,
                "Level 5": 6,
                "Level 6": 7
            },
            french: {
                "A2": 3,
                "B1": 4,
                "B2": 5,
                "C1": 6,
                "C2": 7,
            },
            german: {
                "A2": 3,
                "B1": 4,
                "B2": 5,
                "C1": 6,
                "C2": 7,
            },
            spanish: {
                "A2": 3,
                "B1": 4,
                "B2": 5,
                "C1": 6,
                "C2": 7,
            },
        }
    },
}