
import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal } from "react-native";
import styles from "../styles";
import DatePicker from "react-native-modern-datepicker";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Low", value: "1" },
  { label: "Medium", value: "2" },
  { label: "High", value: "3" },
];

const TaskModal = ({
  modalVisible,
  task,
  setTask,
  handleAddTask,
  handleCancel,
  validationError,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={false}>
      {/* Container for the modal */}
      <View style={styles.modalContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={task.title}
          onChangeText={(text) => setTask({ ...task, title: text })}
        
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={task.description}
          onChangeText={(text) =>
            setTask({
              ...task,
              description: text,
            })
          }
        />

        <Text style={styles.inputLabel}>Select priority:</Text>

        <View style={styles.Dropdowncontainer}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
          
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select item" : "..."}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setTask({ ...task, priority: item.label });
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <Text style={styles.inputLabel}>Deadline:</Text>

        <DatePicker
          style={styles.datePicker}
          mode="datepicker"
          selected={task.deadline}
          onDateChange={(date) => setTask({ ...task, deadline: date })}
        />

        {validationError && (
          <Text style={styles.errorText}>
            Please fill in all fields correctly.
          </Text>
        )}
        <Button
          title={task.id ? "Update" : "Add"}
          onPress={handleAddTask}
          color="#007BFF"
        />

        <Button title="Cancel" onPress={handleCancel} color="#FF3B30" />
      </View>
    </Modal>
  );
};

export default TaskModal;
