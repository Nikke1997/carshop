import React from 'react';
import { DialogTitle, Dialog } from '@mui/material';
import Button from '@mui/material/Button';
import { DialogActions, DialogContent,  TextField } from '@mui/material';

function Editcar({editCar, params}) {
const [open, setOpen] = React.useState(false);
const [car, setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    price: '',
    year: '',
})

const handleClickOpen = () => {
setOpen(true);
setCar({
brand: params.data.brand,
model: params.data.model,
color: params.data.color,
fuel: params.data.fuel,
price: params.data.price,
year: params.data.year


})
}

const handleSave = () => {
editCar(car, params.value);
setOpen(false);


}

const handleClickClose = () => {
setOpen(false);

}

const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
    
    }

    return (
<div>
<Button onClick={handleClickOpen} variant="outlined">Edit

</Button>
<Dialog open={open} onClose={handleClickClose}>
    <DialogTitle>Edit car</DialogTitle>
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
<Button onClick={handleSave}>Save</Button>
<Button onClick={handleClickClose}>Cancel</Button>
</DialogActions>
</Dialog>

</div>


    )
}

export default Editcar;