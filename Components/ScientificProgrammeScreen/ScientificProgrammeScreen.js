import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import MainHeader from '../Global/Header';
import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

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
      <Button title="Download & Share PDF" onPress={downloadAndSharePDF} />
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

export default ScientificProgrammeScreen;
