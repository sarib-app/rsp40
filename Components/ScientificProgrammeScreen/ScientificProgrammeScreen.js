import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Alert ,Image,Dimensions } from 'react-native';
import MainHeader from '../Global/Header';
import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import absbanner from '../../assets/banners/scie_banner.png'

const { width } = Dimensions.get('window');


const ScientificProgrammeScreen = () => {
  
  const downloadAndSharePDF = async () => {
    try {
      const pdfUrl = 'https://rsp40.com/upload/1724242095.pdf'; // Replace with your PDF URL
      
      // Fetch the PDF from the URL
      const response = await fetch(pdfUrl);
      const res = await response.arrayBuffer();
      
      // Convert the response to base64
      const buff = Buffer.from(res);
      const base64 = buff.toString('base64');

      // Define the local file URI
      const fileUri = FileSystem.documentDirectory + `${encodeURI('ScientificProgramme')}.pdf`;

      // Save the PDF locally
      await FileSystem.writeAsStringAsync(fileUri, base64, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Share the PDF
      await Sharing.shareAsync(fileUri);
      
    } catch (error) {
      console.error("Error downloading or sharing PDF:", error);
      Alert.alert("Error", "There was an issue downloading or sharing the PDF. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader title="Scientific Programme" />
      <View style={styles.bannerCard}>
          <Image source={absbanner} style={styles.bimage} />
        </View>

      <Button title="Download & Share PDF" onPress={downloadAndSharePDF} />
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

export default ScientificProgrammeScreen;
