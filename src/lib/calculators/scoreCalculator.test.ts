/**
 * Test file for the Score Calculator
 * Demonstrates usage and validates the scoring logic
 */

import { calculateUniversityScores } from './scoreCalculator';
import { StudentSubject, University } from '../core/types';

// Sample student data
const sampleStudents: StudentSubject[] = [
    {
        uuid: '1',
        category: 'A',
        subCategory: 'Core',
        subject: 'English Language',
        abbreviation: 'ENG',
        grade: '5*'
    },
    {
        uuid: '2',
        category: 'A',
        subCategory: 'Core',
        subject: 'Chinese Language',
        abbreviation: 'CHIN',
        grade: '5'
    },
    {
        uuid: '3',
        category: 'A',
        subCategory: 'Core',
        subject: 'Mathematics',
        abbreviation: 'MATH',
        grade: '5**'
    },
    {
        uuid: '4',
        category: 'A',
        subCategory: 'Core',
        subject: 'Citizenship and Social Development',
        abbreviation: 'CSD',
        grade: 'Attained'
    },
    {
        uuid: '5',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Physics',
        abbreviation: 'PHY',
        grade: '5**'
    },
    {
        uuid: '6',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Chemistry',
        abbreviation: 'CHEM',
        grade: '5*'
    },
    {
        uuid: '7',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Biology',
        abbreviation: 'BIO',
        grade: '5'
    },
    {
        uuid: '8',
        category: 'A',
        subCategory: 'Elective',
        subject: 'Economics',
        abbreviation: 'ECO',
        grade: '5*'
    }
];

/**
 * Test 1: Calculate scores for all universities
 */
export function testAllUniversities() {
    console.log('=== Test 1: All Universities ===\n');
    
    const results = calculateUniversityScores([], sampleStudents);
    
    for (const [university, programmes] of Object.entries(results)) {
        console.log(`\n${university.toUpperCase()}:`);
        console.log(`  Total Programmes: ${programmes.length}`);
        
        // Show first 3 programmes as sample
        programmes.slice(0, 3).forEach((prog, idx) => {
            console.log(`\n  Programme ${idx + 1}: ${prog.programme.programmeDetails.name}`);
            console.log(`    Total Score: ${prog.totalScore}`);
            console.log(`    CSD Status: ${prog.csdStatus}`);
            console.log(`    Subjects Used: ${prog.breakdown.length}`);
            
            if (prog.comments.length > 0) {
                console.log(`    Comments:`);
                prog.comments.forEach(c => console.log(`      [${c.type}] ${c.message}`));
            }
        });
    }
}

/**
 * Test 2: Calculate scores for specific universities
 */
export function testSpecificUniversities() {
    console.log('\n\n=== Test 2: HKU and CUHK Only ===\n');
    
    const universities: University[] = ['hku', 'cuhk'];
    const results = calculateUniversityScores(universities, sampleStudents);
    
    for (const [university, programmes] of Object.entries(results)) {
        console.log(`\n${university.toUpperCase()}: ${programmes.length} programmes`);
    }
}

/**
 * Test 3: Student with missing subjects
 */
export function testMissingSubjects() {
    console.log('\n\n=== Test 3: Student with Missing Subjects ===\n');
    
    const incompleteStudent: StudentSubject[] = [
        {
            uuid: '1',
            category: 'A',
            subCategory: 'Core',
            subject: 'English Language',
            abbreviation: 'ENG',
            grade: '4'
        },
        {
            uuid: '2',
            category: 'A',
            subCategory: 'Core',
            subject: 'Chinese Language',
            abbreviation: 'CHIN',
            grade: '3'
        },
        {
            uuid: '3',
            category: 'A',
            subCategory: 'Core',
            subject: 'Citizenship and Social Development',
            abbreviation: 'CSD',
            grade: 'Attained'
        }
    ];
    
    const results = calculateUniversityScores(['hku'], incompleteStudent);
    const firstProgramme = results.hku[0];
    
    console.log(`Programme: ${firstProgramme.programme.programmeDetails.name}`);
    console.log(`Total Score: ${firstProgramme.totalScore}`);
    console.log(`\nComments:`);
    firstProgramme.comments.forEach(c => {
        console.log(`  [${c.type}] ${c.message}`);
    });
}

/**
 * Test 4: Student with CSD not attained
 */
export function testCSDNotAttained() {
    console.log('\n\n=== Test 4: CSD Not Attained ===\n');
    
    const studentWithoutCSD: StudentSubject[] = [
        ...sampleStudents.filter(s => s.abbreviation !== 'CSD'),
        {
            uuid: '4',
            category: 'A',
            subCategory: 'Core',
            subject: 'Citizenship and Social Development',
            abbreviation: 'CSD',
            grade: 'Not Attained'
        }
    ];
    
    const results = calculateUniversityScores(['hku'], studentWithoutCSD);
    const firstProgramme = results.hku[0];
    
    console.log(`Programme: ${firstProgramme.programme.programmeDetails.name}`);
    console.log(`CSD Status: ${firstProgramme.csdStatus}`);
    console.log(`Total Score: ${firstProgramme.totalScore}`);
    console.log(`\nCSD-related comments:`);
    firstProgramme.comments
        .filter(c => c.message.includes('CSD'))
        .forEach(c => console.log(`  [${c.type}] ${c.message}`));
}

/**
 * Test 5: Detailed breakdown for a single programme
 */
export function testDetailedBreakdown() {
    console.log('\n\n=== Test 5: Detailed Breakdown ===\n');
    
    const results = calculateUniversityScores(['hku'], sampleStudents);
    const programme = results.hku[0];
    
    console.log(`Programme: ${programme.programme.programmeDetails.name}`);
    console.log(`Expected Score: ${programme.programme.expectedScore}`);
    console.log(`Calculated Score: ${programme.totalScore}`);
    console.log(`CSD Status: ${programme.csdStatus}`);
    
    console.log(`\nSubject Breakdown:`);
    programme.breakdown.forEach(sub => {
        console.log(`  ${sub.abbreviation} (${sub.grade}):`);
        console.log(`    Raw Score: ${sub.rawScore}`);
        console.log(`    Calculated Score: ${sub.calculatedScore}`);
        if (sub.variable) {
            console.log(`    Variable: ${sub.variable}`);
        }
    });
    
    if (programme.comments.length > 0) {
        console.log(`\nComments:`);
        programme.comments.forEach(c => {
            console.log(`  [${c.type}] ${c.message}`);
        });
    }
}

/**
 * Run all tests
 */
export function runAllTests() {
    testAllUniversities();
    testSpecificUniversities();
    testMissingSubjects();
    testCSDNotAttained();
    testDetailedBreakdown();
    
    console.log('\n\n=== All Tests Completed ===\n');
}

// Uncomment to run tests
// runAllTests();
