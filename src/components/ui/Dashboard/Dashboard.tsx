import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Button, Chart, Modal } from '../../../components';
import { chartOptions } from '../../../data';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Button onClick={openModal}>Show Chart!</Button>
      </Box>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <Chart chartOptions={chartOptions} />
      </Modal>
    </>
  );
};

export default Dashboard;
