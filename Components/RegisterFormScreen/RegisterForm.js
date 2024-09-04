// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Marigner from '../../header';
// import MainHeader from '../Global/Header';

// const { width } = Dimensions.get('window');

// const RegisterScreen = ({ navigation }) => {
//   const [showForm, setShowForm] = useState(false);

//   const handleNext = () => {
//     setShowForm(true);
//   };

//   return (
//     <View style={styles.container}>
//       <MainHeader
//         title={"REgistration"}
//         />
//       {showForm ? (
//         // Form Screen
//         <ScrollView contentContainerStyle={styles.formContainer}>
//             <Marigner/>
//           <Text style={styles.formTitle}>Register Here!</Text>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Category</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Select Category"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>First Name</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="First Name"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.formLabel}>Last Name</Text>
//             <TextInput
//               style={styles.formInput}
//               placeholder="Last Name"
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
//               placeholder="Upload File"
//               placeholderTextColor="#888"
//             />
//           </View>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Register</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       ) : (
//         // Details Screen
//         <ScrollView contentContainerStyle={styles.detailsContainer}>
//           <LinearGradient
//               colors={['#000000','#333333', '#000000']} 
//               style={styles.gradient}
//           >
//             <Text style={styles.title}>40th Annual Conference of Radiological Society of Pakistan</Text>
//             <Text style={styles.subtitle}>Connecting across borders</Text>
//             <Text style={styles.details}>Date: November 8-10, 2024</Text>
//             <Text style={styles.details}>Venue: Pearl Contiential Hotel Rawalpindi</Text>
            
//             <Text style={styles.sectionTitle}>Dear Participants,</Text>
//             <Text style={styles.details}>
//               To initiate the registration process, please submit the registration fee in advance and include a screenshot of the payment in the registration form provided below. You can conveniently make the payment by directly transferring the registration fees to the official bank account of Radiological Society of Pakistan
//             </Text>
            
//             <Text style={styles.sectionTitle}>Bank Details</Text>
//             <Text style={styles.details}>Bank Name: National Bank of Pakistan</Text>
//             <Text style={styles.details}>Branch Code: 0303</Text>
//             <Text style={styles.details}>Account Title: Radiological Society of Pakistan</Text>
//             <Text style={styles.details}>Bank Account: Pk21NBPA0303003003226572</Text>

//             <Text style={styles.sectionTitle}>Registration Fee Breakdown</Text>
//             <View style={styles.table}>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableHeader}>Category</Text>
//                 <Text style={styles.tableHeader}>Till October 15, 2024</Text>
//                 <Text style={styles.tableHeader}>After October 15, 2024</Text>
//               </View>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>RSP Life Member</Text>
//                 <Text style={styles.tableCell}>Rs 4000</Text>
//                 <Text style={styles.tableCell}>Rs 6000</Text>
//               </View>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>Non-member Consultant</Text>
//                 <Text style={styles.tableCell}>Rs 8000</Text>
//                 <Text style={styles.tableCell}>Rs 10,000</Text>
//               </View>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>Resident</Text>
//                 <Text style={styles.tableCell}>Rs 4000</Text>
//                 <Text style={styles.tableCell}>Rs 6000</Text>
//               </View>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>Technologist</Text>
//                 <Text style={styles.tableCell}>Rs 2000</Text>
//                 <Text style={styles.tableCell}>Rs 3000</Text>
//               </View>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>Foreign Delegate</Text>
//                 <Text style={styles.tableCell}>USD 100</Text>
//                 <Text style={styles.tableCell}>USD 150</Text>
//               </View>
//             </View>

//             <Text style={styles.note}>
//               Note: Duly filled registration form is mandatory for registration. Conference fees include admission to sessions along with lunch and tea on all days of the Conference. Please present original receipt or registration confirmation at the time of registration desk. Conference bag and conference material is not guaranteed for late/on-site registration. – Workshops details will display coming soon –
//             </Text>

//             <TouchableOpacity style={styles.button} onPress={handleNext}>
//               <Text style={styles.buttonText}>Next</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     alignItems:'center',
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
//   subtitle: {
//     fontSize: 18,
//     color: '#f1faee',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   details: {
//     fontSize: 16,
//     color: '#ffffff',
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#f1faee',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   table: {
//     marginBottom: 20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: '#333333',
//     paddingVertical: 5,
//   },
//   tableHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     width: (width - 20) / 3,
//     textAlign: 'center',
//   },
//   tableCell: {
//     fontSize: 16,
//     color: '#ffffff',
//     width: (width - 20) / 3,
//     textAlign: 'center',
//   },
//   note: {
//     fontSize: 14,
//     color: '#ffffff',
//     marginTop: 20,
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
// });

// export default RegisterScreen;







import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions, Alert,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as DocumentPicker from 'expo-document-picker';
import Marigner from '../../header';
import MainHeader from '../Global/Header';
import absbanner from '../../assets/banners/regis_banner.png'

const { width } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    firstName: '',
    lastName: '',
    pmdcRegNo: '',
    institute: '',
    email: '',
    contactNo: '',
    address: '',
    file: null,
  });

  const handleNext = () => {
    setShowForm(true);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFilePick = async () => {
    try {
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
    const { category, firstName, lastName, pmdcRegNo, institute, email, contactNo, address, file } = formData;
    if (!category || !firstName || !lastName || !pmdcRegNo || !institute || !email || !contactNo || !address || !file) {
      Alert.alert('Validation Error', 'Please fill out all fields and upload a file.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formdata = new FormData();
    formdata.append("category", formData.category);
    formdata.append("first_name", formData.firstName);
    formdata.append("last_name", formData.lastName);
    formdata.append("pmdc_reg_no", formData.pmdcRegNo);
    formdata.append("institute", formData.institute);
    formdata.append("email", formData.email);
    formdata.append("contact_no", formData.contactNo);
    formdata.append("address", formData.address);
    formdata.append("file", {
      uri: formData.file.uri,
      name: formData.file.name,
      type: formData.file.mimeType,
    });

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://rsp40.com/api/post-registration", requestOptions);
      const result = await response.json();
      if(!result?.success){
        Alert.alert("Error",JSON.stringify(result?.errors))
      }else{
        Alert.alert('Success', 'You are registered successfully!');

      }
    } catch (error) {
      Alert.alert('Error', 'Registration failed. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader
        title={"REgistration"}
      />
      {showForm ? (
        <ScrollView contentContainerStyle={styles.formContainer}>

          <Marigner />
          <Text style={styles.formTitle}>Register Here!</Text>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Category</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Select Category"
              placeholderTextColor="#888"
              value={formData.category}
              onChangeText={(text) => handleInputChange('category', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>First Name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="First Name"
              placeholderTextColor="#888"
              value={formData.firstName}
              onChangeText={(text) => handleInputChange('firstName', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Last Name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Last Name"
              placeholderTextColor="#888"
              value={formData.lastName}
              onChangeText={(text) => handleInputChange('lastName', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>PMDC Regd No:</Text>
            <TextInput
              style={styles.formInput}
              placeholder="PMDC Regd No"
              placeholderTextColor="#888"
              value={formData.pmdcRegNo}
              onChangeText={(text) => handleInputChange('pmdcRegNo', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Institute / Hospital:</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Institute / Hospital"
              placeholderTextColor="#888"
              value={formData.institute}
              onChangeText={(text) => handleInputChange('institute', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email:</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Contact No:</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Contact No"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={formData.contactNo}
              onChangeText={(text) => handleInputChange('contactNo', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Address:</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Address"
              placeholderTextColor="#888"
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Upload File:</Text>
            <TouchableOpacity style={styles.formInput} onPress={handleFilePick}>
              <Text style={{ color: formData.file ? '#fff' : '#888' }}>
                {formData.file ? formData.file.name : 'Select File'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
      


          <LinearGradient

            colors={['#000000', '#333333', '#000000']}
            style={styles.gradient}
          >
              <ScrollView contentContainerStyle={{
          padding: 0,
        }
       }>


   <View style={styles.bannerCard}>
          <Image source={absbanner} style={styles.bimage} />
        </View>
            <Text style={styles.title}>40th Annual Conference of Radiological Society of Pakistan</Text>
            <Text style={styles.subtitle}>Connecting across borders</Text>
            <Text style={styles.details}>Date: November 8-10, 2024</Text>
            <Text style={styles.details}>Venue: Pearl Contiential Hotel Rawalpindi</Text>

            <Text style={styles.sectionTitle}>Dear Participants,</Text>
            <Text style={styles.details}>
              To initiate the registration process, please submit the registration fee in advance and include a screenshot of the payment in the registration form provided below. You can conveniently make the payment by directly transferring the registration fees to the official bank account of Radiological Society of Pakistan
            </Text>

            <Text style={styles.sectionTitle}>Bank Details</Text>
            <Text style={styles.details}>Bank Name: National Bank of Pakistan</Text>
            <Text style={styles.details}>Branch Code: 0303</Text>
            <Text style={styles.details}>Account Title: Radiological Society of Pakistan</Text>
            <Text style={styles.details}>Bank Account: Pk21NBPA0303003003226572</Text>

            <Text style={styles.sectionTitle}>Registration Fee Breakdown</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Category</Text>
                <Text style={styles.tableHeader}>Till October 15, 2024</Text>
                <Text style={styles.tableHeader}>After October 15, 2024</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>RSP Life Member</Text>
                <Text style={styles.tableCell}>Rs 4000</Text>
                <Text style={styles.tableCell}>Rs 6000</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Non-member Consultant</Text>
                <Text style={styles.tableCell}>Rs 8000</Text>
                <Text style={styles.tableCell}>Rs 10,000</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Residents</Text>
                <Text style={styles.tableCell}>Rs 3000</Text>
                <Text style={styles.tableCell}>Rs 5000</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Technologist</Text>
                <Text style={styles.tableCell}>Rs 1000</Text>
                <Text style={styles.tableCell}>Rs 1500</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Proceed to Registration</Text>
            </TouchableOpacity>
        </ScrollView>
          </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 20,
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#444',
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderColor: '#444',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#e33fa1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#000',
  },
  formTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  formInput: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default RegisterScreen;

