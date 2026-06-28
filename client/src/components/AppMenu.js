import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 200 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Add Product</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Remove Product</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Configure</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Customize</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}