const { useLocalSearchParams } = require("expo-router");
const { useEffect } = require("react");
//const { FlatList } = require("react-native-web");

const search = () => {
  const { query } = useLocalSearchParams();

  useEffect(() => {
    refetch();
  }, [query]);

  return <SafeAreaView></SafeAreaView>;
};

export default search;
