import { ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Film } from '../../screens/PopularFilms/types';

type Props = {
    item: Film
    onPress: (id: number) => void
}

const FilmItem = ({ item, onPress }: Props) => {
    return (
        <Pressable className='flex-row p-2 m-1 items-center rounded-md' onPress={() => onPress(item.id)}>
            <ImageBackground source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} className=' h-24 relative flex-1' imageStyle={{ borderRadius: 10, }} >
                <AntDesign name="play" size={24} color="white" style={{ position: 'absolute', left: 10, bottom: 10, }} />
            </ImageBackground>
            <View className='flex-1 gap-1 ml-3'>
                <Text className='text-lg font-bold text-white'>{item.title}</Text>
                <Text className='text-gray-300'>{`${item.release_date.split('-')[0]}`}</Text>
                <View className='flex-row items-center'>
                    <Text className='text-gray-300 mr-2'>{`${(item.vote_average).toFixed(2)}`}</Text>
                    <AntDesign name="star" size={12} color="yellow" />
                </View>
            </View>
            <AntDesign name="right" size={16} color="gray" />
        </Pressable>
    )
}

export default FilmItem

