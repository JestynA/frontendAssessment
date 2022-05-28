import { View, Text} from  '../components/Themed';
import { StyleSheet , Image , Dimensions} from 'react-native';

import { car } from '../types'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const secondaryColor = '#95c93d';
const cardColor = '#262b36';

export default function CarCard ({car, car_model, id, car_model_year, car_vin, car_color, price, availability}: car){


    
  

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
                    <Text style = {styles.make}>{car_model_year} {car}, {car_color}</Text> 
                </View>

                <View style = {{backgroundColor: cardColor}}>
                     <Text style = {styles.price}>${parseInt(price.slice(1))}/day</Text>

                </View>

            </View>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: cardColor,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        
        height: windowHeight / 3,
        width: '100%',
        marginBottom: 20,
        
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowOffset: {width: -1, height: 0}

    },
    image : {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: '70%',
        width: windowWidth * .9
    },
    description : {
        backgroundColor: cardColor,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: '30%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    make : {
        paddingBottom : '2%',
        fontSize: '15%',
        color: 'white',
        backgroundColor: cardColor
    },
    model : {
        fontSize: '30%',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: cardColor
    },
    price : {
        paddingBottom: '2%',
        paddingTop: '10%',
        fontWeight: 'bold',
        color: secondaryColor,
        backgroundColor: cardColor
    }


})