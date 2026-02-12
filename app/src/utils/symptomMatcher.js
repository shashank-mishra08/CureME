import stringSimilarity from 'string-similarity';
import { MEDICAL_DICTIONARY, EMERGENCY_KEYWORDS } from '../data/medicalDictionary';

/**
 * AI SYMPTOM MATCHER (The Core Logic)
 * ------------------------------------
 * This function takes the User's Input (e.g., "Mujhe pet mein dard hai")
 * and returns the Best Matching Specialist (e.g., "Gastroenterologist").
 * 
 * Algorithm Steps:
 * 1. Tokenize: Break sentence into words.
 * 2. Filter: Remove useless words (Stopwords).
 * 3. Fuzzy Match: Compare each word with our Medical Dictionary.
 * 4. Score: Calculate confidence score.
 * 
 * @param {string} userInput - The text entered by the patient.
 * @returns {object} - { specialist: string, confidence: number, match: boolean }
 */
export const findSpecialist = (userInput) => {
    // Step 0: Safety Check (Agar input khali ho)
    if (!userInput || userInput.length < 3) {
        return { match: false, reason: 'Input too short' };
    }

    // Convert to lowercase for consistent matching
    const lowerInput = userInput.toLowerCase();

    // Step 1: Check for Emergency Keywords FIRST
    // Emergency cases should bypass normal logic
    for (const word of EMERGENCY_KEYWORDS) {
        if (lowerInput.includes(word)) {
            return {
                specialist: 'Emergency',
                confidence: 1.0,
                match: true,
                isEmergency: true
            };
        }
    }

    // Step 2: Search Logic
    let bestMatch = { specialist: null, score: 0 };

    // Loop through every specialist in our database
    MEDICAL_DICTIONARY.forEach((category) => {
        // We use stringSimilarity to compare the whole input string 
        // against the keywords of this category.

        // Example: logic checks how similar "pet dard" is to ["stomach", "pet", "gas"]
        const matches = stringSimilarity.findBestMatch(lowerInput, category.keywords);

        // matches.bestMatch.rating gives a score between 0 and 1
        // 1 means exact match, 0 means no match
        const bestRating = matches.bestMatch.rating;

        // Also check if the exact word exists (Manual Override)
        // Because "Pet" (English pet animal) and "Pet" (Hindi stomach) can confuse AI,
        // but here context is medical, so usually safe.
        const exactWordFound = category.keywords.some(keyword => lowerInput.includes(keyword));

        // Calculate Final Score
        // If exact word is found, give it a high score (0.8)
        // Otherwise use the fuzzy match score
        const finalScore = exactWordFound ? 0.9 : bestRating;

        // If this category has a higher score than the previous best, update it
        if (finalScore > bestMatch.score) {
            bestMatch = {
                specialist: category.specialist,
                score: finalScore,
                icon: category.icon
            };
        }
    });

    // Step 3: Threshold Check
    // If the best score is too low (e.g., user typed "Ferrari car"), return no match
    if (bestMatch.score > 0.3) {
        return {
            specialist: bestMatch.specialist,
            confidence: bestMatch.score,
            icon: bestMatch.icon,
            match: true
        };
    } else {
        return { match: false, reason: 'No clear match found' };
    }
};
