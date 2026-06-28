import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dateFormat from "dateformat";


import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function Product() {
    const[Name,setName]=React.useState('')
    const[Description,setDescription]=React.useState('')
   // eslint-disable-next-line no-self-compare
   const [ProductPurchaseDate, setProductPurchaseDate] = React.useState(new Date());
   const [WarrantyPurchaseDate, setWarrantyPurchaseDate] = React.useState(new Date());
   const [WarrantyExpiryDate, setWarrantyExpiryDate] = React.useState(new Date());
   
   const [packagePhoto, setPackagePhoto] = React.useState('');
   const [labelPhoto, setLabelPhoto] = React.useState('');

   const handleFileChange = (e, setPhoto) => {
       const file = e.target.files[0];
       if (file) {
           const reader = new FileReader();
           reader.onloadend = () => {
               setPhoto(reader.result);
           };
           reader.readAsDataURL(file);
       }
   };

   const handleClick=(e)=>{
        e.preventDefault()
        console.log( dateFormat(ProductPurchaseDate, "paddedShortDate", true));


        const Product={"name":Name,"description":Description,
            "productPurchaseDate":  dateFormat(ProductPurchaseDate, "dd/mm/yyyy", true) ,
            "warrantyPurchaseDate": dateFormat(WarrantyPurchaseDate, "dd/mm/yyyy", true) ,
            "warrantyExpiryDate":dateFormat(WarrantyExpiryDate, "dd/mm/yyyy", true),
            "packagePhoto": packagePhoto,
            "labelPhoto": labelPhoto }
        console.log(Product)
        fetch("http://localhost:8080/warranty/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Product)
        }).then(()=>{
            console.log("Added ")
            setName("")
            setDescription("")
            setPackagePhoto("")
            setLabelPhoto("")
        })
    }
  return (
    <Container>
        <Paper variant="elevation10" > 
        <h1 style={{color:"blue"}}> Add Product Warranty</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" value={Name}
       onChange={(e)=>setName(e.target.value)} />
      <TextField id="outlined-basic" label="Description" variant="outlined" value={Description}  
      onChange={(e)=>setDescription(e.target.value)} />
        <br/>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Product Purchase Date" format="MM/dd/yyyy"
          value={ProductPurchaseDate} onChange={(newValue) => {   setProductPurchaseDate(newValue);  }}
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <br/>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Warranty Purchase Date" format="MM/dd/yyyy"
            value={WarrantyPurchaseDate}  onChange={(newValue) => {setWarrantyPurchaseDate(newValue);  }}
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <br/>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Warranty Expiry Date" format="MM/dd/yyyy"
          value={WarrantyExpiryDate}    onChange={(newValue) => { setWarrantyExpiryDate(newValue); }}
          
          renderInput={(params) => <TextField {...params} />}
          />
         </LocalizationProvider>
         <br/>
   </Box>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Button variant="outlined" component="label">
          Upload Package Photo
          <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange(e, setPackagePhoto)} />
        </Button>
        {packagePhoto ? (
          <img src={packagePhoto} alt="Package Preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4, border: '1px solid #ccc' }} />
        ) : (
          <div style={{ width: 80, height: 80, border: '1px dashed #ccc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#999' }}>No Photo</div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Button variant="outlined" component="label">
          Upload Label Photo
          <input type="file" accept="image/*" hidden onChange={(e) => handleFileChange(e, setLabelPhoto)} />
        </Button>
        {labelPhoto ? (
          <img src={labelPhoto} alt="Label Preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 4, border: '1px solid #ccc' }} />
        ) : (
          <div style={{ width: 80, height: 80, border: '1px dashed #ccc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#999' }}>No Photo</div>
        )}
      </div>
    </div>
    <Button variant="contained" onClick={handleClick} style={{ marginBottom: '20px' }}>Submit</Button>
    </Paper>
    </Container>
  );
}