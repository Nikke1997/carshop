import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog  from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function AddCar( {AddCar}) {
const [open, setOpen] = React.useState(false);
const [car, setCar] = React.useState({
brand: '',
model: '',
color: '',
fuel: '',
price: '',
year: '',


})
const handleClose = () => {
    AddCar(car);
setOpen(false);
}

const handleCancel = () => {
    setOpen(false);
    }

const handleClickOpen = () => {
setOpen(true);

}

const inputChanged = (event) => {
setCar({...car, [event.target.name]: event.target.value})

}

    return (
<div>
<Button onClick={handleClickOpen} variant="outlined">
Add Car
</Button>
<Dialog OnClose={handleClose} open={open}>
<DialogTitle>Add Car</DialogTitle>
<DialogContent>
<TextField
 name="brand"
 value={car.brand}
 margin="dense"
 label="Brand"
 onChange={inputChanged} 
 fullWidth={true}
/>
<TextField
 name="model"
 value={car.model}
 margin="dense"
 label="Model"
 onChange={inputChanged}
 fullWidth={true}
/>
<TextField
 name="color"
 value={car.color}
 margin="dense"
 label="Color"
 onChange={inputChanged}
 fullWidth={true}
/>
<TextField
 name="fuel"
 value={car.fuel}
 margin="dense"
 label="Fuel"
 onChange={inputChanged}
 fullWidth={true} 
/>
<TextField
 name="year"
 value={car.year}
 margin="dense"
 label="Year"
 onChange={inputChanged}
 fullWidth={true}
/>
<TextField
 name="price"
 value={car.price}
 margin="dense"
 label="Price"
 onChange={inputChanged}
 fullWidth={true}
/>
</DialogContent>
<DialogActions>
<Button onClick={handleClose}>Save</Button>
<Button onClick={handleCancel}>Cancel</Button>
</DialogActions>
</Dialog>
</div>

    )
}

export default AddCar;