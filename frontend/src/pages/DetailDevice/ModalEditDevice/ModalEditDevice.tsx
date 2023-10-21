import * as React from 'react';
import './ModalEditDevice.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { EditIcon } from '@/components/Icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { editStationValidationSchema } from '@/validations/station';

const initialValues = {
  address: '',
};

interface ModalEditDeviceProp {
  deviceID: string;
}

const ModalEditDevice: React.FC<ModalEditDeviceProp> = ({ deviceID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditDevice = () => {
    console.log('EDIT DEVICE: ', deviceID);
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
        className="modal-edit-device"
      >
        <div className="modal-edit-device__box">
          <Formik
            initialValues={initialValues}
            onSubmit={handleEditDevice}
            validationSchema={editStationValidationSchema}
          >
            {(formik) => (
              <Form className="" onSubmit={formik.handleSubmit}>
                <h2 id="modal-modal-title" className="modal-edit-device__title">
                  EDIT DEVICE ADDRESS
                </h2>
                <div id="modal-modal-description" className="modal-edit-device__desc">
                  <div className="modal-edit-device__group">
                    <label htmlFor="address">Address:</label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      className={`${formik.errors.address && formik.touched.address ? 'border-error' : ''}`}
                    />
                    <ErrorMessage name="address" component="span" className="error-msg" />
                  </div>
                  <div className="modal-edit-device__action">
                    <button className="modal-edit-device__btn modal-edit-device__action-cancel" onClick={handleClose}>
                      CANCEL
                    </button>
                    <button className="modal-edit-device__btn modal-edit-device__action-submit" type="submit">
                      EDIT
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

export default ModalEditDevice;
