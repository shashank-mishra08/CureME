/**
 * MEDICAL DICTIONARY (Simulated AI Database)
 * ------------------------------------------
 * This file acts as the "Brain" for our Keyword Matcher.
 * It maps common words users might say (keywords) to the correct Doctor Type.
 * 
 * Structure:
 * - specialist: The technical name of the doctor (e.g., 'Gastroenterologist').
 * - keywords: A list of words a user might type (e.g., 'pet', 'stomach', 'gas').
 */

export const MEDICAL_DICTIONARY = [
    {
        specialist: 'General Physician',
        keywords: ['fever', 'bukhar', 'cold', 'sardi', 'cough', 'khasi', 'flu', 'viral', 'headache', 'sar dard', 'kamzori', 'weakness'],
        icon: '🌡️'
    },
    {
        specialist: 'Gastroenterologist',
        keywords: ['stomach', 'pet', 'pain', 'dard', 'gas', 'acidity', 'vomit', 'ulti', 'digestion', 'kabz', 'constipation'],
        icon: '🤢'
    },
    {
        specialist: 'Cardiologist',
        keywords: ['heart', 'dil', 'chest', 'chaati', 'dharkan', 'beat', 'pressure', 'bp', 'attack'],
        icon: '❤️'
    },
    {
        specialist: 'Dermatologist',
        keywords: ['skin', 'tvacha', 'rash', 'khujli', 'itch', 'pimple', 'acne', 'daag', 'baal', 'hair'],
        icon: '🧴'
    },
    {
        specialist: 'Dentist',
        keywords: ['tooth', 'daant', 'gum', 'masuda', 'cavity', 'kida', 'mouth', 'muh'],
        icon: '🦷'
    },
    {
        specialist: 'Orthopedist',
        keywords: ['bone', 'haddi', 'joint', 'jod', 'back', 'kamar', 'knee', 'ghutna', 'fracture'],
        icon: '🦴'
    }
];

// Special keywords that indicate an emergency
export const EMERGENCY_KEYWORDS = ['accident', 'khoon', 'blood', 'heart attack', 'poison', 'zeher', 'breathing', 'saans'];
