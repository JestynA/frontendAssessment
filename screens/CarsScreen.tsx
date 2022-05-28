import { StyleSheet , FlatList} from 'react-native';
import { useState , useEffect} from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps , car} from '../types';

import { FaBeer } from 'react-icons/fa'


import SearchBar from '../components/SearchBar';
import CarCard from '../components/CarCard'


const backgroundColor = '#13161c'

export default function CarsScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [searchText, setSearch] = useState('');

  // only grab available cars from the API
  const [availableCars , setAvailable] = useState<any>([]);
  const [availableYears, setYears] = useState<Number[]>([]);
  const [availableMakes, setMakes] = useState<String[]>([]);
  const [availableColors, setColors] = useState<string[]>([])
  const [filters, setFilters] = useState<any>({});

  const getCarData = async () => {
    const response = await fetch('https://myfakeapi.com/api/cars/');
    const data = await response.json();
    const updateData : any= [];
    const updateYears : any = {};
    const updateMakes : any = {};
    const updateColors : any = {};

    data.cars.forEach( async ({car, car_model, id, car_model_year, car_vin, car_color, price, availability} : car) => {
      
      // only adding available cars??
      if(availability){

        /* 
        Makes and models stored in an object
        {Honda: [civic : {red,black}, crv, etc...]}
        */

        // store years of cars in an object
        if(!updateYears[car_model_year.toString()]){
          updateYears[car_model_year.toString()] = true;
        }
        

        
        if(!updateMakes[car]){
            updateMakes[car] = [];
        }

        // adding to collection of makes/models database
        if(!updateMakes[car].includes(car_model)){
          updateMakes[car].push(car_model)
        }

        // storing available colors for each car model
        if(!updateColors[car_model]){
          updateColors[car_model] = [car_color]
        } else {
          updateColors[car_model].push(car_color)
        }
        
    
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
      }
    })

    setYears(updateYears);
    setMakes(updateMakes);
    setAvailable(updateData);
    setColors(updateColors);
    

    console.log('updated components')
  }


  useEffect( () => {
    getCarData();
  },[])

  



  return (
    <View style={styles.container}>
      <SearchBar 
      setSearch={setSearch} 
      setFilters={setFilters}
      availableColors = {availableColors}
      availableYears = {availableYears}
      availableMakes = {availableMakes}
      />
   

      { !Object.keys(filters).length ? (
     <FlatList
     style = {{width: '100%', zIndex: 9998}}
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
     />
      ) : (
        <Text style = {{color: 'white'}}>Filtered by: {Object.values(filters)}</Text>
        // <FlatList

        // />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: backgroundColor
  },
});
