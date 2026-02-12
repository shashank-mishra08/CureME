import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Home, Phone, MapPin } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BookingSuccessScreen({ route, navigation }) {
    // Get doctor and slot details from navigation params
    const { doctor, time } = route.params || {
        doctor: { name: 'Dr. Unknown', spec: 'Specialist' },
        time: '10:00 AM'
    };

    // Animation Value (Scale: 0 -> 1)
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Start the "Pop" animation
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {/* Animated Green Circle */}
                <Animated.View style={[styles.successIcon, { transform: [{ scale: scaleValue }] }]}>
                    <LinearGradient
                        colors={['#00C853', '#69F0AE']}
                        style={styles.iconGradient}
                    >
                        <Check size={48} color="#FFF" strokeWidth={3} />
                    </LinearGradient>
                </Animated.View>

                <Text style={styles.title}>Booking Confirmed!</Text>
                <Text style={styles.subtitle}>
                    Your appointment with {doctor.name} is successfully booked.
                </Text>

                {/* Token / Ticket View */}
                <View style={styles.ticket}>
                    <View style={styles.ticketRow}>
                        <Text style={styles.ticketLabel}>Token Number</Text>
                        <Text style={styles.tokenNumber}>#12</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.ticketDetails}>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Date</Text>
                            <Text style={styles.detailValue}>Today</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Time</Text>
                            <Text style={styles.detailValue}>{time}</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Status</Text>
                            <Text style={[styles.detailValue, { color: '#00C853' }]}>Active</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.outlineButton}>
                    <MapPin size={20} color="#007AFF" />
                    <Text style={styles.outlineButtonText}>Get Directions</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Actions */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })}
                >
                    <Home size={24} color="#FFF" />
                    <Text style={styles.homeButtonText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 24,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    successIcon: {
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -60, // Pop out of card effect
    },
    iconGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#FFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 24,
    },
    ticket: {
        width: '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EEE',
        borderStyle: 'dashed',
        marginBottom: 20,
    },
    ticketRow: {
        alignItems: 'center',
        marginBottom: 16,
    },
    ticketLabel: {
        fontSize: 12,
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    tokenNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    divider: {
        height: 1,
        backgroundColor: '#DDD',
        width: '100%',
        marginBottom: 16,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#DDD',
    },
    ticketDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailItem: {
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    outlineButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    outlineButtonText: {
        color: '#007AFF',
        fontWeight: '600',
        marginLeft: 8,
    },
    bottomContainer: {
        marginTop: 40,
        width: '100%',
    },
    homeButton: {
        backgroundColor: '#1a1a1a',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 16,
        elevation: 2,
    },
    homeButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
