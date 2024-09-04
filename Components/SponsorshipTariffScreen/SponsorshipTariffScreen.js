import React, { useState } from 'react';
import { View, Button, ActivityIndicator, StyleSheet, Image,Dimensions  } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import MainHeader from '../Global/Header'; // Adjust the import as needed
import absbanner from '../../assets/banners/spons_banner.png'

const { width } = Dimensions.get('window');

const SponsorshipTariffScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadAndShowPdf = async () => {
    setIsLoading(true);
    try {
      const fileUri = `${FileSystem.documentDirectory}SponsorshipTariff.pdf`;
      
      const downloadResumable = FileSystem.createDownloadResumable(
        'https://rsp40.com/upload/1724312884.pdf', // Replace with your PDF URL
        fileUri
      );

      const { uri } = await downloadResumable.downloadAsync();
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error downloading or sharing the PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Sponsorship Tariff" />
      <View style={styles.content}>

      <View style={styles.bannerCard}>
          <Image source={absbanner} style={styles.bimage} />
        </View>


        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <Button title="View Sponsorship Tariff PDF" onPress={downloadAndShowPdf} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SponsorshipTariffScreen;

