import * as React from 'react';
import './ModalCreateDevice.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';
import SelectOption from '@/components/SelectOption/SelectOption';

const addressSupplyDevice = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];

export default function ModalCreateDevice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateArea = () => {
    console.log('CREATE NEW WATER METER');
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
            <div className="modal__group">
              <label htmlFor="supply_address">Address of device</label>
              <input id="supply_address" type="text" placeholder="Address of device supply" />
            </div>
            <div className="modal__group">
              <label>Address of device</label>
              <SelectOption label="Adress" options={addressSupplyDevice} />
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
