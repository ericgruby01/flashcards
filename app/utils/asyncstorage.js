import { AsyncStorage } from 'react-native';

export const _storeData = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));
export const _getData = key => AsyncStorage.getItem(key);
export const _resetData = key => AsyncStorage.removeItem(key);
