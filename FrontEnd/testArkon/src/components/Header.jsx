import { Outlet } from "react-router-dom";
import { Container } from '@mui/system';
const Header = () => {
  return (
    <Container>
      Header
      <Outlet />
    </Container>
  );
};

export default Header;
