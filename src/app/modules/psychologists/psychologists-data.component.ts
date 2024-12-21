export interface Psychologist {
    id: string;
    avatar: string;
    name_ru: string;
    name_kz: string;
    description_ru: string;
    description_kz: string;
    experience_ru: string;
    experience_kz: string;
    schedule_ru: string;
    schedule_kz: string;
    specialization_ru: string;
    specialization_kz: string;
    email: string;
    phone: string;
}

export const PSYCHOLOGISTS: Psychologist[] = [
    {
        id: '1',
        avatar: 'assets/images/pages/profile/img_5.png',
        name_ru: 'Тимур Ахметов',
        name_kz: 'Тимур Ахметов',
        description_ru: 'Психолог-консультант',
        description_kz: 'Психолог-кеңесші',
        experience_ru: '12 лет',
        experience_kz: '12 жыл',
        schedule_ru: 'Вт-Пт: 11:00 - 19:00',
        schedule_kz: 'Сс-Жм: 11:00 - 19:00',
        specialization_ru: 'Консультации по личным вопросам, управление стрессом, эмоциональная поддержка.',
        specialization_kz: 'Жеке мәселелер бойынша кеңес беру, стрессті басқару, эмоционалды қолдау.',
        email: 'timur.akhmetov@psychology.kz',
        phone: '+7-700-999-1010'
    },
    {
        id: '2',
        avatar: 'assets/images/pages/profile/img_1.png',
        name_ru: 'Аскар Бейсенов',
        name_kz: 'Асқар Бейсенов',
        description_ru: 'Психолог-тренер',
        description_kz: 'Психолог-тренер',
        experience_ru: '11 лет',
        experience_kz: '11 жыл',
        schedule_ru: 'Пн-Сб: 10:00 - 17:00',
        schedule_kz: 'Дс-Сн: 10:00 - 17:00',
        specialization_ru: 'Тренинги по развитию лидерских качеств, управление конфликтами.',
        specialization_kz: 'Көшбасшылық қасиеттерді дамыту тренингтері, қақтығыстарды басқару.',
        email: 'askar.beysenov@psychology.kz',
        phone: '+7-701-444-3030'
    },
    {
        id: '3',
        avatar: 'assets/images/pages/profile/img_2.png',
        name_ru: 'Айдана Байжуманова',
        name_kz: 'Айдана Байжуманова',
        description_ru: 'Психолог-консультант',
        description_kz: 'Психолог-кеңесші',
        experience_ru: '7 лет',
        experience_kz: '7 жыл',
        schedule_ru: 'Вт-Пт: 10:00 - 16:00',
        schedule_kz: 'Сс-Жм: 10:00 - 16:00',
        specialization_ru: 'Работа с подростками, консультации по карьерным вопросам.',
        specialization_kz: 'Жасөспірімдермен жұмыс, мансап мәселелері бойынша кеңес беру.',
        email: 'aidana.baizhumanova@psychology.com',
        phone: '+7-700-555-1010'
    },
    {
        id: '4',
        avatar: 'assets/images/pages/profile/img_3.png',
        name_ru: 'Ерлан Кудайбергенов',
        name_kz: 'Ерлан Құдайбергенов',
        description_ru: 'Когнитивный психолог',
        description_kz: 'Когнитивтік психолог',
        experience_ru: '9 лет',
        experience_kz: '9 жыл',
        schedule_ru: 'Пн-Пт: 09:00 - 17:00',
        schedule_kz: 'Дс-Жм: 09:00 - 17:00',
        specialization_ru: 'Когнитивно-поведенческая терапия, работа с тревожностью и депрессией.',
        specialization_kz: 'Когнитивтік терапия, алаңдаушылық пен депрессиямен жұмыс.',
        email: 'yerlan.kudaibergenov@psychology.kz',
        phone: '+7-701-123-4567'
    },
    {
        id: '5',
        avatar: 'assets/images/pages/profile/img_4.png',
        name_ru: 'Асель Турсунова',
        name_kz: 'Әсел Тұрсынова',
        description_ru: 'Психолог по семейным отношениям',
        description_kz: 'Отбасылық қарым-қатынастар психологы',
        experience_ru: '8 лет',
        experience_kz: '8 жыл',
        schedule_ru: 'Ср-Сб: 12:00 - 18:00',
        schedule_kz: 'Ср-Сн: 12:00 - 18:00',
        specialization_ru: 'Семейное консультирование, улучшение коммуникации в семье.',
        specialization_kz: 'Отбасылық кеңес беру, отбасындағы қарым-қатынасты жақсарту.',
        email: 'assel.tursunova@psychology.kz',
        phone: '+7-777-555-8088'
    },
    {
        id: '6',
        avatar: 'assets/images/pages/profile/img.png',
        name_ru: 'Арман Жуманов',
        name_kz: 'Арман Жұманов',
        description_ru: 'Детский психолог',
        description_kz: 'Балалар психологы',
        experience_ru: '6 лет',
        experience_kz: '6 жыл',
        schedule_ru: 'Пн-Пт: 10:00 - 18:00',
        schedule_kz: 'Дс-Жм: 10:00 - 18:00',
        specialization_ru: 'Работа с детьми, помощь в адаптации к школе, развитие социализации.',
        specialization_kz: 'Балалармен жұмыс, мектепке бейімделуге көмек, әлеуметтенуді дамыту.',
        email: 'arman.zhumanov@psychology.kz',
        phone: '+7-702-333-2020'
    }
];

