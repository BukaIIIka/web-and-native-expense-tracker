import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface DropdownProps {
  options: string[];
  selectedValue: string;
  onValueChange: (val: string) => void;
}

export function Dropdown({
  options,
  selectedValue,
  onValueChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Pressable style={styles.trigger} onPress={() => setOpen(true)}>
        <Text>{selectedValue}</Text>
      </Pressable>
      <Modal
        transparent
        visible={open}
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={styles.menu}>
            {options.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={styles.option}
                onPress={() => {
                  onValueChange(opt);
                  setOpen(false);
                }}
              >
                <Text>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
    minWidth: 120,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  menu: {
    backgroundColor: "#fff",
    borderRadius: 4,
    minWidth: 140,
    paddingVertical: 4,
  },
  option: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
