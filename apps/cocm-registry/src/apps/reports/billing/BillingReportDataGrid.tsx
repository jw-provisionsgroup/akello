import * as React from 'react';
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'first_name',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'last_name',
        headerName: 'Last name',
        width: 150,
    },    
    {
        field: 'stat_date',
        headerName: 'Date',
        width: 110,
    },
    {
        field: 'total_minutes',
        headerName: 'Minutes',
        width: 110,
        type: "number"
    },
];


interface BillingReportDataGridProps {
    data: any[]
}


const BillingReportDataGrid:React.FC<BillingReportDataGridProps> = ({data}) => {
    return (
        <div className={"w-full"}>
            <DataGrid
                getRowId={(row) => row.mrn + row.stat_date}
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 100,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
            />
        </div>
    );
}


export default BillingReportDataGrid