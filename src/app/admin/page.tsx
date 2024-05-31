import LoginForm from '../admin/components/LoginForm/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';
import LogOutButton from './components/LogOutButton/LogOutButton';
export default function Admin() {
  return (
    <>
      <Wrapper>
        <LoginForm />
        <LogOutButton />
      </Wrapper>
    </>
  );
}
