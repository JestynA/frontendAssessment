import { StyleSheet , TextInput, Button} from 'react-native';
import { useState } from 'react'

import { Text, View } from '../components/Themed';

import FiltersContainer from '../components/FiltersContainer'

type props = {
    // can't find the type for this?? change ASAP
    setSearch : any
}

export default function SearchBar({ setSearch } : props) {

    const [showFilters, setShowFilters] = useState(false);

    return(
        <View style = {styles.container}>
            
            <View style = {styles.searchBar}>

                <TextInput
                    style = {styles.input}
                    onChangeText = {(text) => setSearch(text)}
                    placeholder = 'Car model'
                />
                <Button
                    
                    title='Filter'
                    onPress={() => {setShowFilters(!showFilters)}}
                />
            </View>

            { showFilters ? (
                <FiltersContainer/>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
       // height: '15%',
        width: '100%',
    },
    searchBar : {
        marginTop: 40,
        
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor : '#000000',
        backgroundColor: '#000000'
    },
    input : {
        paddingLeft: 10,
        height: 35,
        width: '70%',
        backgroundColor: '#D3D3D3',
        borderRadius : 30 / 2,
    },
    filterButton: {
        backgroundColor: '#D3D3D3',

    }
})