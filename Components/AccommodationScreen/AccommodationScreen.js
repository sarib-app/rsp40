import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import MainHeader from '../Global/Header'; // Adjust the import as needed
import absbanner from '../../assets/banners/acco_banner.png'

const { width } = Dimensions.get('window');

const AccommodationScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Accommodation & Venue" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.bannerCard}>
      <Image source= {absbanner} style={styles.bimage} />
        </View>

        {/* Image */}
        <Image
          source={require('../../assets/images/accommodation-venue.jpeg')} // Replace with your image path
          style={styles.image}
        />

        {/* Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Pearl Continental Hotel, Rawalpindi</Text>
          <Text style={styles.detail}>32 km 48 min Travelling from Islamabad International Airport</Text>
          <Text style={styles.detail}>3.2 km 11 min Travelling from Railway Station</Text>
          <Text style={styles.title}>For More Information & Booking:</Text>
          <Text style={styles.contact}>+92 321 4272326</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
  },
  contentContainer: {
    padding: 20,
  },
  image: {
    width: width - 40, // Adjust width to match container padding
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
    borderRadius: 10,
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
  infoContainer: {
    padding: 10,
    backgroundColor: '#1f1f1f', // Background for the text content
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#ff6347', // Highlight contact information
    fontWeight: 'bold',
  },
});

export default AccommodationScreen;
