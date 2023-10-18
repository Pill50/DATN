import * as React from 'react';
import './ModalEdit.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { EditIcon } from '@/components/Icons';

interface ModalEditStationProp {
  stationID: string;
}

const ModalEditStation: React.FC<ModalEditStationProp> = ({ stationID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditStation = () => {
    console.log('EDIT STATION: ', stationID);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} style={{ height: 40, fontSize: 16, color: '#fff' }}>
        <EditIcon />
        EDIT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-edit"
      >
        <div className="modal-edit__box">
          <h2 id="modal-modal-title" className="modal-edit__title">
            EDIT STATION INFORMATION
          </h2>
          <div id="modal-modal-description" className="modal-edit__desc">
            <div className="modal-edit__group">
              <label htmlFor="address">Address:</label>
              <input id="address" type="text" placeholder="Address" />
            </div>
            <div className="modal-edit__group">
              <label htmlFor="device">Installation at:</label>
              <input id="device" type="date" defaultValue={1} />
            </div>
            <div className="modal-edit__group">
              <label htmlFor="threshold">Threshold per month (m3)</label>
              <input id="threshold" type="number" defaultValue={1000} />
            </div>

            <div className="modal-edit__action">
              <button className="modal-edit__btn modal-edit__action-cancel" onClick={handleClose}>
                CANCEL
              </button>
              <button className="modal-edit__btn modal-edit__action-create" onClick={handleEditStation}>
                EDIT
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEditStation;
