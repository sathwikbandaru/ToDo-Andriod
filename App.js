import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";

import TaskList from "./components/TaskList";

import TaskModal from "./components/TaskModal";
import styles from "./styles"; 


const App = () => {
  

  // Array to store tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "Pending",
    deadline: "",
    createdAt: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

 
  const [editingTask, setEditingTask] = useState(null);
  const [validationError, setValidationError] = useState(false); 

 
  const handleAddTask = () => {
    if (task.title.trim() !== "" && task.deadline !== "") {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();

      if (editingTask) {
        // If editing an existing task, update it
        const updatedTasks = tasks.map((t) =>
          t.id === editingTask.id ? { ...t, ...task } : t
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      } else {
        // If adding a new task, create it
        const newTask = {
          id: Date.now(),
          ...task,

          createdAt: formattedDate,
        };
        setTasks([...tasks, newTask]);
      }

      setTask({
        title: "",
        description: "",
        priority: "",
        status: "Pending",
        deadline: "",
        createdAt: "",
      });

      setModalVisible(false);

      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };

  // Function to handle task editing
  const handleEditTask = (task) => {
   
    setEditingTask(task);

    setTask(task);

    setModalVisible(true);
  };

  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
  };

  // Function to toggle task completion status
  const handleToggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId
        ? {
            ...t,
            status: t.status === "Pending" ? "Completed" : "Pending",
          }
        : t
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO-DO LIST</Text>

      {/* Render the TaskList component */}
      <TaskList
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleToggleCompletion={handleToggleCompletion}
        handleDeleteTask={handleDeleteTask}
      />
      {/* Button to add or edit tasks */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setEditingTask(null);
          setTask({
            title: "",
            description: "",
            priority: "",
            status: "Pending",
            deadline: "",
            createdAt: "",
          });
          setModalVisible(true);
          setValidationError(false);
        }}
      >
        <Text style={styles.addButtonText}>
          {editingTask ? "Edit Task" : "Add Task"}
        </Text>
      </TouchableOpacity>
      {/* Render the TaskModal component */}
      <TaskModal
        modalVisible={modalVisible}
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        handleCancel={() => {
          setEditingTask(null);
          setTask({
            title: "",
            description: "",
            priority: "",
            status: "Pending",
            deadline: "",
            createdAt: "",
          });
          setModalVisible(false);
          setValidationError(false);
        }}
        validationError={validationError}
      />
    </View>
  );
};

export default App;
