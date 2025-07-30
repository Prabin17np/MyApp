import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import styles, { primaryColor } from "../styles";

// ...rest of your component code


const quotes = [
  "Every location tells a story — start yours today.",
  
  "Pin it or forget it.",
];

const LandingScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const fadeInOut = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      });
    };

    fadeInOut();

    const interval = setInterval(fadeInOut, 6000); // total duration of fade in+delay+fade out

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const { width, height } = Dimensions.get('window');

 return (
  <ImageBackground
    source={require('../assets/landingPage.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.overlay}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>DropPIN</Text>
      </View>

      {/* Quotes */}
      <View style={styles.quoteContainer}>
        <Animated.Text style={[styles.quote, { opacity: fadeAnim }]}>
          {quotes[quoteIndex]}
        </Animated.Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.8}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

};


 

export default LandingScreen;
