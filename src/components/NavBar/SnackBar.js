import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SnackBar ({format, setShowSnackbar, showSnackbar}) {

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return(
    <div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message={`${format} selected`.toUpperCase()}
        action={action}
      />
    </div>
  )
}