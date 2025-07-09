import { StyleSheet, Platform, Dimensions } from "react-native";

export const softGray = "#f8f9fa";
export const secondaryText = "#6c757d";
export const primaryColor = "#2C3E50";
export const accentColor = "#3498db";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: softGray,
    marginRight: 12,
  },
  userName: {
    fontWeight: "700",
    fontSize: 18,
    color: primaryColor,
  },
  userSubTitle: {
    fontSize: 14,
    color: secondaryText,
  },

  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statusBox: {
    backgroundColor: softGray,
    flex: 1,
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: "center",
    marginHorizontal: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statusBoxUpcoming: {
    borderColor: accentColor,
    borderWidth: 1.6,
  },
  statusBoxCompleted: {
    borderColor: "#38a169",
    borderWidth: 1.5,
  },
  statusEmoji: {
    fontSize: 28,
  },
  statusText: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 14,
    color: primaryColor,
  },

  sectionTitle: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 12,
    color: primaryColor,
  },

  separator: {
    height: 1,
    backgroundColor: "#ddd",
    opacity: 0.3,
  },

  taskOverviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  taskOverviewBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: softGray,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    backgroundColor: "#fdfefe",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 1,
  },
  taskOverviewSubtitle: {
    color: secondaryText,
    fontSize: 14,
  },
  taskOverviewCount: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 4,
    color: primaryColor,
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fafafa",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  navText: {
    fontSize: 11,
    fontWeight: "600",
    color: primaryColor,
  },

  // Add Task screen
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    marginBottom: 12,
  },
  screenHeaderWide: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  screenTitle: {
    fontWeight: "700",
    fontSize: 22,
    color: primaryColor,
    textAlign: "center",
    flex: 1,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    color: primaryColor,
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: softGray,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  subText: {
    fontSize: 12,
    color: secondaryText,
  },
  mapPlaceholder: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  mapPlaceholderText: {
    fontWeight: "700",
    color: "#666",
    fontSize: 16,
  },
  searchRow: {
    flexDirection: "row",
    marginTop: 6,
  },
  searchButton: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    paddingHorizontal: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  repeatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  repeatOption: {
    flex: 1,
    backgroundColor: "#eee",
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
  },
  repeatOptionSelected: {
    backgroundColor: primaryColor,
  },
  repeatOptionText: {
    fontWeight: "600",
    fontSize: 14,
    color: primaryColor,
  },

  // Task Details screen
  taskDetailsHeader: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    marginBottom: 20,
  },
  taskInfoContainer: {
    backgroundColor: softGray,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  taskInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  taskInfoTextContainer: {
    marginLeft: 10,
  },
  taskInfoTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: primaryColor,
  },
  taskInfoValue: {
    fontSize: 14,
    color: secondaryText,
    marginTop: 2,
    maxWidth: width * 0.7,
  },

  // Task Tracker screen
  taskTrackerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  taskTrackerTitle: {
    flexShrink: 1,
    fontWeight: "600",
    fontSize: 17,
    color: primaryColor,
  },
  taskTrackerSubTitle: {
    fontSize: 13,
    color: secondaryText,
    marginLeft: 6,
  },
  taskTrackerTitleSmall: {
    flexShrink: 1,
    fontWeight: "600",
    fontSize: 15,
    color: primaryColor,
  },
  taskTrackerSubTitleSmall: {
    fontSize: 11,
    color: secondaryText,
    marginLeft: 6,
  },
  taskTrackerStatus: {
    fontWeight: "700",
    fontSize: 14,
    color: primaryColor,
  },

  // Notifications screen
  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  
  
});