import { useState } from "react";
import { StyledFormControlLabel, StyledCheckbox } from "./FilterRadioStyles";
import { IFilterRadioProps } from "./types";
import { FilterLocalStorage } from "constants/data";

function FilterRadio({ label, checked, type, params }: IFilterRadioProps) {
  const setLocalStorageFilter = (filter: object) => {
    localStorage.setItem("filter", JSON.stringify(filter));
  };

  const createLocalStorageFilter = () => {
    let JSONfilter: string | null;
    JSONfilter = localStorage.getItem("filter");
    if (JSONfilter === null) {
      const filter: object = FilterLocalStorage;
      setLocalStorageFilter(filter);
    }
  };

  const getLocalStorageFilter = () => {
    let JSONfilter: string | null;
    JSONfilter = localStorage.getItem("filter");
    if (JSONfilter === null) createLocalStorageFilter();
    const filter = JSON.parse(JSONfilter || "{}");
    return filter;
  };
  const filter = getLocalStorageFilter();
  const [state, setState] = useState(filter[type][params.name][label]);

  const updateLocalStorageFilter = () => {
    const filter = getLocalStorageFilter();
    setState(!state);
    filter[type][params.name][label] = !filter[type][params.name][label];
    setLocalStorageFilter(filter);
  };

  return (
    <StyledFormControlLabel
      control={
        <StyledCheckbox color="default" onClick={updateLocalStorageFilter} />
      }
      label={label}
      checked={state}
    />
  );
}

export default FilterRadio;
