import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function AlertInfo({
  infoAlert,
  setInfoAlert,
}: {
  infoAlert: string;
  setInfoAlert: (text: string) => void;
}) {
  return (
    infoAlert ? (
      <div style={{ zIndex: 10 }}>
        <Snackbar
          open={infoAlert !== ''}
          onClose={(e) => setInfoAlert('')}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Alert
            severity="error"
            variant="filled"
            style={{ borderRadius: '8px', backgroundColor: '#ED9491', color: '#fff' }}
          >
            {infoAlert}
          </Alert>
        </Snackbar>
      </div>
    ) : <></>
  );
}
