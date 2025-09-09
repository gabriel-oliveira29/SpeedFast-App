import { View } from 'react-native';
import { styles }from './MapStyles'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy} from 'expo-location'
import { useEffect, useState, useRef } from 'react';
import MapView  from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default function App() {
  const [location, setLocation] = useState<LocationObject | null >(null);

  const mapRef = useRef<MapView>(null);

  async function requestsLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() =>{
    requestsLocationPermission();
  },[])

  useEffect(() =>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    },(response) => {
      setLocation(response);
      mapRef.current?.animateCamera({
        center: response.coords
      })
    });
},[]);

  return (
    <View style = {styles.container}>
      {
        location && 
        <MapView ref={mapRef} style = {styles.map} initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }} >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      }



    </View>
  );
}

