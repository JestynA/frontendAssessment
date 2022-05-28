import { StyleSheet , FlatList} from 'react-native';
import { useState , useEffect} from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps , car} from '../types';



import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard'


type carData = car[]

export default function CarsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [searchText, setSearch] = useState('');

  // only grab available cars from the API
  const [availableCars , setAvailable] = useState<any>([]);

  const getCarData = async () => {
    const response = await fetch('https://myfakeapi.com/api/cars/');
    const data = await response.json();
    const updateData : any= [];
    data.cars.forEach( async ({car, car_model, id, car_model_year, car_vin, car_color, price, availability} : car) => {
      if(availability){


        //const picResponse = await fetch('https://picsum.photos/200/300');
        
    
        updateData.push({
          car,
          car_model,
          id,
          car_model_year,
          car_vin,
          car_color,
          price,
          availability,
          key : parseInt(id),
          
        })
        // updateData.push(
        //   <CarCard 
        //   car = {car}
        //   car_model = {car_model}
        //   id = {id}
        //   car_model_year = {car_model_year}
        //   car_vin = {car_vin}
        //   car_color = {car_color}
        //   price = {price}
        //   availability = {availability}
        //   key = {parseInt(id)}
        //   pic = {'https://picsum.photos/600/200'}
        //   />
        // )
      }
    })

    setAvailable(updateData)
    console.log('updated components')
  }


  useEffect( () => {
    getCarData();
  },[])

  



  return (
    <View style={styles.container}>
      <SearchBar setSearch={setSearch}/>
      <Text>{availableCars.length}</Text>
     <FlatList
      data = {availableCars}
      renderItem = {({item}) => 
      <CarCard
        car = {item.car}
        car_model = {item.car_model}
        id = {item.id}
        car_model_year = {item.car_model_year}
        car_vin = {item.car_vin}
        car_color = {item.car_color}
        price = {item.price}
        availability = {item.availability}
      key = {parseInt(item.id)}
 
      />
    }
      // renderItem = {({car, car_model, id, car_model_year, car_vin, car_color, price, availability} : car) => {
      //   <CarCard
      //   car = {car}
      //   car_model = {car_model}
      //   id = {id}
      //   car_model_year = {car_model_year}
      //   car_vin = {car_vin}
      //   car_color = {car_color}
      //   price = {price}
      //   availability = {availability}
      //   key = {parseInt(id)}
      //   pic = {''}
      //   />
      // }}
     />
        
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    
  },
  carContainer: {

  }
});
