// screens/SignUpScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AuthContext } from '../AuthContext';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const { signUp } = useContext(AuthContext);

    const handleSignUp = async () => {
        try {
            await signUp({ name, email, password, phone });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Name:</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Text>Phone:</Text>
            <TextInput
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

export default SignUpScreen;
