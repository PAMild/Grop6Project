import React from 'react';
import { Button } from "flowbite-react";
import styles from "../styles/style"; 

interface Props {
  onClick: () => void;
}

function FixedButton({ onClick }: Props) {
  return (
    <Button className="fixed-button text2-gradient" onClick={onClick}>
    Refresh Balance
    </Button>
  );
}

export default FixedButton;