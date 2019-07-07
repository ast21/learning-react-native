import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeInputUpdate, employeeSave } from '../actions';
import { Button, Card, CardSection } from "./common";

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, key) => {
      this.props.employeeInputUpdate({ key, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save
          </Button>
        </CardSection>
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
  { employeeInputUpdate, employeeSave }
)(EmployeeEdit);