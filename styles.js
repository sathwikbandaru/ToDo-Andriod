import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 55,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "#333",
    // textAlign: "center",
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#cae9ff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 34,
  },
  taskTextContainer: {
    flex: 1,
    marginBottom: 10,
  },
  prio: {
    flexDirection: "row",
    position: "relative",
  },
  priorityText: {
    position: "absolute",
    top: 10,
    right: 10,
     
    fontSize: 20,
    paddingHorizontal: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 35,
  },
  taskText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  taskDescription: {
    fontSize: 16,
    color: "#000",
  },
  taskTime: {
    fontSize: 14,
    color: "#666",
  },
  taskStatus: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 2,
  },

  editButton: {
    backgroundColor: "#007BFF",
    // border: "1px solid red",
    // color: 'black',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    width: 110,
  },
  button: {
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    width: 110,
  },
  completedButton: {
    backgroundColor: "#808080",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#FF9500",
    borderRadius: 20,
    padding: 10,
    width: 110,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 16,
    marginBottom: 10,
  },
  taskDeadline: {
    color: "#FF3B12",
  },
  taskCreatedAt: {
    color: "#5497FF",
  },

  Dropdowncontainer: {
    paddingTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  
});

export default styles;
