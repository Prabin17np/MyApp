import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TaskItem from "../components/TaskItem";
import Button from "../components/Button";
import styles, {
  primaryColor,
  softGray,
  secondaryText,
  accentColor,
} from "../styles";

export default function HomeScreen({ navigation }) {
  const [upcomingTasks] = useState([
    {
      id: "1",
      icon: "md-image-outline",
      title: "Task at the Park",
      subtitle: "Near Central Park",
    },
    {
      id: "2",
      icon: "md-cart-outline",
      title: "Grocery Store",
      subtitle: "At SuperMart",
    },
    {
      id: "3",
      icon: "md-paw-outline",
      title: "Walk the Dog",
    },
    {
      id: "4",
      icon: "md-basket-outline",
      title: "Buy Groceries",
    },
  ]);
  const [completedTasks] = useState([
    {
      id: "5",
      icon: "checkmark-circle",
      title: "Buy Milk",
      subtitle: "Completed at 7 PM",
    },
    {
      id: "6",
      icon: "checkmark-circle",
      title: "Doctor's Appointment",
      subtitle: "Completed at 3 PM",
    },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.userHeader}>
          <View style={styles.userAvatar} />
          <View>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userSubTitle}>Your tasks at a glance</Text>
          </View>
        </View>

        {/* Upcoming & Completed boxes */}
        <View style={styles.statusRow}>
          <TouchableOpacity
            style={[styles.statusBox, styles.statusBoxUpcoming]}
            onPress={() => navigation.navigate("TaskTracker")}
            activeOpacity={0.8}
          >
            <Text style={styles.statusEmoji}>📍</Text>
            <Text style={styles.statusText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusBox, styles.statusBoxCompleted]}
            onPress={() => navigation.navigate("TaskTracker")}
            activeOpacity={0.8}
          >
            <Text style={styles.statusEmoji}>✅</Text>
            <Text style={styles.statusText}>Completed</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Tasks */}
        <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
        <FlatList
          data={upcomingTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onPress={() => navigation.navigate("TaskDetails", { task: item })}
            />
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        {/* Task Overview */}
        <Text style={styles.sectionTitle}>Task Overview</Text>
        <View style={styles.taskOverviewRow}>
          <View style={styles.taskOverviewBox}>
            <Text style={styles.taskOverviewSubtitle}>Total Tasks</Text>
            <Text style={styles.taskOverviewCount}>10</Text>
          </View>
          <View style={styles.taskOverviewBox}>
            <Text style={styles.taskOverviewSubtitle}>Completed</Text>
            <Text style={styles.taskOverviewCount}>5</Text>
          </View>
          <View style={styles.taskOverviewBox}>
            <Text style={styles.taskOverviewSubtitle}>Remaining</Text>
            <Text style={styles.taskOverviewCount}>5</Text>
          </View>
        </View>

        {/* Buttons */}
        <Button
          title="Edit Task"
          outline
          style={{ marginVertical: 6 }}
          onPress={() => {}}
        />
        <Button
          title="Delete Task"
          outline
          style={{ marginBottom: 6 }}
          onPress={() => {}}
        />
        <Button
          title="Add Task"
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate("AddTask")}
        />

        {/* Completed Tasks */}
        <Text style={styles.sectionTitle}>Completed Tasks</Text>
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem item={item} completed onPress={() => {}} />
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.navEmoji}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("AddTask")}
        >
          <Ionicons name="add-outline" size={24} color={primaryColor} />
          <Text style={styles.navText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={primaryColor}
          />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Ionicons name="settings-outline" size={24} color={primaryColor} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}