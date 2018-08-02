import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LCDView from './LCDView'
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.nameButton}</Button>
        <Modal size="lg" isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LCD RENDER</ModalHeader>
          <ModalBody>
          <LCDView lines={this.props.lines} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;