import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const logoImg = "/images/vectorstock_25468861/vectorstock_25468861.png";

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3} mb={2}>
            Amirul Asraf
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
