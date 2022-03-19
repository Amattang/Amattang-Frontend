import axios from 'axios';
import { API_HOST } from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const client = axios.create({ baseURL: API_HOST });

(client.defaults.headers as any).common['Authorization'] = AsyncStorage.getItem('Authorization');
client.defaults.withCredentials = true;
