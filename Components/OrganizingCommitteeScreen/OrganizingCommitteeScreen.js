import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import MainHeader from '../Global/Header';

// Sample images (replace with actual images)
import presidentImage from '../../assets/images/president.jpeg';
import secretaryGeneralImage from '../../assets/images/secretary.jpeg';
import chairpersonImage from '../../assets/images/chairperson.jpeg';
import financeSecretaryImage from '../../assets/images/financeSecretary.jpeg';
import councilorImage from '../../assets/images/councilorFed.jpeg';
import absbanner from '../../assets/banners/org_banner.png'

// Get window dimensions for responsiveness
const { width } = Dimensions.get('window');

const OrganizingCommitteeScreen = () => {
  const committeeMembers = [
    { name: 'Dr. Shazia Farooqi', title: 'President', image: presidentImage },
    { name: 'Dr. Kiran Fatima', title: 'Secretary General', image: secretaryGeneralImage },
    { name: 'Dr. Saerah Iffat Zafar', title: 'Chairperson Scientific Committee', image: chairpersonImage },
    { name: 'Dr. Tanveer Nazir', title: 'Secretary Finance', image: financeSecretaryImage },
    { name: 'Dr. Adil Qayyum', title: 'Councilor (FED AREA, G&B)', image: councilorImage },
  ];

  return (
    <View style={styles.container}>
      {/* Main Header */}
      <MainHeader title="Organizing Committee RSP40" />

      <ScrollView contentContainerStyle={styles.content}>
          <Image source={absbanner} style={styles.bimage} />
        {committeeMembers.map((member, index) => (
          <View key={index} style={styles.card}>
            <Image source={member.image} style={styles.image} />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.title}>{member.title}</Text>
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
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 30) / 2, // Two columns with some margin
    backgroundColor: '#1f1f1f', // Card background
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
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
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default OrganizingCommitteeScreen;
