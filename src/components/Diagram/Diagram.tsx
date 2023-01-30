import { FC } from "react";
import "./Diagram.css";
import DiagramBar, { IDiagramBar } from "./DiagramBar";

export interface IDiagramEntry{
    label: string;
    value: number;
}

export interface IDiagram {
  dataSets: IDiagramEntry[];
}

const Diagram: FC<IDiagram> = ({ dataSets }: IDiagram) => {

    const dataSetsValues = dataSets.map((dataSet) => dataSet.value);

    const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;