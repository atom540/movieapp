import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Movie Poster */}
      <Image
        source={{ uri: movie.image?.original || 'https://via.placeholder.com/500x750' }} 
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
    backgroundColor: '#141414', 
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 15,
  },
  summary: {
    fontSize: 16,
    color: '#bbb', 
    lineHeight: 24, 
    textAlign: 'justify', 
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#e50914', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
