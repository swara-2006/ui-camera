import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

export default function LoginPage() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.leftIcon}>
            <Entypo name="menu" size={24} color="#F1EFEC" />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <Text style={styles.heyText}>Welcome Back!</Text>
        <Text style={styles.username}>Login to Continue</Text>

        {/* Login Card */}
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Or Signup */}
        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  leftIcon: {
    position: 'absolute',
    left: 0,
  },

  heyText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },

  username: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#F1EFEC',
  },

  card: {
    backgroundColor: '#D4C9BE',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 16,
    color: '#000',
  },

  button: {
    backgroundColor: '#123458',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  forgotText: {
    fontSize: 13,
    color: '#123458',
    textAlign: 'center',
    marginTop: 6,
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  signupText: {
    color: '#666',
    fontSize: 14,
  },

  signupLink: {
    color: '#F1EFEC',
    fontWeight: '700',
    fontSize: 14,
  },
});
