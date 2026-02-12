import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Bell } from 'lucide-react-native';
import { findSpecialist } from '../utils/symptomMatcher';

// Imports from new structure
import { CATEGORIES, DOCTORS } from '../constants/data';
import { COLORS, SPACING } from '../constants/theme';
import DoctorCard from '../components/DoctorCard';

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [aiResult, setAiResult] = useState(null);
    const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);

    // AI SEARCH HANDLER
    const handleSearch = (text) => {
        setSearchText(text);

        if (text.length === 0) {
            setAiResult(null);
            setFilteredDoctors(DOCTORS);
            return;
        }

        const result = findSpecialist(text);

        if (result.match) {
            setAiResult(result);
            const relevantDoctors = DOCTORS.filter(doc => doc.spec === result.specialist);
            setFilteredDoctors(relevantDoctors);
        } else {
            setAiResult(null);
            const keywordMatches = DOCTORS.filter(doc =>
                doc.name.toLowerCase().includes(text.toLowerCase()) ||
                doc.spec.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredDoctors(keywordMatches);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hello, Shashank 👋</Text>
                        <View style={styles.locationContainer}>
                            <MapPin size={14} color={COLORS.textSecondary} />
                            <Text style={styles.location}>New Delhi, India</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bellButton}>
                        <Bell size={24} color={COLORS.text} />
                        <View style={styles.badge} />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchTitle}>What are you feeling today?</Text>
                    <View style={styles.searchBox}>
                        <Search size={20} color="#999" />
                        <TextInput
                            style={styles.input}
                            placeholder="Type 'Stomach pain', 'Fever'..."
                            value={searchText}
                            onChangeText={handleSearch}
                        />
                    </View>
                </View>

                {/* AI RESULT CARD */}
                {aiResult && (
                    <View style={styles.aiResultCard}>
                        <View style={styles.aiHeader}>
                            <View style={styles.aiIconContainer}>
                                <Text style={{ fontSize: 24 }}>{aiResult.icon}</Text>
                            </View>
                            <View>
                                <Text style={styles.aiLabel}>AI Suggestion</Text>
                                <Text style={styles.aiSpecialist}>{aiResult.specialist}</Text>
                            </View>
                        </View>
                        <Text style={styles.aiConfidence}>
                            Match Confidence: {Math.round(aiResult.confidence * 100)}%
                        </Text>
                    </View>
                )}

                {/* Categories */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Specialties</Text>
                    <View style={styles.categoriesGrid}>
                        {CATEGORIES.map((cat) => (
                            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                                <Text style={styles.categoryName}>{cat.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Top Doctors */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>
                            {aiResult ? `Recommended for You` : `Top Doctors Nearby`}
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.doctorList}>
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doc) => (
                                <DoctorCard
                                    key={doc.id}
                                    doctor={doc}
                                    onPress={() => navigation.navigate('DoctorProfile', { doctor: doc })}
                                />
                            ))
                        ) : (
                            <Text style={styles.noResult}>No doctors found for this issue.</Text>
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SPACING.m,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.l,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    location: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginLeft: 4,
    },
    bellButton: {
        position: 'relative',
        padding: SPACING.s,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        elevation: 2,
        shadowColor: COLORS.cardShadow,
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.error,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    searchContainer: {
        marginBottom: SPACING.l,
    },
    searchTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.m,
        width: '70%',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 16,
        paddingHorizontal: SPACING.m,
        height: 56,
        elevation: 2,
        shadowColor: COLORS.cardShadow,
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    input: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
        color: COLORS.text,
    },
    aiResultCard: {
        backgroundColor: '#E3F2FD',
        borderRadius: 16,
        padding: SPACING.m,
        marginBottom: SPACING.l,
        borderWidth: 1,
        borderColor: '#90CAF9',
    },
    aiHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    aiIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    aiLabel: {
        fontSize: 12,
        color: '#1565C0',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    aiSpecialist: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D47A1',
    },
    aiConfidence: {
        fontSize: 12,
        color: '#546E7A',
        marginTop: 4,
    },
    section: {
        marginBottom: SPACING.l,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.m,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 12,
    },
    seeAll: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '30%',
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: SPACING.s + 4,
        alignItems: 'center',
        marginBottom: 12,
        elevation: 1,
    },
    categoryIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 12,
        color: COLORS.text,
        fontWeight: '500',
    },
    doctorList: {
        marginLeft: -4,
    },
    noResult: {
        fontSize: 14,
        color: COLORS.textSecondary,
        fontStyle: 'italic',
        padding: 16,
    }
});
