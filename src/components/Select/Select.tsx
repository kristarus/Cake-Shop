import { useState, ChangeEvent } from "react";
import { StyledSelect, StyledOption } from "./SelectStyles";
import { ISelectProps, ISelectState } from "./types";

function Select({
  params,
  disabled = false,
  value,
  onChange,
  error,
  name,
}: ISelectProps) {
  const createOptions = () => {
    return params.map(function (item: string, index: number) {
      return (
        <StyledOption value={item} key={item + index}>
          {item}
        </StyledOption>
      );
    });
  };

  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      label
      width="100%"
      disabled={disabled}
      error={!!error}
      name={name}
    >
      {createOptions()}
    </StyledSelect>
  );
}

export default Select;
