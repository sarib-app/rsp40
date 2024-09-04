import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import MainHeader from '../Global/Header';



// Sample images (replace with actual images)
import presidentImage from '../../assets/images/president.jpeg';
import secretaryImage from '../../assets/images/secretary.jpeg';
import vicePresidentImage from '../../assets/images/vicePresident.jpeg';
import financeSecretaryImage from '../../assets/images/financeSecretary.jpeg';
import presidentElectImage from '../../assets/images/presidentElect.jpeg';
import secretaryGeneralElectImage from '../../assets/images/secretaryGeneralElect.jpeg';
import jointSecretary1Image from '../../assets/images/jointSecretary1.jpeg';
import jointSecretary2Image from '../../assets/images/jointSecretary2.jpeg';
import councilorFedImage from '../../assets/images/councilorFed.jpeg';
import councilorKPKImage from '../../assets/images/councilorKPK.jpeg';
import councilorPunjabImage from '../../assets/images/councilorPunjab.jpeg';
import councilorBalochistanImage from '../../assets/images/councilorBalochistan.jpeg';
import pastPresidentImage from '../../assets/images/pastPresident.jpeg';
import chiefEditorImage from '../../assets/images/chiefEditor.jpeg';
import presidentBIRSPImage from '../../assets/images/presidentBIRSP.jpeg';
import pastSecGenImage from '../../assets/images/pastSecGen.jpeg';
import absbanner from '../../assets/banners/exuc_banner.png'

// Get window dimensions for responsiveness
const { width } = Dimensions.get('window');

const ExectiveCouncil = () => {
  const members = [
    { name: 'Prof. Dr. Shazia Faruqui', title: 'President', image: presidentImage },
    { name: 'Prof. Dr. Kiran Fatima Farooq', title: 'Secretary General', image: secretaryImage },
    { name: 'Dr. Tanveer Zubairi', title: 'Vice President', image: vicePresidentImage },
    { name: 'Dr. Rashed Nazir', title: 'Secretary Finance', image: financeSecretaryImage },
    { name: 'Dr. Khawaja Khurshid', title: 'President Elect', image: presidentElectImage },
    { name: 'Dr. Zia Salman Farooqi', title: 'Secretary General Elect', image: secretaryGeneralElectImage },
    { name: 'Dr. Sadaf Nasir', title: 'Joint Secretary', image: jointSecretary1Image },
    { name: 'Dr. Rafia Shahzad', title: 'Joint Secretary', image: jointSecretary2Image },
    { name: 'Dr. Adil Qayyum', title: 'Councilor (FED AREA, G&B)', image: councilorFedImage },
    { name: 'Dr. Anisa Sundal', title: 'Councilor KPK', image: councilorKPKImage },
    { name: 'Dr. Nosheen Ahmad', title: 'Councilor (PUNJAB)', image: councilorPunjabImage },
    { name: 'Dr. Syed Zain ud Din', title: 'Councilor Balochistan', image: councilorBalochistanImage },
    { name: 'Prof. Dr. Ashraf Achakzai', title: 'Immediate Past President', image: pastPresidentImage },
    { name: 'Dr. Mukhtiar Memon', title: 'Chief Editor PJR', image: chiefEditorImage },
    { name: 'Prof. Dr. Saleha Anwar', title: 'President BIRSP', image: presidentBIRSPImage },
    { name: 'Dr. Pari Gul', title: 'Immediate Past Sec. General', image: pastSecGenImage },
  ];

  return (
    <View style={styles.container}>
      {/* Main Header */}
      <MainHeader title="Exective Council" />

      <ScrollView contentContainerStyle={styles.content}>
      <Image source= {absbanner} style={styles.bimage} />

        {members.map((member, index) => (
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
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
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

export default ExectiveCouncil;
