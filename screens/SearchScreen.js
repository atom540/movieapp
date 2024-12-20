import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => setResults(response.data))
      .catch(error => console.error(error));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
        <View>
          <Text style={styles.title}>{item.show.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Movies"
        style={styles.searchBar}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
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
});
