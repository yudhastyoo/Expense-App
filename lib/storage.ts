import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "EXPENSES";

export const saveExpenses = async (data: any) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
};

export const getExpenses = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
