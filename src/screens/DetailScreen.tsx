import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/types'
import { Film } from './PopularFilms/types'
import { apiURL, token } from './PopularFilms/constants'
import { reverseDate } from '../helpers/helpers'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton'


type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>

const DetailScreen = ({ route }: Props) => {
    const { movieId } = route.params
    const [movieData, setMovieData] = useState({
        pending: false,
        errorMsg: '',
        movie: {} as Film
    })

    useEffect(() => {
        async function fetchData() {
            try {
                setMovieData(prevState => ({ ...prevState, pending: true, errorMsg: '' }))
                const response = await fetch(`${apiURL}/${movieId}?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = await response.json()
                setMovieData({ pending: false, errorMsg: '', movie: data })
            }
            catch (error) {
                setMovieData((prevState) => ({ ...prevState, pending: false, errorMsg: 'Error' }))
            }
        }
        fetchData()

    }, [])

    return (
        <View className='flex-1' >
            <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + movieData.movie.poster_path }} style={{ width: '100%', height: 300 }} resizeMode='cover' />
            <View className='p-4 space-y-4'>
                <Text className='text-white text-3xl font-bold fon'>{movieData.movie.title}</Text>
                {movieData?.movie.release_date && <Text className='text-white'>Vizyona giris:{reverseDate(movieData?.movie.release_date)}</Text>}
                <CustomButton title='Oynat' color='light' iconName='play' onPress={() => { }} />
                <CustomButton title='Indir' color='dark' iconName='download' onPress={() => { }} />
                {/* buttons */}
                <View className='flex-row items-start justify-between'>
                    <View className='items-center font-semibold text-lg p-y-3'>
                        <MaterialCommunityIcons name="movie-play-outline" size={32} color="white" />
                        <Text className='text-white font-medium mt-3 text-lg'>Fragman</Text>
                    </View>
                    <View className='items-center font-semibold text-lg p-y-3'>
                        <MaterialCommunityIcons name="plus" size={32} color="white" />
                        <Text className='text-white font-medium mt-3 text-lg'>Izleme {"\n"}Listesi</Text>
                    </View>
                    <View className='items-center font-semibold text-lg p-y-3'>
                        <AntDesign name="like2" size={32} color="white" />
                        <Text className='text-white font-medium mt-3 text-lg'>Begen</Text>
                    </View>
                    <View className='items-center justify-center font-semibold text-lg p-y-3'>
                        <AntDesign name="dislike2" size={32} color="white" />
                        <Text className='text-white text-center font-medium mt-3 text-lg'>Bana gore {"\n"} degil. </Text>
                    </View>
                    <View className='items-center font-semibold text-lg p-y-3'>
                        <AntDesign name="sharealt" size={32} color="white" />
                        <Text className='text-white font-medium mt-3 text-lg'>Paylas</Text>
                    </View>
                </View>
                <Text className='text-white leading-6 font-medium'>{movieData.movie.overview}</Text>
            </View>
        </View>
    )
}

export default DetailScreen

