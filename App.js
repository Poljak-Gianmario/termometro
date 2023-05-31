import { StyleSheet, ScrollView} from 'react-native';
import React, { useState } from "react";
import { AppBar } from "@react-native-material/core";
import Temp_stat from './Components/temp_stat';
import Umid_stat from './Components/umid_stat';
import Gas_stat from './Components/gas_stat';

export default function App() {
  


  return (
    
    <ScrollView 
    style={styles.scrollView} 
    contentContainerStyle={styles.contentContainer}
  >     

      <AppBar title="Resoconto casa" />
      
      <Temp_stat/>
      <Umid_stat/>
      <Gas_stat/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
