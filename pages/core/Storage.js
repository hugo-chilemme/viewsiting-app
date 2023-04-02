import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.clear()
const Storage = {
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  },
  del: async (key) => {
    await AsyncStorage.delItem(key);
  },
  get: async (key, cb) => {
    const textValue = await AsyncStorage.getItem(key);
    let value = textValue ? textValue : undefined;
    try {
      value = JSON.parse(value);
    } catch (error) {
    }

    console.log(`[Storage.${key}] ${value}`)
    cb(value);
  },

  has: async (key, cb) => {
    const value = await AsyncStorage.getItem(key);
    cb(value ? true : false)
  }
};

export default Storage;
