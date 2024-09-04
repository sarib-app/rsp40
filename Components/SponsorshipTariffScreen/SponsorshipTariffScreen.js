import React, { useState } from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
// import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import MainHeader from '../Global/Header'; // Adjust the import as needed

const SponsorshipTariffScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadAndShowPdf = async () => {
    // setIsLoading(true);
    // try {
    //   const fileUri = `${FileSystem.documentDirectory}SponsorshipTariff.pdf`;
      
    //   const downloadResumable = FileSystem.createDownloadResumable(
    //     'https://rsp40.com/upload/1724312884.pdf', // Replace with your PDF URL
    //     fileUri
    //   );

    //   const { uri } = await downloadResumable.downloadAsync();
    //   await Sharing.shareAsync(uri);
    // } catch (error) {
    //   console.error('Error downloading or sharing the PDF:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Sponsorship Tariff" />
      <View style={styles.content}>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SponsorshipTariffScreen;

