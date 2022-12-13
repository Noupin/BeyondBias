//Third Party Imports
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Callback, CallbackWithResult } from "@react-native-async-storage/async-storage/lib/typescript/types"

export const getJSONAsyncStorage = async(key: string, callback?: CallbackWithResult<string> | undefined): Promise<any | null> => {
    const value = await AsyncStorage.getItem(key, callback)
    const json = value ? JSON.parse(value) : undefined
    if(json && typeof json === 'object'){
        Object.keys(json).forEach((key) => {
            if(json[key].date) json[key].date = new Date(json[key].date)
        })
    }
    return json
}

export const setJSONAsyncStorage = async <T,>(key: string, value: T, callback?: Callback | undefined): Promise<void> => {
    AsyncStorage.setItem(key, JSON.stringify(value), callback)
}