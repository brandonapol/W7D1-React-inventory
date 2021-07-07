import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'instrumentName', headerName: 'Instrument Name', width: 130 },
    { field: 'instrumentModel', headerName: 'Instrument Model', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue('instrumentName') || ''} ${params.getValue('instrumentModel') || ''}`,
    },
  ];

  const rows = [
    { id: 1, instrumentModel: 'Stratocaster', instrumentName: 'Guitar', price: 700 },
    { id: 2, instrumentModel: 'DW Performance Series', instrumentName: 'Drums', price: 2039 },
    { id: 3, instrumentModel: 'Gretsch Catalina', instrumentName: 'Drums', price: 1199 },
    { id: 4, instrumentModel: 'Fender P Bass', instrumentName: 'Bass', price: 1979 }, // Specifically MUST BE SEAFOAM GREEN
    { id: 5, instrumentModel: 'Neve 5088', instrumentName: 'Mixer', price: 160000 },
    { id: 6, instrumentModel: 'Korg MicroKorg', instrumentName: 'Synth', price: 400 },
    { id: 7, instrumentModel: 'MicroBrute', instrumentName: 'Synth', price: 350 },
    { id: 8, instrumentModel: 'Prophet 6', instrumentName: 'Synth', price: 2899 },
    { id: 9, instrumentModel: 'Moog Taurus', instrumentName: 'Synth', price: 1200 },
  ];

  export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Drones In Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}