import React, { useContext } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { appiontmentContext } from '../../context/AppointmentContext';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '40%',
    transform             : 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#root')

const AppointmentModal = ({modalIsOpen,closeModal,appointmentOn,appointmentTime}) => {
    const {selectedDate} = useContext(appiontmentContext)
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.time = appointmentTime;
        data.date = selectedDate;
        data.created = new Date();
        
        fetch('https://obscure-reaches-78019.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })

    }
    
    return (
        <Container>
            <Row>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div className="open_modal_form">
                    <h3>{appointmentOn}</h3>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Control type="name" placeholder="Your name" name="name" ref={register({ required: true })}/>
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Your email" name="email" ref={register({ required: true })}/>
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                         <Form.Control type="number" placeholder="Your Number" name="number" ref={register({ required: true })}/>
                         {errors.number && <span className="text-danger">Number is required</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control placeholder="weight" name="weight" ref={register({ required: true })}/>
                        {errors.weight && <span className="text-danger">Weight is required</span>}
                    </Form.Group>
                
                    <Form.Group className="mb-3">
                        <Form.Control as="select" defaultValue="Male" name="gender" ref={register({ required: true })}>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control  placeholder="your Age" name="age" ref={register({ required: true })}/>
                        {errors.age && <span className="text-danger">Age is required</span>}
                    </Form.Group>
                
                    <Button className="common-btn" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
            </Row>
        </Container>
    );
};

export default AppointmentModal;