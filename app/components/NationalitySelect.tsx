import { FC } from "react";
import { Nationality } from "@/app/types";

const EMPTY_VALUE = "all";

const OPTIONS: NationalityOption[] = [
  { value: EMPTY_VALUE, label: "All" },
  { value: Nationality.American, label: "American" },
  { value: Nationality.British, label: "British" },
];

type NationalityOption = {
  value: Nationality | typeof EMPTY_VALUE;
  label: string;
};

type Props = {
  value: Nationality | null;
  onChange: (nationality: Nationality | null) => void;
};

const NationalitySelect: FC<Props> = ({ value, onChange }) => {
  return (
    <select
      id="countries"
      className="block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      value={value ?? EMPTY_VALUE}
      onChange={(event) => {
        onChange(
          event.target.value === EMPTY_VALUE
            ? null
            : (event.target.value as Nationality),
        );
      }}
    >
      {OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default NationalitySelect;
