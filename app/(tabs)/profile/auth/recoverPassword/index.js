// screens/RecoverPasswordScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { recoverPassword } from '../api';

const RecoverPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRecoverPassword = async () => {
        try {
            const res = await recoverPassword(email);
            setMessage(res.message);
        } catch (err) {
            console.error(err);
            setMessage('Error recovering password');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter your email to recover password:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Button title="Recover Password" onPress={handleRecoverPassword} />
            {message ? <Text style={{ marginTop: 10 }}>{message}</Text> : null}
        </View>
    );
};

export default RecoverPasswordScreen;
