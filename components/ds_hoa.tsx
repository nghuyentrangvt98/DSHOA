import React, { useState } from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from 'react-native';

import images from '../assets/image/img';

//data of flowers
const flowers = [
    {id: 'c1', name: 'Hoa Cúc 1'},
    {id: 'c2', name: 'Hoa Cúc 2'},
    { id: 'c3', name: 'Hoa Cúc 3'},
    { id: 'c4', name: 'Hoa Cúc 4'},
    { id: 'c5', name: 'Hoa Cúc 5'},
    { id: 'c6', name: 'Hoa Cúc 6'},
    { id: 'c7', name: 'Hoa Cúc 7'},
    { id: 'c8', name: 'Hoa Cúc 8'},
    { id: 'c9', name: 'Hoa Cúc 9'},
    { id: 'c10', name: 'Hoa Cúc 10'},
    { id: 'c11', name: 'Hoa Cúc 11'},
    { id: 'c12', name: 'Hoa Cúc 12'},
    { id: 'c13', name: 'Hoa Cúc 13'},
    { id: 'c14', name: 'Hoa Cúc 14'},
    { id: 'c15', name: 'Hoa Cúc 15'},
    { id: 'c16', name: 'Hoa Cúc 16'},
    { id: 'ci1', name: 'Hoa Cưới 1'},
    { id: 'ci2', name: 'Hoa Cưới 2'},
    { id: 'ci3', name: 'Hoa Cưới 3'},
    { id: 'ci4', name: 'Hoa Cưới 4'},
    { id: 'ci5', name: 'Hoa Cưới 5'},
    { id: 'ci6', name: 'Hoa Cưới 6'},
    { id: 'ci7', name: 'Hoa Cưới 7'},
    { id: 'ci8', name: 'Hoa Cưới 8'},
    { id: 'ci9', name: 'Hoa Cưới 9'},
    { id: 'h1', name: 'Hoa Hồng 1'},
    { id: 'h2', name: 'Hoa Hồng 2'},
    { id: 'h3', name: 'Hoa Hồng 3'},
    { id: 'h4', name: 'Hoa Hồng 4'},
    { id: 'h5', name: 'Hoa Hồng 5'},
    { id: 'h6', name: 'Hoa Hồng 6'},
    { id: 'h7', name: 'Hoa Hồng 7'},
    { id: 'h8', name: 'Hoa Hồng 8'},
    { id: 'h9', name: 'Hoa Hồng 9'},
    { id: 'h10', name: 'Hoa Hồng 10'},
    { id: 'h11', name: 'Hoa Hồng 11'},
    { id: 'h12', name: 'Hoa Hồng 12'},
    { id: 'h13', name: 'Hoa Hồng 13'},
    { id: 'h14', name: 'Hoa Hồng 14'},
    { id: 'h15', name: 'Hoa Hồng 15'},
    { id: 'h16', name: 'Hoa Hồng 16'},
    { id: 'x1', name: 'Hoa Xuân 1'},
    { id: 'x2', name: 'Hoa Xuân 2'},
    { id: 'x3', name: 'Hoa Xuân 3'},
    { id: 'x4', name: 'Hoa Xuân 4'},
    { id: 'x5', name: 'Hoa Xuân 5'},
    { id: 'x6', name: 'Hoa Xuân 6'},
    { id: 'x7', name: 'Hoa Xuân 7'},
    { id: 'x8', name: 'Hoa Xuân 8'},
    { id: 'x9', name: 'Hoa Xuân 9',
    }
];


const FlowersList = (probs: any) => {
    const [img, setImg] = useState(flowers[0]);
    const Item = ({name, id}) => {
        return(
            <TouchableOpacity onPress={()=>{setImg(images.flowers[id])}}>
                <View style={styles.item}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </TouchableOpacity>
        )    
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={flowers}
                renderItem={({item}) => <Item name={item.name} id={item.id} />}
                keyExtractor={item => item.id}
            />
            <View>
                <Image source={img}/>
                <TouchableOpacity onPress={()=>{setImg('')}}>
                    <Text style={styles.hideBtn}>Hide Picture</Text>
                </TouchableOpacity>  
            </View>
        </SafeAreaView>
    );
};


//styling for the list
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: 150,
    backgroundColor: '#fcba03',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    textAlign: "center",
  },
  hideBtn:{
    fontSize: 20,
    marginVertical: 50,
    backgroundColor: '#fcba03',
    padding: 10,
    textAlign: "center",
  }
});

export default FlowersList;