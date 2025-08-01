import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropdownMenu from "../dropdown-menu/Dropdown";
import { MenuOption } from "../dropdown-menu/DropdownOption";

export interface DropdownOption<T> {
  label: string;
  value: T;
}

export interface DropdownProps<T> {
  value: T;
  onChange: (value: T) => void;
  options: DropdownOption<T>[];
  width?: number;
}

export function Dropdown<T extends string | number>({
  value,
  onChange,
  options,
  width,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? String(value);

  return (
    <DropdownMenu
      visible={open}
      handleOpen={() => setOpen(true)}
      handleClose={() => setOpen(false)}
      trigger={
        <View style={[styles.trigger, width ? { width } : undefined]}>
          <Text>{selectedLabel}</Text>
        </View>
      }
      dropdownWidth={width}
    >
      {options.map((opt) => (
        <MenuOption
          key={String(opt.value)}
          onSelect={() => {
            onChange(opt.value);
            setOpen(false);
          }}
        >
          <Text>{opt.label}</Text>
        </MenuOption>
      ))}
    </DropdownMenu>
  );
}

const styles = StyleSheet.create({
  trigger: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "white",
  },
});

export default Dropdown;
