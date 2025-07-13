import * as React from 'react';
import type { AstronomicalObject } from '../../interfaces/AstronomicalObject.ts';

class AstronomicalObjectsTable extends React.Component<
  AstronomicalObjectTableProps,
  null
> {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>uid</th>
            <th>name</th>
            <th>object type</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>{this.getTableRows()}</tbody>
      </table>
    );
  }

  getTableRows = () => {
    return this.props.astronomicalObjects.map((astronomicalObject) => {
      return (
        <tr key={astronomicalObject.uid}>
          <td>{astronomicalObject.uid}</td>
          <td>{astronomicalObject.name}</td>
          <td>{astronomicalObject.astronomicalObjectType}</td>
          <td>{astronomicalObject.location?.name}</td>
        </tr>
      );
    });
  };
}

interface AstronomicalObjectTableProps {
  astronomicalObjects: AstronomicalObject[];
}

export default AstronomicalObjectsTable;
