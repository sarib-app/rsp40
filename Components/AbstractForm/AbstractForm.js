// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Marigner from '../../header';

// const { width } = Dimensions.get('window');

// const AbstractForm = ({ navigation }) => {
//   const [showForm, setShowForm] = useState(false);

//   const handleNext = () => {
//     setShowForm(true);
//   };

//   return (
//     <View style={styles.container}> 

//       {showForm ? (
//         // Form Screen
//         <ScrollView contentContainerStyle={styles.formContainer}>
//       <Marigner/>

//           <Text style={styles.formTitle}>Abstract Submission</Text>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Presenter:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Presenter Name"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Designation:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Designation"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Title:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Title of Abstract"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Oral Presentation:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Yes/No"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>PMDC Regd No:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="PMDC Regd No"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Institute / Hospital:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Institute / Hospital"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Email:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Email"
//               placeholderTextColor="#888"
//               keyboardType="email-address"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Contact No:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Contact No"
//               placeholderTextColor="#888"
//               keyboardType="phone-pad"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>City:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="City"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Address:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Address"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Upload File:</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="No file chosen"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Register</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       ) : (
//         // Details Screen
        // <ScrollView contentContainerStyle={styles.detailsContainer}>
        //   <LinearGradient
        //       colors={['#333333', '#000000']} 
            
        //     style={styles.gradient}
        //   >
        //     <Text style={styles.title}>Abstract Submission</Text>

        //     <Text style={styles.sectionTitle}>Guidelines for Abstract Submission</Text>
        //     <Text style={styles.details}>
        //       Submit original abstract with affiliation of authors and follow the sequence as shared in Google form.
        //       Submission category: Oral presentation or e-Poster.
        //       Submission type: Original research, Case series, Case report, or Review Talk.
        //       Please do not send abstracts in either hard copy or on email address.
        //       Acceptance of out-of-format and hard-copy-only abstracts is regretted.
        //       Kindly follow the ethical considerations and plagiarism to avoid later retraction.
        //       Conflict of interest, Funding source, authorship contribution and justification in case of more than 3 authors, ethical permission and other disclosures should be added. Those with disputed authorship will not be entertained. The content will be checked for plagiarism.
        //       The accuracy of the submitted abstract is the responsibility of the authors. Authors should prepare and proofread their abstracts carefully prior to submission. The Abstract Review Committee will not proof-read or correct spelling, typographical, grammatical, or scientific errors, nor can changes be made once the abstract has been submitted.
        //       All PRESENTERS must register to attend the Annual RSP conference.
        //     </Text>

        //     <Text style={styles.sectionTitle}>Guidelines for Oral Presentation</Text>
        //     <Text style={styles.details}>
        //       All presentations will be performed offline.
        //       Oral Presentation talks will be allotted 7 minutes each.
        //       Prepare your slide presentation in Microsoft PowerPoint.
        //     </Text>

        //     <Text style={styles.sectionTitle}>Guidelines for E-Poster Presentation</Text>
        //     <Text style={styles.details}>
        //       Size: Your e-poster is in portrait orientation 32 x 56 inches wide. Ensure all elements fit within these dimensions.
        //       Resolution: Use a high resolution of 150-300 DPI to ensure that your poster is clear and professional when displayed on screens.
        //     </Text>

        //     <TouchableOpacity style={styles.button} onPress={handleNext}>
        //       <Text style={styles.buttonText}>Next</Text>
        //     </TouchableOpacity>
        //   </LinearGradient>
        // </ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#121212',
//   },
//   gradient: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#f1faee',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   details: {
//     fontSize: 16,
//     color: '#ffffff',
//     marginBottom: 10,
//   },
//   formContainer: {
//     padding: 20,
//     backgroundColor: '#121212',
//   },
//   formTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   formGroup: {
//     marginBottom: 20,
//   },
//   formLabel: {
//     fontSize: 16,
//     color: '#ffffff',
//     marginBottom: 5,
//   },
//   formInput: {
//     backgroundColor: '#1f1f1f',
//     borderRadius: 10,
//     color: '#ffffff',
//     padding: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#e33fa1',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default AbstractForm;


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions, Alert, Platform, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';
import Marigner from '../../header';
import MainHeader from '../Global/Header';

const { width } = Dimensions.get('window');

const AbstractForm = ({ navigation }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    presenter: '',
    designation: '',
    title: '',
    oralPresentation: '',
    pmdcRegNo: '',
    institute: '',
    email: '',
    contactNo: '',
    city: '',
    address: '',
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    setShowForm(true);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFilePick = async () => {
    try {
      // const result = await DocumentPicker.getDocumentAsync({
      //   type: '*/*',
      //   copyToCacheDirectory: true,
      // });
      const  result = await DocumentPicker.getDocumentAsync({});
      console.log(result)
      if (!result.canceled) {
        // Access the first file in the array
        const selectedFile = result.assets[0];
        
        // Set the form data with the selected file details
        setFormData({ ...formData, file: selectedFile });
      }
    } catch (err) {
      Alert.alert('File Selection Error', 'An error occurred while selecting the file.');
    }
  };

  const validateForm = () => {
    let valid = true;
    let tempErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key] === '' || formData[key] === null) {
        tempErrors[key] = 'This field is required';
        valid = false;
      }
    });

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fill all required fields.');
      return;
    }

    const submitData = new FormData();
    submitData.append('presenter', formData.presenter);
    submitData.append('designation', formData.designation);
    submitData.append('title', formData.title);
    submitData.append('oral_presentation', formData.oralPresentation);
    submitData.append('pmdc_reg_no', formData.pmdcRegNo);
    submitData.append('institute', formData.institute);
    submitData.append('email', formData.email);
    submitData.append('contact_no', formData.contactNo);
    submitData.append('city', formData.city);
    submitData.append('address', formData.address);
    if (formData.file) {
      submitData.append('file', {
        uri: formData.file.uri,
        type: formData.file.mimeType || 'application/octet-stream',
        name: formData.file.name,
      });
    }

    const requestOptions = {
      method: 'POST',
      body: submitData,
      redirect: 'follow',
    };

    fetch('https://rsp40.com/api/post-abstraction', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(!result?.success){
          Alert.alert("Error",JSON.stringify(result?.errors))
        }else{
          Alert.alert('Success', 'Your abstract has been successfully submitted!');

        }

        console.log(result);
      })
      .catch((error) => {
        Alert.alert('Submission Error', 'An error occurred while submitting your abstract.');
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
        <MainHeader
        title={"Abstract Form"}
        />
      {showForm ? (
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Marigner />
          <Text style={styles.formTitle}>Abstract Submission</Text>

          {Object.keys(formData).map((key) => (
            key !== 'file' && (
              <View key={key} style={styles.formGroup}>
                <Text style={styles.formLabel}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                </Text>
                <TextInput
                  style={[styles.formInput, errors[key] && { borderColor: 'red' }]}
                  placeholder={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                  placeholderTextColor="#888"
                  value={formData[key]}
                  onChangeText={(text) => handleChange(key, text)}
                  keyboardType={key === 'email' ? 'email-address' : key === 'contactNo' ? 'phone-pad' : 'default'}
                />
                {errors[key] ? <Text style={styles.errorText}>{errors[key]}</Text> : null}
              </View>
            )
          ))}

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Upload File:</Text>
            <Button title="Choose File" onPress={handleFilePick} />
            <Text style={styles.fileName}>{formData.file ? formData.file.name : 'No file chosen'}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
        <LinearGradient
            colors={['#333333', '#000000']} 
          
          style={styles.gradient}
        >
          <Text style={styles.title}>Abstract Submission</Text>

          <Text style={styles.sectionTitle}>Guidelines for Abstract Submission</Text>
          <Text style={styles.details}>
            Submit original abstract with affiliation of authors and follow the sequence as shared in Google form.
            Submission category: Oral presentation or e-Poster.
            Submission type: Original research, Case series, Case report, or Review Talk.
            Please do not send abstracts in either hard copy or on email address.
            Acceptance of out-of-format and hard-copy-only abstracts is regretted.
            Kindly follow the ethical considerations and plagiarism to avoid later retraction.
            Conflict of interest, Funding source, authorship contribution and justification in case of more than 3 authors, ethical permission and other disclosures should be added. Those with disputed authorship will not be entertained. The content will be checked for plagiarism.
            The accuracy of the submitted abstract is the responsibility of the authors. Authors should prepare and proofread their abstracts carefully prior to submission. The Abstract Review Committee will not proof-read or correct spelling, typographical, grammatical, or scientific errors, nor can changes be made once the abstract has been submitted.
            All PRESENTERS must register to attend the Annual RSP conference.
          </Text>

          <Text style={styles.sectionTitle}>Guidelines for Oral Presentation</Text>
          <Text style={styles.details}>
            All presentations will be performed offline.
            Oral Presentation talks will be allotted 7 minutes each.
            Prepare your slide presentation in Microsoft PowerPoint.
          </Text>

          <Text style={styles.sectionTitle}>Guidelines for E-Poster Presentation</Text>
          <Text style={styles.details}>
            Size: Your e-poster is in portrait orientation 32 x 56 inches wide. Ensure all elements fit within these dimensions.
            Resolution: Use a high resolution of 150-300 DPI to ensure that your poster is clear and professional when displayed on screens.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems:'center',
    backgroundColor: '#121212',
  },
  gradient: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1faee',
    marginTop: 20,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#121212',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  formInput: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    color: '#ffffff',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1f1f1f',
  },
  button: {
    backgroundColor: '#e33fa1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  fileName: {
    color: '#ffffff',
    marginTop: 10,
  },
});

export default AbstractForm;

