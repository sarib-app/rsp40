import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ComingSoonScreen = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date('2024-09-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const handleNotifyMe = () => {
    if (email) {
      // Handle the submission, e.g., send email to API
      console.log(`Email submitted: ${email}`);
      alert('Thank you! You will be notified.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://your-background-image-url.com' }} // Replace with your image URL
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)']}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>We're Launching Soon</Text>
          <Text style={styles.subtitle}>Our website is under construction. Stay tuned for something amazing!</Text>

          <View style={styles.countdown}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{timeLeft.days || '00'}</Text>
              <Text style={styles.label}>Days</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{timeLeft.hours || '00'}</Text>
              <Text style={styles.label}>Hours</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{timeLeft.minutes || '00'}</Text>
              <Text style={styles.label}>Minutes</Text>
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>{timeLeft.seconds || '00'}</Text>
              <Text style={styles.label}>Seconds</Text>
            </View>
          </View>

          <Text style={styles.notifyText}>Get notified when we launch:</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleNotifyMe}>
              <Text style={styles.buttonText}>Notify Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for the container

  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  countdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  timeBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
  notifyText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#e33fa1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ComingSoonScreen;
