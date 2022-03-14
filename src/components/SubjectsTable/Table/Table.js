import { DataGrid } from '@mui/x-data-grid';
import  Box from '@mui/material/Box';


const Table = ({style, columns, rows, loading, rowsSelected, showCheck }) => {

  return (
    <Box sx={{ height: '70vh', width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection={showCheck}
        loading={loading}
        disableColumnMenu
        disableSelectionOnClick
        onSelectionModelChange={(newSelectionModel) => {
          rowsSelected(newSelectionModel);
        }}

        
        sx={{marginTop:style.marginTop, 
        color:'white', 
        fontSize:'18px',
        backgroundColor:'#525558',
        borderColor:'black',
        
        '& .MuiDataGrid-cell': {
          justifyContent: 'center'
        },
        '& .MuiDataGrid-cell:focus': {
          outline: 'none',
        },
        '& .MuiDataGrid-cellCheckbox:focus':{
          outline: 'none'
        },
        '& .MuiDataGrid-columnHeader:focus': {
          outline: 'none'
        },
        '& .MuiDataGrid-cell:focus-within': {
          outline: 'none'
        },
        '& .MuiDataGrid-columnHeaderTitleContainer:focus-within': {
          outline: 'none'
        },
        '& .MuiDataGrid-columnHeaderTitle':{
          fontWeight: 'bold',
          fontSize:'20px'
        },
        '& .MuiDataGrid-iconSeparator': {
          visibility: 'hidden'
        }


    
      }}
        
      />
    </Box>
  )
}

export default Table