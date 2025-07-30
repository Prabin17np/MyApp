import { StyleSheet, Platform, Dimensions } from "react-native";

export const softGray = "#f8f9fa";
export const secondaryText = "#6c757d";
export const primaryColor = "#2C3E50";
export const accentColor = "#3498db";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  // General Layout
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Header & User Info
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
    fontSize: 18,
    fontWeight: "700",
    color: primaryColor,
  },
  userSubTitle: {
    fontSize: 14,
    color: secondaryText,
  },

  // Status Boxes
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statusBox: {
    flex: 1,
    backgroundColor: softGray,
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
    fontSize: 14,
    fontWeight: "600",
    color: primaryColor,
  },

  // Section Title
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 12,
    color: primaryColor,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    opacity: 0.3,
  },

  // Task Overview
  taskOverviewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  taskOverviewBox: {
    flex: 1,
    backgroundColor: "#fdfefe",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: softGray,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
  },
  taskOverviewSubtitle: {
    fontSize: 14,
    color: secondaryText,
  },
  taskOverviewCount: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
    color: primaryColor,
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fafafa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
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

  // Screen Headers
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    marginBottom: 12,
  },
  screenHeaderWide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 12,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: primaryColor,
    textAlign: "center",
    flex: 1,
  },

  // Form Inputs
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: primaryColor,
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: softGray,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  subText: {
    fontSize: 12,
    color: secondaryText,
  },

  // Map Placeholder
  mapPlaceholder: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  mapPlaceholderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#666",
  },

  // Search Row
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

  // Repeat Option
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
    fontSize: 14,
    fontWeight: "600",
    color: primaryColor,
  },

  // Task Details
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
    fontSize: 14,
    fontWeight: "700",
    color: primaryColor,
  },
  taskInfoValue: {
    fontSize: 14,
    color: secondaryText,
    marginTop: 2,
    maxWidth: width * 0.7,
  },

  // Task Tracker
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
    fontSize: 17,
    fontWeight: "600",
    color: primaryColor,
  },
  taskTrackerSubTitle: {
    fontSize: 13,
    color: secondaryText,
    marginLeft: 6,
  },
  taskTrackerTitleSmall: {
    flexShrink: 1,
    fontSize: 15,
    fontWeight: "600",
    color: primaryColor,
  },
  taskTrackerSubTitleSmall: {
    fontSize: 11,
    color: secondaryText,
    marginLeft: 6,
  },
  taskTrackerStatus: {
    fontSize: 14,
    fontWeight: "700",
    color: primaryColor,
  },

  // Alerts & Notifications
  alertRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  //Landing Page
 background: {
  flex: 1,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},

imageStyle: {
  
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.3)', // lighter overlay to avoid blur effect
  width: '100%',
  paddingHorizontal: 40,
  paddingVertical: 60,
  justifyContent: 'space-between',
  alignItems: 'center',
},

  header: {
    marginTop: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#ff4e30',
    textAlign: 'center',
  },
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quote: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  getStartedButton: {
    backgroundColor: '#3f51b5',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#3f51b5',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 10,
  },
  getStartedButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});





