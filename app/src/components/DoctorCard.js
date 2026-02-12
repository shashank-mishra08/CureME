import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Star } from 'lucide-react-native';
import { COLORS, SPACING } from '../constants/theme';

export default function DoctorCard({ doctor, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.imagePlaceholder} />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{doctor.name}</Text>
                <Text style={styles.spec}>{doctor.spec}</Text>

                <View style={styles.ratingContainer}>
                    <Star size={12} color="#FFD700" fill="#FFD700" />
                    <Text style={styles.rating}>{doctor.rating}</Text>
                    <Text style={styles.exp}>• {doctor.exp}</Text>
                </View>

                <Text style={styles.fee}>{doctor.fee}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: SPACING.s + 4,
        marginRight: SPACING.m,
        elevation: 2,
        shadowColor: COLORS.cardShadow,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginLeft: 4,
        marginBottom: 4,
    },
    imagePlaceholder: {
        width: '100%',
        height: 100,
        backgroundColor: '#E3F2FD',
        borderRadius: 12,
        marginBottom: SPACING.s,
    },
    info: {
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 2,
    },
    spec: {
        fontSize: 12,
        color: COLORS.textSecondary,
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
        color: COLORS.text,
        marginLeft: 4,
    },
    exp: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginLeft: 4,
    },
    fee: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
});
