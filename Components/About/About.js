import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MainHeader from '../Global/Header';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      {/* Main Header */}
      <MainHeader title="About RSP" />

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.heading}>About RSP</Text>
        <Text style={styles.text}>
          The Radiological Society of Pakistan is the professional association of radiologists in Pakistan, which looks after the professional, ethical, and tariff interests of radiologists in public service and private practice. The Radiological Society of Pakistan is dedicated to improving the quality of patient care through interactive support of members, patients, and affiliated healthcare provider organizations.
        </Text>

        <Text style={styles.heading}>Mission</Text>
        <Text style={styles.text}>
          1. To provide continuing education and training to physicians and scientists with an active interest in radiology or imaging techniques.
        </Text>
        <Text style={styles.text}>
          2. To promote the exchange of ideas and information to further define the role, direction, and goals of radiology as a subspecialty of radiology.
        </Text>

        <Text style={styles.heading}>Our Purpose</Text>
        <Text style={styles.text}>
          The purpose of the Radiological Society of Pakistan is advancing the science of radiology, improving radiological service to patients and the medical community, and studying the economics of radiology; the encouragement of improved and continuing education for radiologists; and the establishment and maintenance of high medical and ethical standards in the practice of radiology.
        </Text>

        <Text style={styles.heading}>Objectives</Text>
        <Text style={styles.text}>
          1. Advance the science of radiology.
        </Text>
        <Text style={styles.text}>
          2. Meet regularly to encourage communication of issues vital to radiology.
        </Text>
        <Text style={styles.text}>
          3. Support education and research for the benefit of the discipline.
        </Text>
        <Text style={styles.text}>
          4. Coordinate forums for the exchange of ideas concerning the direction and role of radiology and radiology as a subspecialty.
        </Text>
        <Text style={styles.text}>
          5. Provide representation for the implementation of these goals.
        </Text>
        <Text style={styles.text}>
          6. Improve radiological service to patients and the medical community, and studying the economics of radiology.
        </Text>
        <Text style={styles.text}>
          7. Encourage improved and continuing education for radiologists.
        </Text>
        <Text style={styles.text}>
          8. Establish and maintain high medical and ethical standards in the practice of radiology.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for consistency
  },
  content: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', // Light text color on dark background
  },
  text: {
    fontSize: 16,
    color: '#ffffff', // Light text color on dark background
    marginBottom: 15,
    lineHeight: 24,
  },
});

export default AboutScreen;
