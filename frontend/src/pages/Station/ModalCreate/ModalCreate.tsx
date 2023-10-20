import * as React from 'react';
import './ModalCreate.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Modal from '@mui/material/Modal';
import { AddIcon } from '@/components/Icons';
import { createStationValidationSchema } from '@/validations/station';
import { CreateNewStationType } from '@/types/station';
import Button from '@/components/Button';

const initialValues: CreateNewStationType = {
  address: '',
  numOfDevices: 0,
  totalWaterSupply: 0,
};

const ModalCreateStation: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateStation = () => {
    console.log('CREATE NEW STATION');
    setOpen(false);
  };

  return (
    <div>
      <Button primary onClick={handleOpen} leftIcon={<AddIcon />} small>
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
          <Formik
            initialValues={initialValues}
            onSubmit={handleCreateStation}
            validationSchema={createStationValidationSchema}
          >
            {(formik) => (
              <Form className="" onSubmit={formik.handleSubmit}>
                <h2 id="modal-modal-title" className="modal-create__title">
                  CREATE NEW STATION
                </h2>
                <div id="modal-modal-description" className="modal-create__desc">
                  <div className="modal-create__group">
                    <label htmlFor="address">Address</label>
                    <Field
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      className={`${formik.errors.address && formik.touched.address ? 'border-error' : ''}`}
                    />
                    <ErrorMessage name="address" component="span" className="error-msg" />
                  </div>
                  <div className="modal-create__group">
                    <label htmlFor="numOfDevices">Number of devices</label>
                    <Field
                      id="numOfDevices"
                      name="numOfDevices"
                      type="text"
                      placeholder="Enter your numOfDevices"
                      className={`${formik.errors.numOfDevices && formik.touched.numOfDevices ? 'border-error' : ''}`}
                    />
                    <ErrorMessage name="numOfDevices" component="span" className="error-msg" />
                  </div>
                  <div className="modal-create__group">
                    <label htmlFor="Total water">Total water flow per month (m3)</label>
                    <Field
                      id="Total water"
                      name="totalWaterSupply"
                      type="text"
                      placeholder="Enter total water supply"
                      className={`${
                        formik.errors.totalWaterSupply && formik.touched.totalWaterSupply ? 'border-error' : ''
                      }`}
                    />
                    <ErrorMessage name="totalWaterSupply" component="span" className="error-msg" />
                  </div>
                  <div className="modal-create__action">
                    <Button outline onClick={handleClose}>
                      CANCEL
                    </Button>
                    <Button type="submit" primary>
                      CREATE
                    </Button>
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

export default ModalCreateStation;
