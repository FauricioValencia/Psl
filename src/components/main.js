import React, { Component } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
   } from 'reactstrap';
import Modal from './Modal'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lines: [],
            end: false
        };
    }

    onChange({ target: { value } }) {
        if (/^(([0-9]|10)|([0-9]|10),[0-9]*)$/.test(value) || value === '') {
            this.setState({ value });
        }
    }

    generator(e) {
        e.preventDefault()
        e.stopPropagation()

        var { lines, value } = this.state

        if (/^0.0*$/.test(value)) {
           
            if (this.state.lines.length) {
                //return 
                this.setState({ end: true })
            } else {
                return 
                alert('debe ingresar al menos una linea antes de cerrar el programa')
            }
        }

        lines.push(value)
        this.setState({ lines, value: '' })
    }

    render() {
        var { value, lines, end } = this.state;
        return end ? (
            <div className="main-app">
                <Modal nameButton="Presioname" lines={lines}/>
                <br/>
                <Button color="success" onClick={() => this.setState({ end: false, lines: [], value: '' })} >volver</Button>{' '}
                
            </div>
        ) : (
                <div className="main-app">
                    <div style={{ paddingBottom: '2rem' }}>
                    <p className="text-warning"> Ingrese las lineas en convencion [tamaño(0-10)],[numero] submit <br />
                        Ingrese 0,0 submit para terminar </p>
                    </div>
                    {
                        lines.map((line, i) => (<div key={i}>
                            <div>{line}</div>
                        </div>))
                    }
                    <form onSubmit={e => this.generator(e)}>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend" type="submit"><Button className="btn btn-danger float-right">Enviar</Button></InputGroupAddon>
                    <Input value={value} type="text" onChange={e => this.onChange(e)} />
                    </InputGroup>
                    </form>
                </div>
            );
    }
}