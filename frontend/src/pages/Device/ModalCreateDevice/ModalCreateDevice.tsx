import * as React from 'react';
import './ModalCreateDevice.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';

export default function ModalCreateDevice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateArea = () => {
    console.log('CREATE NEW DEVICE');
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
        className="modal"
      >
        <div className="modal__box">
          <h2 id="modal-modal-title" className="modal__title">
            CREATE NEW DEVICE
          </h2>
          <div id="modal-modal-description" className="modal__desc">
            <div className="modal__row">
              <div className="modal__group">
                <label htmlFor="name">Name of device</label>
                <input id="name" type="text" placeholder="Device's name" />
              </div>
              <div className="modal__group">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Address" />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__group">
                <label htmlFor="resident">Number of residents</label>
                <input id="resident" type="number" defaultValue={1} />
              </div>
              <div className="modal__group">
                <label htmlFor="waterSource">Water supply source</label>
                <input id="waterSource" type="text" />
              </div>
            </div>
            <div className="modal__action">
              <button className="modal__btn modal__action-cancel" onClick={handleClose}>
                CANCEL
              </button>
              <button className="modal__btn modal__action-create" onClick={handleCreateArea}>
                CREATE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
