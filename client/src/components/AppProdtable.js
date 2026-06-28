import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

export default function AppMainProductList() {
    const [Products, setProducts] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    const handleImageClick = (imgSrc, type) => {
        setSelectedImage(imgSrc);
        setDialogTitle(type);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedImage('');
    };

    const fetchProducts = () => {
        fetch("http://localhost:8080/warranty/getall")
        .then(res => res.json())
        .then((result) => {
            setProducts(result);
            console.log("Fetched products: ", result);
        })
        .catch(err => console.error("Error fetching products: ", err));
    };

    useEffect(() => {
        fetchProducts();
        
        // Polling to keep list updated
        const interval = setInterval(fetchProducts, 3000);
        return () => clearInterval(interval);
    }, []);

    const columns = [
      { field: 'id', headerName: 'Product ID', width: 90 },
      { field: 'name', headerName: 'Product Name', width: 200 },
      { field: 'description', headerName: 'Description', width: 180 },
      { field: 'productPurchaseDate', headerName: 'Purchase Date', width: 140 },
      { field: 'warrantyPurchaseDate', headerName: 'Warranty Start', width: 140 },
      { field: 'warrantyExpiryDate', headerName: 'Warranty Expiry', width: 140 },
      {
        field: 'packagePhoto',
        headerName: 'Package Photo',
        width: 130,
        renderCell: (params) => {
          return params.value ? (
            <img
              src={params.value}
              alt="Package"
              style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
              onClick={() => handleImageClick(params.value, 'Package Photo')}
            />
          ) : (
            <span style={{ color: '#aaa', fontSize: '12px' }}>No Photo</span>
          );
        }
      },
      {
        field: 'labelPhoto',
        headerName: 'Label Photo',
        width: 130,
        renderCell: (params) => {
          return params.value ? (
            <img
              src={params.value}
              alt="Label"
              style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
              onClick={() => handleImageClick(params.value, 'Label Photo')}
            />
          ) : (
            <span style={{ color: '#aaa', fontSize: '12px' }}>No Photo</span>
          );
        }
      },
      {
        field: 'warrantyStatus',
        headerName: 'Warranty Status',
        width: 160,
        renderCell: (params) => {
          const expiryStr = params.row.warrantyExpiryDate;
          if (!expiryStr) return 'N/A';
          
          const parts = expiryStr.split('/');
          if (parts.length !== 3) return 'Invalid Date';
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          const expiryDate = new Date(year, month, day);
          
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          expiryDate.setHours(0, 0, 0, 0);
          
          const isUnderWarranty = expiryDate >= today;
          return (
            <span style={{
              color: isUnderWarranty ? '#2e7d32' : '#d32f2f',
              fontWeight: 'bold',
              backgroundColor: isUnderWarranty ? '#e8f5e9' : '#ffebee',
              padding: '6px 12px',
              borderRadius: '4px',
              display: 'inline-block',
              fontSize: '13px'
            }}>
              {isUnderWarranty ? 'Under Warranty' : 'Expired'}
            </span>
          );
        }
      }
    ];

    return (
      <div style={{ height: 400, width: '100%', padding: '20px 0' }}>
        <DataGrid
          rows={Products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          rowHeight={50}
        />

        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
          <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{dialogTitle}</span>
            <Button onClick={handleCloseDialog} color="secondary" variant="outlined" size="small">Close</Button>
          </DialogTitle>
          <DialogContent style={{ textAlign: 'center', minWidth: '300px', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={selectedImage} alt={dialogTitle} style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
          </DialogContent>
        </Dialog>
      </div>
    );
}