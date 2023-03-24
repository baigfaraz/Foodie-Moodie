import { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import app from './firebase';
import { getDatabase, ref, onValue , update } from 'firebase/database';

export default function Home({ navigation }) {

  // const [category, setCategory] = useState();
  // const [popularFoods, setPopularFoods] = useState();
  // const [bestSeller, setBestSeller] = useState();
  // useEffect(() => {
  //   const db = getDatabase(app);
  //   const dbRef1 = ref(db, 'foodCategory');
  //   const dbRef2 = ref(db, 'popularFoods');
  //   const dbRef3 = ref(db, 'bestSeller');
  //   onValue(dbRef1, (snapshot) => {
  //     let data = snapshot.val();
  //     setCategory(data);
  //   })
  //   onValue(dbRef2, (snapshot) => {
  //     let data = snapshot.val();
  //     setPopularFoods(data);
  //   })
  //   onValue(dbRef3, (snapshot) => {
  //     let data = snapshot.val();
  //     setBestSeller(data);
  //   })
  // }, [])

  const [category, setCategory] = useState();
  const [popularFoods, setPopularFoods] = useState();
  const [bestSeller, setBestSeller] = useState();
  const [like , setLike] = useState(false);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef1 = ref(db, 'foodCategory');
    const dbRef2 = ref(db, 'popularFoods');
    const dbRef3 = ref(db, 'bestSeller');
    onValue(dbRef1, (snapshot) => {
      let data = snapshot.val();
      setCategory(data);
    })
    onValue(dbRef2, (snapshot) => {
      let data = snapshot.val();
      setPopularFoods(data);
    })
    onValue(dbRef3, (snapshot) => {
      let data = snapshot.val();
      console.log(data);
      setBestSeller(data);
    })
    // var index = 2
    // var dbRefRef = 'alldeals/1/secondtarray/'+index
    // const dbRefforUpdate = ref(db, dbRefRef)
    // var index = 1
    // var dbRefRef = 'popularFoods/'+index
    // const dbRefforUpdate = ref(dbRefRef)
    // update(dbRefforUpdate,{
      
    //   "like": setLike(!like)
    
    // })
    // handleLike();
  }, [])

  const handleLike = () =>{
    var index = 0
    var dbRefRef = 'popularFoods/'+index
    const dbRefforUpdate = ref(dbRefRef)
    update(dbRefforUpdate,{
      
      "like": setLike(!like)
    
    })
    const dbRef2 = ref(db, 'popularFoods');
    onValue(dbRef2, (snapshot) => {
      let data = snapshot.val();
      setPopularFoods(data);
    })

  }


  return (

    <View style={styles.container}>

      <Text style={styles.text1}>Hello Muhammad Faraz Baig!</Text>
      <Text style={styles.text2}>Choose your favorite food</Text>

      <View style={styles.foodCategory}>
        <TouchableOpacity style={styles.searchBar}
          onPress={() => { navigation.navigate('Search') }}
        >
          <Text style={{ fontSize: 15, fontWeight: '300' }}>Search Your Favourite Food</Text>
          <Image source={require('./assets/search.png')} style={styles.searcIcon} />
        </TouchableOpacity>

      </View>

      <ScrollView>
        <View style={styles.foodCategory}>
          <Text style={styles.category}>Food Category</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('FoodCategory') }}
          >
            <Text style={styles.category}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={category}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={styles.contain1}>
                    <Image source={{ uri: item.img }} style={styles.foodCategoryImage} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

        <View style={styles.foodCategory}>
          <Text style={styles.category}>Popular Food</Text>
          <TouchableOpacity>
            <Text style={styles.category}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={popularFoods}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={styles.contain2}>
                    <TouchableOpacity
                     onPress={() => {handleLike()}} 
                    >
                      <Image source={{ uri: item.img2 }} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Image source={{ uri: item.img }} style={styles.popularfoodImage} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

        <View>
          <Text style={styles.category}>Best Seller</Text>
        </View>

        <View>
          <FlatList
            data={bestSeller}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({ item }) =>

              <View style={styles.items}>
                <TouchableOpacity>
                  <View style={{ display: 'flex', flexDirection: 'row', }}>
                    <View style={styles.contain3}>
                      <Image source={{ uri: item.img }} style={styles.bestsellerImage} />
                      {/* <Image source={{uri: item.heart}}/> */}
                      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16, }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </ScrollView >

      <View style={styles.navigationbar}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Home') }}
        >
          <Image source={require('./assets/home.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('favourite') }}
        >
          <Image source={require('./assets/fav.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('CartScreen') }}
        >
          <Image source={require('./assets/cart.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Profile') }}
        >
          <Image source={require('./assets/profile.png')} style={{ height: 28, width: 28 }} />
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 44,
    marginLeft: 17,
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 19,
    marginBottom: 10,
    marginLeft: 17,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 17,
    marginRight: 17,
  },
  foodCategory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    height: 40,
    margin: 18,
    paddingRight: 170,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 250,
  },
  button2: {
    height: 40,
    margin: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    width: 50,
  },
  input: {
    height: 40,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 270,
    marginLeft: 17,
  },
  searchBar: {
    height: 40,
    marginTop: 15,
    marginBottom: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 270,
    marginLeft: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searcIcon: {
    width: 30,
    height: 30,
  },
  items: {
    marginTop: 10,
    marginLeft: 6,
    marginBottom: 10,
    padding: 10,
  },
  contain1: {
    height: 45,
    width: 140,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  foodCategoryImage: {
    width: 50,
    height: 40,
  },
  contain2: {
    height: 200,
    width: 140,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularfoodImage: {
    width: 130,
    height: 90,
  },
  bestsellerImage: {
    width: 90,
    height: 70,
  },
  contain3: {
    height: 100,
    width: 300,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  navigationbar: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 25,
  }
});
