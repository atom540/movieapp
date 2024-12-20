import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Movie Poster */}
      <Image
        source={{ uri: movie.image?.original || 'https://via.placeholder.com/500x750' }} // Placeholder in case no image is available
        style={styles.image}
      />
      
      {/* Movie Title */}
      <Text style={styles.title}>{movie.name}</Text>
      
      {/* Movie Summary */}
      <Text style={styles.summary}>
        {movie.summary?.replace(/<[^>]+>/g, '') || "No summary available."}
      </Text>
      
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414', // Dark background to match Netflix theme
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 400, // Adjusted height for a more cinematic look
    borderRadius: 10, // Rounded corners for the image
    marginBottom: 15,
    borderWidth: 1, // Optional: Adding a thin border to give a subtle effect
    borderColor: '#333', // Dark border for contrast
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: 15,
  },
  summary: {
    fontSize: 16,
    color: '#bbb', // Lighter gray color for the summary text
    lineHeight: 24, // Better spacing between lines for readability
    textAlign: 'justify', // Justify text for a cleaner look
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#e50914', // Netflix Red
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 30,
    alignSelf: 'flex-start', // Align the button to the left
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
