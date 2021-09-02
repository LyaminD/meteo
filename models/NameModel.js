import AsyncStorage from "@react-native-async-storage/async-storage";

export const nameModel = {
  state: { userName: "" },

  reducers: {
    setName(state, userName) {
      return { ...state, userName };
    },
  },

  effects: (dispatch) => ({
    async storeName(payload) {
      const { userName } = payload;
      if (userName != "") {
        await AsyncStorage.setItem("name", userName);

        const action = {
          type: "nameModel/setName",
          payload: { userName },
        };

        dispatch(action);
      }
    },
    async deleteName(payload) {
      await AsyncStorage.setItem("name", "");
      const { name } = payload;
      const action = {
        type: "nameModel/setName",
        payload: { name },
      };
      dispatch(action);
      console.log(name);
    },
  }),
};
