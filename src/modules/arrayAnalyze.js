const arrayAnalyze = () => {
  return {
    analyze : (array) => {
      var result = {
        min: Math.min( ...array),
        max: Math.max( ...array)
      };
      return result;
    }
  }
};

export default arrayAnalyze;