import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  LoginScreen: undefined;
  DetailScreen: { movieId: number };
  PopularMovieList: undefined;
};

type MainNavigationType = NavigationProp<RootStackParamList>;

export type { MainNavigationType, RootStackParamList };
