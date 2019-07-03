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

        <Stack key="main" initial >
          <Scene
            onRight={() => Actions.EmployeeCreate()}
            rightTitle="Create"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
          <Scene key="EmployeeCreate" component={EmployeeCreate} title="Create Employee" initial />
        </Stack>

      </Stack>
    </Router>
  )
};

export default RouterComponent;