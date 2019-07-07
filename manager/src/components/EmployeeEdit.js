import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeInputUpdate, employeeSave, employeeDelete } from '../actions';
import { Button, Card, CardSection, Confirm } from "./common";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, key) => {
      this.props.employeeInputUpdate({ key, value });
    });
  }

  onButtonPress = () => {
    const { phone, shift } = this.props;
    Communications.textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`);
  };

  onTextPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  };

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });

  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.onAccept()}
          onDecline={() => this.onDecline()}
        >
          Are you sure you want to delete this?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeInputUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);