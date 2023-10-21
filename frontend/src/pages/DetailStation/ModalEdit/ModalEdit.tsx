import * as React from 'react';
import './ModalEdit.scss';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { EditIcon } from '@/components/Icons';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { editStationValidationSchema } from '@/validations/station';
import { EditStationType } from '@/types/station';

const initialValues: EditStationType = {
  address: '',
  installationAt: '',
  threshold: 0,
};
interface ModalEditStationProp {
  stationID: string;
}

const ModalEditStation: React.FC<ModalEditStationProp> = ({ stationID }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditStation = () => {
    console.log('EDIT STATION: ', stationID);
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
        className="modal-edit"
      >
        <div className="modal-edit-device__box">
          <Formik
            initialValues={initialValues}
            onSubmit={handleEditStation}
            validationSchema={editStationValidationSchema}
          >
            {(formik) => (
              <Form className="" onSubmit={formik.handleSubmit}>
                <h2 id="modal-modal-title" className="modal-edit__title">
                  EDIT STATION INFORMATION
                </h2>
                <div id="modal-modal-description" className="modal-edit__desc">
                  <div className="modal-edit__group">
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
                  <div className="modal-edit__group">
                    <label htmlFor="device">Installation at:</label>
                    <Field
                      id="installationAt"
                      name="installationAt"
                      type="date"
                      placeholder="Enter your installationAt"
                      className={`${
                        formik.errors.installationAt && formik.touched.installationAt ? 'border-error' : ''
                      }`}
                    />
                    <ErrorMessage name="installationAt" component="span" className="error-msg" />
                  </div>
                  <div className="modal-edit__group">
                    <label htmlFor="threshold">Threshold per month (m3)</label>
                    <Field
                      id="threshold"
                      name="threshold"
                      type="number"
                      placeholder="Enter your threshold"
                      className={`${formik.errors.threshold && formik.touched.threshold ? 'border-error' : ''}`}
                    />
                    <ErrorMessage name="threshold" component="span" className="error-msg" />
                  </div>
                  <div className="modal-edit__action">
                    <button className="modal-edit__btn modal-edit__action-cancel" onClick={handleClose}>
                      CANCEL
                    </button>
                    <button className="modal-edit__btn modal-edit__action-submit" type="submit">
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

export default ModalEditStation;
