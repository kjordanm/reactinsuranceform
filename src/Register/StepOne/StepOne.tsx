import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Col, FormGroup } from 'react-bootstrap'
import './StepOne.scss';

export default function StepOne() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Col xs={12} sm={12} md={6}>

            <div className="form-container">
                <div className="form-step-one">
                    <Col xs={12} sm={12} md={9}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <div className="d-flex">
                                <Form.Group className="col-6 p-0 m-0">
                                    <Form.Control as="select" name="tipoDocumento" ref={register({ required: true })} className="selectBoxForm">
                                        <option value="dni">DNI</option>
                                    </Form.Control>
                                    <Form.Control.Feedback className="text-danger">
                                        {errors.tipoDocumento && "Seleccione un tipo de documento"}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <FormGroup className="col-6 p-0 m-0">
                                    <Form.Control type="text" placeholder="Nro de Documento" name="nroDocumento" ref={register({ required: true, maxLength: 8 })}/>
                                    <Form.Control.Feedback className="text-danger">
                                        {errors.nroDocumento && errors.nroDocumento.type === "required" && (<p>Ingrese un numero de documento valido</p>)}
                                        {errors.nroDocumento && errors.nroDocumento.type === "maxLength" && (<p>El numero de documento no debe tener mas de 8 caracteres</p>)}
                                    </Form.Control.Feedback>
                                </FormGroup>
                            </div>

                            <Form.Group>
                                <Form.Control className="mt-3 mb-3" type="date" placeholder="Fecha de nacimiento" name="fechaNacimiento" ref={register({ required: true })}/>
                                <Form.Control.Feedback className="text-danger">
                                    {errors.fechaNacimiento && "Ingrese una fecha de nacimiento valida"}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Control className="mt-3 mb-3" type="text" placeholder="Celular" name="celular" ref={register({ required: true, maxLength: 9 })}/>
                                <Form.Control.Feedback className="text-danger">
                                    {errors.celular && errors.celular.type === "required" && (<p>Ingrese un numero de celular</p>)}
                                    {errors.celular && errors.celular.type === "maxLength" && (<p>Ingrese un numero de celular valido</p>)}
                                </Form.Control.Feedback>
                            </Form.Group>

                           
                            <Form.Check 
                                type="checkbox"
                                id={`chbx-data-terms`}
                                name="aceptaPolitica"
                                ref={register}
                            >
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>
                                    {<small>Acepto la <a href="https://www.google.com">Política de Proteccion de Datos Personales y los Términos y Condiciones</a></small>}
                                </Form.Check.Label>
                            </Form.Check>
                            

                            
                            <Form.Check
                                type="checkbox"
                                id={`chbx-data-comm`}
                                name="aceptaComercial"
                                ref={register}
                            >
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label>
                                    <small>Acepto la <a href="https://www.google.com">Política de Envío de Comunicaciones Comerciales</a></small>
                                </Form.Check.Label>
                            </Form.Check>
                           
                        </Form.Group>
                        <Button variant="primary" type="submit">Comencemos</Button>{' '}
                    </Form>
                    </Col>
                </div>
            </div>
            
        </Col>
    );
};