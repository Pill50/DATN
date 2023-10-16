import * as React from 'react';
import './ModalCreate.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateArea = () => {
    console.log('CREATE NEW AREA');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
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
            CREATE NEW AREA
          </h2>
          <div id="modal-modal-description" className="modal__desc">
            <div className="modal__row">
              <div className="modal__group">
                <label htmlFor="name">Name of area</label>
                <input id="name" type="text" placeholder="Area's name" />
              </div>
              <div className="modal__group">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="Address" />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__group">
                <label htmlFor="device">Number of devices</label>
                <input id="device" type="number" defaultValue={1} />
              </div>
              <div className="modal__group">
                <label htmlFor="Total water">Total water flow per month (m3)</label>
                <input id="Total water" type="number" defaultValue={1000} />
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
