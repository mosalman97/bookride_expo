import { View, Text, FlatList } from "react-native";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  const { selectedDriver, setSelectedDriver, drivers } = useDriverStore();
  return (
    <RideLayout title="Choose A Driver" snapPoints={["60%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item)}
          />
        )}
        ListFooterComponent={() => {
          return (
            <View className="mb-1">
              <CustomButton
                title="Select Ride"
                onPress={() => {
                  router.push("/(root)/book-ride");
                }}
              />
            </View>
          );
        }}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
