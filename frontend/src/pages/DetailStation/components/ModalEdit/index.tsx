import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { EditIcon } from '@/components/Icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { editStationValidationSchema } from '@/validations/station';

const initialValues = {
  threshold: '',
};

interface ModalEditProp {
  itemID: string;
}

const ModalEdit: React.FC<ModalEditProp> = ({ itemID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditDevice = () => {
    console.log('EDIT DEVICE: ', itemID);
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
        className="flex items-center justify-center"
      >
        <div className="">
          <Formik
            initialValues={initialValues}
            onSubmit={handleEditDevice}
            validationSchema={editStationValidationSchema}
          >
            {(formik) => (
              <Form className="bg-white p-4 rounded" onSubmit={formik.handleSubmit}>
                <h2 id="modal-modal-title" className="text-center text-[#4285F4] font-bold text-xl">
                  CẬP NHẬT TRẠM NƯỚC
                </h2>
                <div id="modal-modal-description" className="modal-edit-device__desc">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="threshold">Ngưỡng tiêu thụ</label>
                    <Field
                      id="threshold"
                      name="threshold"
                      type="number"
                      placeholder="Nhập ngưỡng tiêu thụ..."
                      className={` rounded ${
                        formik.errors.threshold && formik.touched.threshold ? 'border-red-600' : ''
                      }`}
                    />
                    <ErrorMessage name="threshold" component="span" className="error-msg text-red-600" />
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      className="bg-gray-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                      onClick={handleClose}
                    >
                      HỦY
                    </button>
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                      type="submit"
                      onClick={handleEditDevice}
                    >
                      LƯU
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ModalEdit;
