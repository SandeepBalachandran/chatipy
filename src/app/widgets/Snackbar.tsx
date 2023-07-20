
import * as React from 'react';
import {
  Button,
  CloseIcon,
  IconButton,
  Snackbar,
} from '../../helpers/MatImports';

type props = {
  snackBarStatus: boolean;
  onSnackBarClose: (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => void;
  hideDuration: number;
  message: string;
};
export default function SimpleSnackbar(props: props) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    props.onSnackBarClose(event, reason);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={props.snackBarStatus}
        autoHideDuration={props.hideDuration}
        onClose={handleClose}
        message={props.message}
        action={action}
      />
    </div>
  );
}



