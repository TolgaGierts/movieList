import { FlatList, Image, ImageBackground, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { apiURL, token } from './constants'
import { Film, FilmState } from './types'
import FilmItem from '../../components/FilmItem/FilmItem';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationType } from '../../navigation/types';



const PopularMovieList = () => {
    const nav = useNavigation<MainNavigationType>()

    const [popularMovies, setPopularMovies] = useState<FilmState>({
        pending: false,
        errorMsg: '',
        movies: [],
    })

    const handlePress = (id: number) => {
        nav.navigate('DetailScreen', { movieId: id })
    }


    useEffect(() => {
        async function fetchData() {
            try {
                setPopularMovies(prevState => ({ ...prevState, pending: true, errorMsg: '' }))
                const response = await fetch(`${apiURL}/popular?language=en-US&page=1`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                const movies = data.results as Film[]
                if (movies.length > 0) {
                    setPopularMovies({ pending: false, errorMsg: '', movies: movies })
                }
            } catch (error) {
                setPopularMovies((prevState) => ({ ...prevState, pending: false, errorMsg: 'Error' }))
                console.error(error)
            }
        }
        fetchData()
    }, [])

    return (
        <View className='bg-black'>
            <FlatList
                data={popularMovies.movies}
                renderItem={({ item }) => (<FilmItem item={item} onPress={handlePress} />)}
            // keyExtractor={(index) => index.toString()}
            />
        </View >
    )
}

export default PopularMovieList

