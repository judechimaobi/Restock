import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        console.log("Error storing data", error);
    }
}

export const GetItemFor = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value != null) {
            return value
        }
    } catch (error) {
        console.log("Error getting data", error)
    }

}