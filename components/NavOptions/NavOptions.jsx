import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"Map screen"
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"Eats screen"
    },
]


const NavOptions = () => {
  return (
    <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image
                        style={{
                            width:120,
                            height:120,
                            resizeMode:'contain'
                        }}
                        source={{
                            uri:item.image
                        }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})