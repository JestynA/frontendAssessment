import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';


const filterContainerBackground = '#3e485c';

export default function FiltersContainer({ availableYears, availableMakes, setFilters, availableColors}: any){

    const [selectedMake, updateMake] = useState(false)
    const [selectedModel, updateModel] = useState(false)

    const [model, setModel] = useState('');
    const [make, setMake] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');

    const updateFilters = () => {
        console.log('setFilters')
        setFilters({model , make, year, color})
    }


    const getColorsForMake = (arr: string[]) => {
        const output : string[] = [];
        arr.forEach(car => {
            availableColors[car].forEach((color : string) => {
                if(!output.includes(color)){
                    output.push(color)
                }
            })
        })
        return output
    }

    const getAllColors = () => {
        const output : string[] = [];

        //console.log(availableMakes)

        for(const make in availableMakes){
            availableMakes[make].forEach((car : any) => {
                availableColors[car].forEach((color : string) => {
                    if(!output.includes(color)){
                        output.push(color)
                    }
                })
            })
        }
        return output;
    }
    
    
    return (
        <View style={styles.container}>

            <View style={styles.filterRows}>
                <View style = {styles.selectionContainer}>
                        <Text style = {{color: 'white'}}>Make: </Text>
                        <SelectDropdown
                        buttonStyle = {styles.dropdown}
                        data = {Object.keys(availableMakes).sort()}
                        onSelect = {(e) => {
                            console.log(e)
                            setMake(e);
                            setModel('');
                            updateModel(false);
                            updateMake(true);
                            updateFilters();
                        }}
                        buttonTextAfterSelection = {(selected, index) =>  selected}
                        defaultButtonText = 'Tesla'
                        buttonTextStyle = {styles.dropdown.text}
                        dropdownStyle = {styles.dropdown.modal}
                        
                        />    
                    </View>

                    <View style = {styles.selectionContainer}>
                        <Text style = {{color: 'white'}}>Model: </Text>
                        <SelectDropdown
                        buttonStyle = {styles.dropdown}
                        data = { selectedMake ? availableMakes[make]: []}
                        onSelect = {(e) => {
    
                            updateModel(true);
                            setModel(e);
                            updateFilters();
                            console.log('ran')
                        }}
                        buttonTextAfterSelection = {(selected, index) =>  selected}
                        defaultButtonText = 'Model Y'
                        buttonTextStyle = {styles.dropdown.text}
                        dropdownStyle = {styles.dropdown.modal}
                        />    
                    </View>
            </View>

            <View style = {styles.filterRows}>
                <View style = {styles.selectionContainer}>
                    <Text style = {{color: 'white'}}>Year: </Text>
                    <SelectDropdown
                    data = {Object.keys(availableYears).sort().reverse()}
                    buttonStyle = {styles.dropdown}
                    defaultButtonText = '2020'
                    buttonTextStyle = {styles.dropdown.text}
                    dropdownStyle = {styles.dropdown.modal}
                    onSelect = {(selection) => {
                        setYear(selection);
                        updateFilters();
                    }}
                    />
                </View>
                
                <View style = {styles.selectionContainer}>
                    <Text style = {{color: 'white'}}>Color: </Text>
                    <SelectDropdown 
                    data = {
                        selectedMake ? 
                        (
                            (selectedModel ? (
                                availableColors[model]
                            ) : (
                                getColorsForMake(availableMakes[make])
                            ))

                        ) : (
                            getAllColors()
                        )}
                    buttonStyle = {styles.dropdown}
                    defaultButtonText = 'Red'
                    buttonTextStyle = {styles.dropdown.text}
                    dropdownStyle = {styles.dropdown.modal}
                    onSelect = {(selection) => {
                        setColor(selection)
                        updateFilters();
                    }}
                    />
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
        borderColor: 'black',
        backgroundColor: filterContainerBackground,
        zIndex: 9999
    },
    selectionContainer: {
        backgroundColor: filterContainerBackground,
        width: '45%'
    },
    
    dropdown: {
        
        height: 30,
        borderRadius: 15,
        width: '100%',
    
        text: {
            color: 'gray'
        },
        modal : {
            borderRadius: 10
        }
    },
    filterRows : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: filterContainerBackground,
        
    }
})