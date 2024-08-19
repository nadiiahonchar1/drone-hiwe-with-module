import LoginForm from '../admin/components/LoginForm/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';
import LogOutButton from './components/LogOutButton/LogOutButton';
import ChangPasswordForm from './components/ChangPasswordForm/ChangPasswordForm';

export default function Admin() {
  return (
    <>
      <Wrapper>
        <LoginForm />
        <ChangPasswordForm />
        <LogOutButton />
      </Wrapper>
    </>
  );
}
