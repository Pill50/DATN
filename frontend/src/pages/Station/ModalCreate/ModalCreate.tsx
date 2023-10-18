import * as React from 'react';
import './ModalCreate.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';

export default function ModalCreateStation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateStation = () => {
    console.log('CREATE NEW STATION');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} style={{ height: 40 }}>
        <AddIcon />
        CREATE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-create"
      >
        <div className="modal-create__box">
          <h2 id="modal-modal-title" className="modal-create__title">
            CREATE NEW STATION
          </h2>
          <div id="modal-modal-description" className="modal-create__desc">
            <div className="modal-create__row">
              <div className="modal-create__group">
                <label htmlFor="name">Name of station</label>
                <input id="name" type="text" placeholder="Station's name" />
              </div>
              <div className="modal-create__group">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Address" />
              </div>
            </div>
            <div className="modal-create__row">
              <div className="modal-create__group">
                <label htmlFor="device">Number of devices</label>
                <input id="device" type="number" defaultValue={1} />
              </div>
              <div className="modal-create__group">
                <label htmlFor="Total water">Total water flow per month (m3)</label>
                <input id="Total water" type="number" defaultValue={1000} />
              </div>
            </div>
            <div className="modal-create__action">
              <button className="modal-create__btn modal-create__action-cancel" onClick={handleClose}>
                CANCEL
              </button>
              <button className="modal-create__btn modal-create__action-create" onClick={handleCreateStation}>
                CREATE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
