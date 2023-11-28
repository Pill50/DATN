import * as React from 'react';
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
      <button
        className="flex justify-center items-center p-2 rounded bg-[#DB4437] text-white hover:opacity-90"
        onClick={handleOpen}
      >
        <DeleteIcon />
        XÓA
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded">
          <h2 id="modal-modal-title" className="text-center text-[#DB4437] font-bold text-xl">
            XÁC NHẬN
          </h2>
          <div id="modal-modal-description" className="modal-delete__desc">
            <p>Bạn thực sự muốn xóa phần tử này?</p>
            <div className="flex justify-end mt-2">
              <button
                type="button"
                className=" bg-gray-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                HỦY
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
                onClick={handleDeleteItem}
              >
                XÓA
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDelete;
