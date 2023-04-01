import AsyncStorage from '@react-native-async-storage/async-storage';

module.exports.set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
};

module.exports.get = async (key, cb) => {
    const textValue = await AsyncStorage.getItem(key);
    const value = textValue ? textValue : undefined;

    console.log(`[Storage.${key}] ${value}`)
    cb(value);
};

module.exports.has = async (key, cb) => {
    const value = await AsyncStorage.getItem(key);
    cb(value ? true : false)
};
