export interface Profession {
    name: string;
    description: string;
    details: string;
    subjects: string;
    category: string;
    emoji: string;
}

export const PROFESSIONS: Profession[] = [
    {
        name: 'Программист',
        description: 'Создает и разрабатывает программное обеспечение.',
        details: 'Программист разрабатывает программное обеспечение, исправляет ошибки и создает алгоритмы.',
        subjects: 'Математика, Информатика',
        category: 'technical',
        emoji: '💻'
    },
    {
        name: 'Учитель',
        description: 'Обучает и вдохновляет учеников.',
        details: 'Учитель помогает ученикам достигать успеха и развиваться.',
        subjects: 'История, Литература',
        category: 'humanitarian',
        emoji: '📚'
    },
    {
        name: 'Дизайнер',
        description: 'Разрабатывает визуальные концепции.',
        details: 'Дизайнер создает графику, интерфейсы и стильные решения.',
        subjects: 'Рисование, Литература',
        category: 'creative',
        emoji: '🎨'
    },
    {
        name: 'Инженер',
        description: 'Создает сложные технические решения.',
        details: 'Инженер проектирует машины, конструкции и системы.',
        subjects: 'Физика, Математика',
        category: 'technical',
        emoji: '⚙️'
    },
    {
        name: 'Врач',
        description: 'Диагностирует и лечит пациентов.',
        details: 'Врач заботится о здоровье пациентов и проводит лечение.',
        subjects: 'Биология, Химия',
        category: 'humanitarian',
        emoji: '🩺'
    },
    {
        name: 'Архитектор',
        description: 'Создает дизайн зданий и сооружений.',
        details: 'Архитектор разрабатывает планы зданий и следит за их строительством.',
        subjects: 'Черчение, Физика',
        category: 'creative',
        emoji: '🏛️'
    }
];
