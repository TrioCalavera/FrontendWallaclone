const tools = {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  sortArray(data) {
    data.sort((b, a) => {
      return a.create - b.create;
    });
  },
};

export default tools;
