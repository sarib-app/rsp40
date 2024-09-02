import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'
import { useNavigation } from '@react-navigation/native';
import Marigner from '../../header';
import MainHeader from '../Global/Header';

// Get window dimensions for responsiveness
const { width } = Dimensions.get('window');

// Images for the slider
const images = [
  { uri: banner1 },
  { uri: banner2},
  { uri: banner3},
];

const HomeScreen = () => {
    const navigation = useNavigation()
  const boxes = [
    { text: 'Registration', icon: 'login',route:"RegisterScreen" },
    { text: 'Abstract Submission', icon: 'restore-page' ,route:"AbstractForm"},
    { text: 'Scientific Program', icon: 'science' ,route:"ComingSoonScreen"},
    { text: 'Conference Workshop', icon: 'group-work' ,route:"ComingSoonScreen"},
    { text: 'Scientific Committee', icon: 'network-cell' ,route:"ComingSoonScreen"},
    { text: 'Organising Committee', icon: 'group-work' ,route:"ComingSoonScreen"},
    { text: 'Sponsorship Plan', icon: 'group-work' ,route:"ComingSoonScreen"},
    { text: 'Gallery', icon: 'group-work' ,route:"ComingSoonScreen"},
  ];

  return (
    <View style={styles.container}>
      {/* Slider */}
      <MainHeader
        title={"Home"}
        />
      <ScrollView
      nestedScrollEnabled={true}

      >
     
      <Marigner/>

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
          onPress={()=> navigation.navigate(box.route)}
          key={index} style={styles.box}>
            <LinearGradient 
              colors={['#333333', '#000000']} 
              style={styles.gradient}
            >
              <MaterialIcons name={box.icon} size={24} color="#ffffff" />
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
          <Text style={styles.contactText}>+92#######</Text>
        </View>
        <View style={styles.contactInfo}>
          {/* <Ent name="md-mail" size={20} color="#ffffff" /> */}
          <Entypo name="email" size={20} color="#ffffff" />
          <Text style={styles.contactText}>email@example.com</Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialIcons name="public" size={20} color="#ffffff" />
          <Text style={styles.contactText}>www.example.com</Text>
        </View>
      </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems:'center',
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
});

export default HomeScreen;
