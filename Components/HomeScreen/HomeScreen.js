import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Marigner from '../../header';
import MainHeader from '../Global/Header';
import banner1 from '../../assets/images/banner1.png';
import logo from '../../assets/logo.jpeg'; // Add your logo here
import about from '../../assets/icons/about.png'
import registration from "../../assets/icons/registration.png"
import abstract from "../../assets/icons/abstract.png"
import messages from "../../assets/icons/messages.png"
import executive from "../../assets/icons/exective.png"
import organizing from "../../assets/icons/organizing.png"
import scientific from "../../assets/icons/scientific.png"
import recreational from "../../assets/icons/recreational.png"
import accommodation from "../../assets/icons/accommodation.png"
import sponsorship from "../../assets/icons/sponsorship.png"

// Get window dimensions for responsiveness
const { width } = Dimensions.get('window');

// Images for the slider
const images = [{ uri: banner1 }];

const HomeScreen = () => {
  const navigation = useNavigation();
  const boxes = [
    { text: 'Registration', icon: registration, route: 'RegisterScreen' },
    { text: 'Abstract Submission', icon: abstract, route: 'AbstractForm' },
    { text: 'About RSP', icon: about, route: 'AboutRSP' },
    { text: 'Messages', icon: messages, route: 'Messages' },
    { text: 'Executive Council', icon: executive, route: 'ExectiveCouncil' },
    { text: 'Organizing Committee', icon: organizing, route: 'OrganizingCommitteeScreen' },
    { text: 'Scientific Programme', icon: scientific, route: 'ScientificProgrammeScreen' },
    { text: 'Recreational Tour', icon: recreational, route: 'ComingSoonScreen' },
    { text: 'Accommodation', icon: accommodation, route: 'AccommodationScreen' },
    { text: 'Sponsorship Tariff', icon: sponsorship, route: 'SponsorshipTariffScreen' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <MainHeader title={"RSP40"} /> */}

      <ScrollView nestedScrollEnabled={true}>
        <Marigner />

        {/* Slider */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          {images.map((image, index) => (
            <Image key={index} source={image.uri} style={styles.sliderImage} />
          ))}
        </ScrollView>

        {/* Grid */}
        <View style={styles.grid}>
          {boxes.map((box, index) => (
            <TouchableOpacity 
              onPress={() => navigation.navigate(box.route)}
              key={index} 
              style={styles.box}
            >
              <LinearGradient
                colors={['#ff70c6', '#e33fa1']}
                style={styles.gradient}
              >
                <Image style={{width: 50,height:50, tintColor: '#ffffff'}} source={box.icon}/>
                <Text style={styles.boxText}>{box.text}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Card */}
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <View style={styles.contactInfo}>
            <AntDesign name="phone" size={20} color="#ffffff" />
            <Text style={styles.contactText}>+92 321 42 72 326 (Onyx Events & PR)</Text>
          </View>
          <View style={styles.contactInfo}>
            <Entypo name="email" size={20} color="#ffffff" />
            <Text style={styles.contactText}>rspinfo@rsp40.com</Text>
          </View>
          <View style={styles.contactInfo}>
            <MaterialIcons name="public" size={20} color="#ffffff" />
            <Text style={styles.contactText}>www.rsp40.com</Text>
          </View>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background for the container
  },
  slider: {
    height: 150,
    marginBottom: 20,
  },
  sliderImage: {
    width: width - 20,
    height: 150,
    resizeMode: 'cover',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: (width - 30) / 2, // Two columns with some margin
    height: (width - 30) / 2, // Keep the box square
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  boxText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff', // Light text color on dark background
    textAlign: 'center',
    fontFamily: 'System', // Use default font or specify a professional one
  },
  contactCard: {
    backgroundColor: '#1f1f1f', // Dark background for the contact card
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', // Light text color on dark background
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ffffff', // Light text color on dark background
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
