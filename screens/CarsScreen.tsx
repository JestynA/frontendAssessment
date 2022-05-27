import { StyleSheet } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


import SearchBar from '../components/SearchBar';



export default function CarsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [searchText, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <SearchBar setSearch={setSearch}/>
        <Text>Lmaos</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  }
});
