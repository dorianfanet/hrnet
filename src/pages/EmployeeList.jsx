import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import { selectEmployees } from '../store/selectors'
import { useSelector } from 'react-redux'

const columnWidth = 1022 / 9

const columns = [
  {field: 'firstname', headerName: 'First Name', width: columnWidth, disableColumnMenu: true},
  {field: 'lastname', headerName: 'Last Name', width: columnWidth, disableColumnMenu: true},
  {field: 'birthdate', headerName: 'Date of birth', width: columnWidth, disableColumnMenu: true},
  {field: 'street', headerName: 'Street', width: columnWidth, disableColumnMenu: true},
  {field: 'city', headerName: 'City', width: columnWidth, disableColumnMenu: true},
  {field: 'state', headerName: 'State', width: columnWidth, disableColumnMenu: true},
  {field: 'zipcode', headerName: 'Zipcode', width: columnWidth, disableColumnMenu: true},
  {field: 'startdate', headerName: 'Start date', width: columnWidth, disableColumnMenu: true},
  {field: 'department', headerName: 'Department', width: columnWidth, disableColumnMenu: true}
]

const TableContainer = styled.div`
  height: calc(100vh - 300px);
`

export default function EmployeeList() {

  const data = useSelector(selectEmployees)

  function dateFormat(date){
    if(date){
      return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`
    } else {
      return date
    }
  }

  let formattedData = []

  if(data){
    formattedData = data.map((entry) => {
      return {
        ...entry,
        birthdate: dateFormat(entry.birthdate),
        startdate: dateFormat(entry.startdate)
      }
    })
  }

  const rows = formattedData || []

  return (
    <div className="responsive">
      <h1 className="page-title">Current employees</h1>
      <TableContainer>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ minWidth: 650 }}
        />
      </TableContainer>
    </div>
  )
}