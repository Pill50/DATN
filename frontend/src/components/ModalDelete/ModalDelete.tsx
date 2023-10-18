import * as React from 'react';
import './ModalDelete.scss';
import Modal from '@mui/material/Modal';
import { DeleteIcon } from '@/components/Icons';

interface ModalEditStationProp {
  itemID: string;
}

const ModalDelete: React.FC<ModalEditStationProp> = ({ itemID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteItem = () => {
    console.log('DELTE ITEM: ', itemID);
    setOpen(false);
  };

  return (
    <div>
      <button className="deleteBtn" onClick={handleOpen}>
        <DeleteIcon />
        DELETE
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-delete"
      >
        <div className="modal-delete__box">
          <h2 id="modal-modal-title" className="modal-delete__title">
            ARE YOU SURE?
          </h2>
          <div id="modal-modal-description" className="modal-delete__desc">
            <p>Do you really want to delete this item?</p>
            <div className="modal-delete__action">
              <button className="modal-delete__btn modal-delete__action-cancel" onClick={handleClose}>
                CANCEL
              </button>
              <button className="modal-delete__btn modal-delete__action-delete" onClick={handleDeleteItem}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDelete;
