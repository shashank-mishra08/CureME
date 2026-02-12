import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Phone, ArrowRight } from 'lucide-react-native';

export default function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = () => {
        // TODO: Implement Firebase Auth here
        console.log("Login with:", phoneNumber);
        // Temporary navigation for demo
        navigation.replace('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardView}
            >
                <View style={styles.header}>
                    {/* Placeholder for Logo */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>CN</Text>
                    </View>
                    <Text style={styles.title}>Welcome back</Text>
                    <Text style={styles.subtitle}>Enter your phone number to continue</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Phone size={20} color="#666" style={styles.icon} />
                        <Text style={styles.countryCode}>+91</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Phone Number"
                            keyboardType="phone-pad"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            maxLength={10}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <LinearGradient
                            colors={['#007AFF', '#0056b3']}
                            style={styles.gradientButton}
                        >
                            <Text style={styles.buttonText}>Continue</Text>
                            <ArrowRight size={20} color="#fff" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerText}>
                    By continuing, you agree to our Terms & Privacy Policy
                </Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardView: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
    },
    logoContainer: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
        marginBottom: 24,
        backgroundColor: '#F8F9FA',
    },
    icon: {
        marginRight: 12,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1a1a1a',
    },
    button: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    gradientButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 8,
    },
    footerText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        position: 'absolute',
        bottom: 40,
        left: 24,
        right: 24,
    },
});
