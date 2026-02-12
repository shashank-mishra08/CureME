import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Star, Clock, ShieldCheck, Phone, Calendar, ArrowLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function DoctorProfileScreen({ route, navigation }) {
    // Receive doctor data from previous screen, or use defaults
    const { doctor } = route.params || {
        doctor: {
            name: 'Dr. Unknown',
            spec: 'Specialist',
            rating: 0,
            exp: '0 yrs',
            fee: '₹0',
            isVerified: false
        }
    };

    // Mock Data for Profile Details
    const stats = [
        { label: 'Patients', value: '1.5k+' },
        { label: 'Experience', value: doctor.exp },
        { label: 'Rating', value: doctor.rating },
    ];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Header Image Area */}
                <View style={styles.headerImageContainer}>
                    <View style={styles.placeholderImage} />
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <ArrowLeft size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Doctor Info Card */}
                <View style={styles.infoContainer}>
                    <View style={styles.nameRow}>
                        <Text style={styles.name}>{doctor.name}</Text>
                        {/* Verified Badge Logic */}
                        {doctor.rating > 4.5 && ( // Simulating verification logic based on rating for now
                            <View style={styles.verifiedBadge}>
                                <ShieldCheck size={14} color="#FFF" />
                                <Text style={styles.verifiedText}>Verified</Text>
                            </View>
                        )}
                    </View>
                    <Text style={styles.spec}>{doctor.spec} • Apollo Hospital</Text>

                    {/* Stats Row */}
                    <View style={styles.statsRow}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statItem}>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* About Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.description}>
                        {doctor.name} is a top specialist with over {doctor.exp} of experience.
                        Dedicated to providing the best medical care with a focus on patient recovery.
                        Specializes in treating complex cases related to {doctor.spec}.
                    </Text>
                </View>

                {/* Clinic Info */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Clinic Location</Text>
                    <View style={styles.clinicCard}>
                        <View style={styles.clinicRow}>
                            <MapPin size={20} color="#007AFF" style={{ marginTop: 2 }} />
                            <View style={styles.clinicDetails}>
                                <Text style={styles.clinicName}>CureNow Clinic, South Delhi</Text>
                                <Text style={styles.clinicAddress}>Block E, Greater Kailash II, New Delhi. 2km away</Text>
                            </View>
                        </View>
                        {/* Map Placeholder */}
                        <View style={styles.mapPlaceholder}>
                            <Text style={styles.mapText}>📍 Google Map View</Text>
                        </View>
                    </View>
                </View>

                {/* Availability */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Availability</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slotScroll}>
                        {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map((time, index) => (
                            <TouchableOpacity key={index} style={[styles.slotChip, index === 0 && styles.activeSlot]}>
                                <Text style={[styles.slotText, index === 0 && styles.activeSlotText]}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

            </ScrollView>

            {/* Bottom Action Bar */}
            <View style={styles.bottomBar}>
                <View>
                    <Text style={styles.totalLabel}>Consultation Fee</Text>
                    <Text style={styles.totalPrice}>{doctor.fee}</Text>
                </View>
                <TouchableOpacity style={styles.bookButton} onPress={() => alert('Booking Flow coming soon!')}>
                    <LinearGradient
                        colors={['#007AFF', '#0056b3']}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.bookButtonText}>Book Appointment</Text>
                        <Calendar size={20} color="#FFF" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    headerImageContainer: {
        height: 250,
        width: '100%',
        backgroundColor: '#E3F2FD',
    },
    placeholderImage: {
        flex: 1,
        backgroundColor: '#90CAF9', // Placeholder color specifically
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    infoContainer: {
        padding: 20,
        marginTop: -20,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        flex: 1,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00C853',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    verifiedText: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    spec: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        padding: 16,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    statLabel: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    },
    section: {
        padding: 20,
        paddingTop: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
    },
    clinicCard: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    clinicRow: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    clinicDetails: {
        marginLeft: 12,
        flex: 1,
    },
    clinicName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    clinicAddress: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    mapPlaceholder: {
        height: 100,
        backgroundColor: '#E0E0E0',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapText: {
        color: '#666',
        fontWeight: '500',
    },
    slotScroll: {
        flexDirection: 'row',
    },
    slotChip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DDD',
        marginRight: 10,
        backgroundColor: '#FFF',
    },
    activeSlot: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    slotText: {
        color: '#333',
        fontWeight: '500',
    },
    activeSlotText: {
        color: '#FFF',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 30, // For iPhone home bar
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        elevation: 20,
    },
    totalLabel: {
        fontSize: 12,
        color: '#999',
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    bookButton: {
        width: '60%',
        borderRadius: 16,
        overflow: 'hidden',
    },
    gradientButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
    },
    bookButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 8,
    },
});
