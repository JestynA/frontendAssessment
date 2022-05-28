import { View, Text} from  '../components/Themed';
import { StyleSheet , Image , Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { car } from '../types'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const secondaryColor = '#95c93d';
const cardColor = '#262b36';

export default function CarCard ({car, car_model, id, car_model_year, car_vin, car_color, price, availability}: car){

    
    
    const num = Math.round(Math.random() * 100);

    return(
        <View style = {styles.container}>
            <Image 
            source={{
                uri: `https://picsum.photos/${Math.round(windowWidth * .9)}/${Math.round(windowHeight/5)}`

            }} 
            style = {styles.image}
            />

            <View style = {styles.description}>
                <View style = {{backgroundColor: cardColor}}>
                    <Text style = {styles.model}>{car_model}</Text>
                    <Text style = {styles.make}>{car_model_year} {car} <MaterialCommunityIcons name='star' color={secondaryColor} size={windowHeight/70}/> <Text style = {{color : 'gray'}}>({num})</Text></Text> 
                </View>

                <View style = {{backgroundColor: cardColor}}>
                     <Text style = {styles.price}>${parseInt(price.slice(1))} <Text style = {{fontWeight: 'normal'}}>| day</Text></Text>

                </View>

            </View>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
       alignSelf: 'center',
        backgroundColor: cardColor,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        
        height: windowHeight / 3,
        width: '90%',

        marginTop: 30,
        
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowOffset: {width: -1, height: 0}

    },
    image : {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        height: '70%',
        width: '100%'
    },
    description : {
        backgroundColor: cardColor,

      
        borderColor: 'black',
        borderTopWidth: 1,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: '30%',
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    make : {
        paddingBottom : '2%',
        fontSize: windowHeight / 70,
        color: 'white',
        backgroundColor: cardColor
    },
    model : {
        fontSize: windowHeight / 25,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: cardColor,
        marginBottom: 0,
    },
    price : {
        paddingBottom: '2%',
        paddingTop: '10%',
        fontWeight: 'bold',
        color: secondaryColor,
        backgroundColor: cardColor
    }


})