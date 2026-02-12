import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Bell, Star } from 'lucide-react-native';

const CATEGORIES = [
    { id: 1, name: 'General', icon: '🌡️' },
    { id: 2, name: 'Skin', icon: '🧴' },
    { id: 3, name: 'Dentist', icon: '🦷' },
    { id: 4, name: 'Heart', icon: '❤️' },
    { id: 5, name: 'Eye', icon: '👁️' },
    { id: 6, name: 'Ortho', icon: '🦴' },
];

const DOCTORS = [
    { id: 1, name: 'Dr. Aditi Sharma', spec: 'Dentist', rating: 4.8, exp: '7 yrs', fee: '₹300' },
    { id: 2, name: 'Dr. Rahul Verma', spec: 'Cardiologist', rating: 4.9, exp: '12 yrs', fee: '₹800' },
    { id: 3, name: 'Dr. Priya Singh', spec: 'General', rating: 4.5, exp: '5 yrs', fee: '₹200' },
];

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hello, Shashank 👋</Text>
                        <View style={styles.locationContainer}>
                            <MapPin size={14} color="#666" />
                            <Text style={styles.location}>New Delhi, India</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bellButton}>
                        <Bell size={24} color="#333" />
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
                            placeholder="Search 'Stomach pain', 'Fever'..."
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </View>

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
                        <Text style={styles.sectionTitle}>Top Doctors Nearby</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.doctorList}>
                        {DOCTORS.map((doc) => (
                            <TouchableOpacity key={doc.id} style={styles.doctorCard}>
                                <View style={styles.doctorImagePlaceholder} />
                                <View style={styles.doctorInfo}>
                                    <Text style={styles.doctorName}>{doc.name}</Text>
                                    <Text style={styles.doctorSpec}>{doc.spec}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Star size={12} color="#FFD700" fill="#FFD700" />
                                        <Text style={styles.rating}>{doc.rating}</Text>
                                        <Text style={styles.reviews}>• {doc.exp} exp</Text>
                                    </View>
                                    <Text style={styles.fee}>{doc.fee}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginLeft: 4,
    },
    bellButton: {
        position: 'relative',
        padding: 8,
        backgroundColor: '#FFF',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
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
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#FFF',
    },
    searchContainer: {
        marginBottom: 24,
    },
    searchTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 16,
        width: '70%',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 56,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    input: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    seeAll: {
        color: '#007AFF',
        fontWeight: '600',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryCard: {
        width: '30%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 12,
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
        color: '#333',
        fontWeight: '500',
    },
    doctorList: {
        marginLeft: -4,
    },
    doctorCard: {
        width: 160,
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 12,
        marginRight: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginLeft: 4,
        marginBottom: 4, // for shadow
    },
    doctorImagePlaceholder: {
        width: '100%',
        height: 100,
        backgroundColor: '#E3F2FD',
        borderRadius: 12,
        marginBottom: 12,
    },
    doctorInfo: {
        alignItems: 'flex-start',
    },
    doctorName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    doctorSpec: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    rating: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 4,
    },
    reviews: {
        fontSize: 12,
        color: '#999',
        marginLeft: 4,
    },
    fee: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});
