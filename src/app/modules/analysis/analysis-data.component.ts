export interface TestResult {
    testName: string;
    date: string;
    score: number;
    maxScore: number;
}

export interface ProfessionRecommendation {
    profession: string;
    compatibility: number;
    universities: string[];
}

export const ANALYSIS_DATA = {
    testResults: [
        { testName: 'Лидерство', date: '2024-12-20', score: 4, maxScore: 5 },
        { testName: 'Креативность', date: '2024-12-18', score: 5, maxScore: 5 },
        { testName: 'Стрессоустойчивость', date: '2024-12-17', score: 3, maxScore: 5 },
    ],
    recommendations: [
        {
            profession: 'Программист',
            compatibility: 90,
            universities: ['Astana IT University', 'KazNU', 'Nazarbayev University'],
        },
        {
            profession: 'Графический дизайнер',
            compatibility: 75,
            universities: ['Almaty Design Institute', 'Art Academy'],
        },
    ],
};

