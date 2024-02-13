import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />
      {/* Main */}
      <View style={styles.main}>
        <View style={styles.section1}>
          <Text style={styles.content}>Hello Please Change my size! for all devices</Text>
        </View>
        <View style={styles.section2} />
      </View>
      {/* Footer */}
      <View style={styles.footer}/> 
       {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: hp(100), // 100% of the device size 
  },
  header: {
    //flex: 1,
    height: hp(15), // 15% of the device size
    backgroundColor: 'red',
  },
  main: {
    //flex: 3,
    height: hp(70), // 70% of the device size
    flexDirection: 'row',
  },
  section1: {
    //flex: 1,
    width: wp(50), // 50% of the device size
    backgroundColor: 'orange',
  },
  section2: {
    //flex: 1,
    width: wp(50),
    backgroundColor: 'blue',
  },
  content: {
    fontSize: hp(2),
  },
  footer: {
    height: hp(15), // 15% of the device size
    //flex: 1,
    backgroundColor: 'green'
  }
});
