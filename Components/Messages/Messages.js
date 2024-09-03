import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import MainHeader from '../Global/Header';

// Sample images (replace with actual images)
import presidentImage from '../../assets/images/president.jpeg';
import secretaryImage from '../../assets/images/secretary.jpeg';
import chairpersonImage from '../../assets/images/chairperson.jpeg';

const Messages = () => {
  const messages = [
    {
      image: presidentImage,
      title: 'Prof. Dr. Shazia Faruqui',
      subtitle: 'PRESIDENT RSP',
      message: `Welcome to the Radiological Society of Pakistan's official website. Our theme this year, "Connecting Across Borders," reflects our commitment to fostering global collaboration in the field of radiology. Our mission is to elevate the standards of radiological training within Pakistan by liaising with the international community. We aim to bridge gaps, share knowledge, and bring cutting-edge practices to our nation. 
      By working together with global experts and institutions, we strive to enhance the skills and capabilities of our radiologists, ultimately improving patient care and outcomes. We invite you to join us in this endeavor, as we build a stronger, interconnected network of radiology professionals dedicated to excellence and innovation.
      Thank you for your continued support and engagement.`,
    },
    {
      image: secretaryImage,
      title: 'Prof. Dr. Kiran Fatima Farooq',
      subtitle: 'SECRETARY GENERAL RSP',
      message: `As the Secretary General of the Radiological Society of Pakistan, I am delighted to welcome you to our upcoming conference. This event promises to be an extraordinary gathering of leading experts and practitioners in the field of Radiology.
      Why "Connecting Across Borders"? Because we recognize that excellence in radiology cannot thrive in isolation. By reaching across oceans, cultures, and time zones, we can learn from each other's experiences, share best practices, and elevate our collective expertise.
      Our mission extends beyond academic pursuits. It touches the lives of patients—the heart of our practice. By connecting with experts worldwide, we can bring advanced training and compassionate care to our local communities. Together, we can improve diagnostic accuracy, enhance patient outcomes, and drive progress.
      I invite each of you to actively participate in the conference. Attend lectures, engage in discussions, and contribute your insights. Let us break down barriers, embrace diversity, and build a stronger radiology community—one that thrives on collaboration.`,
    },
    {
      image: chairpersonImage,
      title: 'Dr. Saerah Iffat Zafar',
      subtitle: 'Chairperson Scientific Committee',
      message: `This year, the scientific session aims to bring an amalgamation of national and international experience to the fore, with the aim to promote the conference theme of 'connecting across borders'. Scientific workshops and sessions are planned such that they not only enhance professional knowledge but explore other arenas such as research skills and preparation for international examinations (FRCR). The highlight of the conference, however, remains active participation by the faculty of The Royal College of Radiologists (RCR) in our scientific sessions.`,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Main Header */}
      <MainHeader title="Messages" />

      <ScrollView contentContainerStyle={styles.content}>
        {messages.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: '#1f1f1f', // Card background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#ffffff', // Pink color for the message text
    textAlign: 'justify', // Justify the message text
    lineHeight: 24,
  },
});

export default Messages
