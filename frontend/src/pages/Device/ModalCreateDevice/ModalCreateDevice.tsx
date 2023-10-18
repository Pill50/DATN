import * as React from 'react';
import './ModalCreateDevice.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';
import SelectOption from '@/components/SelectOption/SelectOption';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createDeviceValidationSchema } from '@/validations/device';
import { CreateNewDeviceType } from '@/types/device';

const initialValues: CreateNewDeviceType = {
  address: '',
  addressOfStation: '',
};

const addressSupplyDevice = ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5'];

export default function ModalCreateDevice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateWaterMeter = () => {
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleCreateWaterMeter}
            validationSchema={createDeviceValidationSchema}
          >
            {(formik) => (
              <Form className="" onSubmit={formik.handleSubmit}>
                <h2 id="modal-modal-title" className="modal__title">
                  CREATE NEW DEVICE
                </h2>
                <div id="modal-modal-description" className="modal__desc">
                  <div className="modal__group">
                    <label htmlFor="device_address">Address of device</label>
                    <Field
                      id="device_address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      className={`${formik.errors.address && formik.touched.address ? 'border-error' : ''}`}
                    />
                    <ErrorMessage name="address" component="span" className="error-msg" />
                  </div>
                  <div className="modal__group">
                    <label htmlFor="supply_address">Address of station</label>
                    <SelectOption label="Adress of station" options={addressSupplyDevice} />
                  </div>
                  <div className="modal__action">
                    <button className="modal__btn modal__action-cancel" onClick={handleClose}>
                      CANCEL
                    </button>
                    <button className="modal__btn modal__action-create" type="submit">
                      CREATE
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
}
