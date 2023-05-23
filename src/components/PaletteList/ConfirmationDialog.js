import { useState } from 'react';

// mui components
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { Check, Close } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';
//end of mui components

const ConfirmationDialog = ({isOpen, closeConfirmationDialog, deletePalette, id}) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    deletePalette(id);
    closeConfirmationDialog();
  }

  const handleClose = (e) => {
    e.stopPropagation();
    closeConfirmationDialog();
  }

  return(
    <Dialog open={isOpen} aria-labelledby='delete-palette-confirmation-dialog'>
        <DialogTitle id='delete-palette-confirmation-dialog'>
        Are you sure?
        </DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <Check/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' />
          </ListItem>

          <ListItem button onClick={handleClose}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                <Close/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Cancel' />
          </ListItem>
        </List>
    </Dialog>
  );
}

export default ConfirmationDialog;