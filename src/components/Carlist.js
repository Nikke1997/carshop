import React, { useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import AddCar from './AddCar';
import { Https, SettingsPowerRounded } from '@mui/icons-material';
import Editcar from './Editcar';

function Carlist() {
const [cars, setCars] = React.useState([]);


const deleteCar = (link) => {
    fetch(link, { method: 'DELETE'})
.then(response => {
if(response.ok) {
    fetchCars();
    
    }
})}

const addCar = (car) => {
fetch("https://carrestapi.herokuapp.com/cars", {
method: 'POST', 
headers: {'Content-type' : 'application/json' },
body: JSON.stringify(car) 
})
.then(response => {
    if(response.ok) {
        fetchCars();
    } else {
alert('Somenthing went wrong');

    }
})
    .catch(err => console.log(err))
}

const fetchCars = () => {
    fetch("https://carrestapi.herokuapp.com/cars")
    .then(response => response.json())
    .then (data => setCars(data._embedded.cars))

}




const editCar = (editCar, link) => {
fetch(link, {
method: 'PUT',
headers: {'Content-type' : 'application/json'},
body: JSON.stringify(editCar)
})
  .then(response => {
if(response.ok) {
console.log('ONNISTUI')
fetchCars();
} else {
    alert('Something went wrong')
}

  })
  .catch(err => console.error(err));  
}
const columns = [
{field: 'brand', sortable: true, filter: true},
{field: 'model', sortable: true, filter: true},
{field: 'color', sortable: true, filter: true},
{field: 'fuel', sortable: true, filter: true},
{field: 'year', sortable: true, filter: true},
{field: 'price', sortable: true, filter: true,},
{
    headerName: 'Delete',
    width: 90,
    field: '_links.self.href',
    cellRenderer: params => 
    <IconButton onClick={() => deleteCar(params.value)}>
        <DeleteIcon>

        </DeleteIcon>
    </IconButton>

}, 
{
    headerName: 'Edit',
    width: 90,
    field: '_links.self.href',
    cellRenderer: params => 
<Editcar editCar={editCar} params={params} />



}

]



useEffect( () => {
fetch("https://carrestapi.herokuapp.com/cars")
.then(response => response.json())
.then (data => setCars(data._embedded.cars))

}, [])







return(
<>
<AddCar AddCar={addCar} />
    <div className="ag-theme-material" style={{height: 600, width: '90'}}>
    <AgGridReact
        rowData={cars}
        paginationPageSize={10}
        pagination={true}
        columnDefs={columns}>
    </AgGridReact>
</div>
</>


)


}

export default Carlist;