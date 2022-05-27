import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function FiltersContainer( ){


    const test = ['1','2','3']
    return (
        <View style={styles.container}>
            <View style = {styles.selectionContainer}>
                <Text>Model: </Text>
                <SelectDropdown
                buttonStyle = {styles.dropdown}
                data = {test}
                onSelect = {() => {console.log('selected')}}
                buttonTextAfterSelection = {(selected, index) =>  selected}
                defaultButtonText = 'Tesla'
                buttonTextStyle = {styles.dropdown.text}
                dropdownStyle = {styles.dropdown.modal}
                />    
            </View>
            
            <View style = {styles.selectionContainer}>
                <Text>Year: </Text>
                <SelectDropdown
                buttonStyle = {styles.dropdown}
                defaultButtonText = '2020'
                buttonTextStyle = {styles.dropdown.text}
                dropdownStyle = {styles.dropdown.modal}
                />
            </View>
            
            <View style = {styles.selectionContainer}>
                <Text>Color: </Text>
                <SelectDropdown 
                buttonStyle = {styles.dropdown}
                defaultButtonText = 'Red'
                buttonTextStyle = {styles.dropdown.text}
                dropdownStyle = {styles.dropdown.modal}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
    },
    selectionContainer: {

    },
    
    dropdown: {
        height: 30,
        borderRadius: 15,
        width: 150,
    
        text: {
            color: 'gray'
        },
        modal : {
            borderRadius: 10
        }
    }
})