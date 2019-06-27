export const onChangeEmail = (email) =>  {
  return {
    type: 'ON_CHANGE_EMAIL',
    payload: email
  };
};