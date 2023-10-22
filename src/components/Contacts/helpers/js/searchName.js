export const searchName = (state, name) => {
  return state.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};
