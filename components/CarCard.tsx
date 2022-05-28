import { View, Text} from  '../components/Themed';
import { StyleSheet , Image , Dimensions} from 'react-native';

import { car } from '../types'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CarCard ({car, car_model, id, car_model_year, car_vin, car_color, price, availability}: car){


    
  

    return(
        <View style = {styles.container}>
            <Image 
            source={{
                uri: `https://picsum.photos/${Math.round(windowWidth * .9)}/${Math.round(windowHeight/5)}`

            }} 
            style = {styles.image}/>

            <View style = {styles.description}>
                <View>
                    <Text>{car_model}</Text>
                    <Text>{car}</Text> 
                </View>

                <View>
                     <Text>${parseInt(price.slice(1))}/day</Text>
                </View>

            </View>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: '100%'
    },
    image : {
        height: windowHeight / 5,
        width: windowWidth * .9
    },
    description : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


})