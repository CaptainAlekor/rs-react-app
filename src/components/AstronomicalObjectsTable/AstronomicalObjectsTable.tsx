import * as React from 'react';
import type { AstronomicalObject } from '../../interfaces/AstronomicalObject.ts';
import './AstronomicalObjectTable.css';

class AstronomicalObjectsTable extends React.Component<
  AstronomicalObjectTableProps,
  unknown
> {
  render() {
    return (
      <div id="tableContainer">
        <table>
          <thead>
            <tr>
              <th className="uid">uid</th>
              <th className="name">name</th>
              <th className="objectType">object type</th>
              <th className="location">location</th>
            </tr>
          </thead>
          <tbody>{this.getTableRows()}</tbody>
        </table>
      </div>
    );
  }

  getTableRows = () => {
    return this.props.astronomicalObjects.map((astronomicalObject) => {
      return (
        <tr key={astronomicalObject.uid}>
          <td className="uid">{astronomicalObject.uid}</td>
          <td className="name">{astronomicalObject.name}</td>
          <td className="objectType">
            {astronomicalObject.astronomicalObjectType}
          </td>
          <td className="location">{astronomicalObject.location?.name}</td>
        </tr>
      );
    });
  };
}

interface AstronomicalObjectTableProps {
  astronomicalObjects: AstronomicalObject[];
}

export default AstronomicalObjectsTable;
