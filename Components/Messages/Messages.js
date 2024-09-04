import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import MainHeader from '../Global/Header';

import presidentImage from '../../assets/images/president.jpeg';
import secretaryImage from '../../assets/images/secretary.jpeg';
import chairpersonImage from '../../assets/images/chairperson.jpeg';
import absbanner from '../../assets/banners/mess-banner.png'

const { width } = Dimensions.get('window');

const Messages = () => {
  const messages = [
    {
      image: presidentImage,
      title: 'Prof. Dr. Shazia Faruqui',
      subtitle: 'PRESIDENT RSP',
      message: `Welcome to the Radiological Society of Pakistan's official website...`,
    },
    {
      image: secretaryImage,
      title: 'Prof. Dr. Kiran Fatima Farooq',
      subtitle: 'SECRETARY GENERAL RSP',
      message: `As the Secretary General of the Radiological Society of Pakistan, I am delighted to welcome you...`,
    },
    {
      image: chairpersonImage,
      title: 'Dr. Saerah Iffat Zafar',
      subtitle: 'Chairperson Scientific Committee',
      message: `This year, the scientific session aims to bring an amalgamation of national and international experience...`,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Main Header */}
      <MainHeader title="Messages" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Banner Image Card */}
        <View style={styles.bannerCard}>
          <Image source={absbanner} style={styles.bimage} />
        </View>

        {/* Messages Cards */}
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
  bimage: {
    width: "100%" ,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10, // Rounded corners
  },
  bannerCard: {
    backgroundColor: '#1f1f1f', // Card background
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
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
    color: '#ffffff',
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default Messages;
