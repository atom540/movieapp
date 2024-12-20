import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
        <View>
          <Text style={styles.title}>{item.show.name}</Text>
          <Text style={styles.summary} numberOfLines={2}>{item.show.summary?.replace(/<[^>]+>/g, '')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: { backgroundColor: '#ddd', padding: 10, borderRadius: 5, marginBottom: 10 },
  itemContainer: { flexDirection: 'row', marginBottom: 10 },
  thumbnail: { width: 100, height: 150, marginRight: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  summary: { fontSize: 14, color: '#555' },
});
