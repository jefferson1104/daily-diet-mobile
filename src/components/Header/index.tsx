import logoImage from '@assets/logo.png';
import avatarImage from '@assets/avatar.png';

import { Avatar, Container, Logo } from "./styles";

export function Header() {
  // Renders
  return (
    <Container>
      <Logo source={logoImage} />
      <Avatar source={avatarImage} />
    </Container>
  )
}
