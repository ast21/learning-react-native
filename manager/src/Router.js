import React from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>

        <Stack key="auth">
          <Scene key="login" component={LoginForm} title="Please login" />
        </Stack>

        <Stack key="main"  >
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Create"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Stack>

      </Stack>
    </Router>
  )
};

export default RouterComponent;