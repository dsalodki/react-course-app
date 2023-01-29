import { FC } from "react";
import "./CostsFilter.css";

export interface ICostsFilter {
  year: number;
  onChangeYear: (year: number) => void;
}

const CostsFilter: FC<ICostsFilter> = ({
  year,
  onChangeYear,
}: ICostsFilter) => {
  const yearChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(Number(e.target.value));
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Фильтр по году</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
