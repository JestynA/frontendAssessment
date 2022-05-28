import { StyleSheet , TextInput, Button} from 'react-native';
import { useState } from 'react'

import { Text, View } from '../components/Themed';

import FiltersContainer from '../components/FiltersContainer'

type props = {
    // can't find the type for this?? change ASAP
    setSearch : any,
    setFilters : any,
    availableYears : any,
    availableMakes : any
    availableColors: any
    allColors : any
}

const searchBarColor = '#262b36';
const secondaryColor = '#95c93d';

export default function SearchBar({ setSearch , setFilters, availableYears, availableMakes, availableColors} : props) {

    const [showFilters, setShowFilters] = useState(false);





    return(
        <View style = {styles.container}>
            
            <View style = {styles.searchBar}>

                <TextInput
                    style = {styles.input}
                    onChangeText = {(text) => setSearch(text)}
                    placeholder = 'Car model'
                    placeholderTextColor= 'black'
                    
                />
                <Button
                    color = {secondaryColor}
                    title='Filter'
                    onPress={() => {setShowFilters(!showFilters)}}
                />
            </View>

            { showFilters ? (
                <FiltersContainer
                setFilters={setFilters}
                availableYears = {availableYears}
                availableMakes = {availableMakes}
                availableColors = {availableColors}
                />
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        zIndex: 9999,
        width: '100%',
        backgroundColor: searchBarColor,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 10
       
    },

    searchBar : {
        
        marginTop: 40,
        
        paddingLeft: 20,
        paddingRight: 20,
        
        shadowColor: 'black',
        shadowOpacity: .3,
        shadowRadius: 20,
        shadowOffset: {height: 40, width: 0},
        

        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor : '#000000',
        backgroundColor: searchBarColor
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