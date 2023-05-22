import React from 'react';
import { Button } from "flowbite-react";

interface Props {
  onClick: () => void;
}

function FixedButton({ onClick }: Props) {
  return (
    <Button className="fixed-button" gradientMonochrome="info" onClick={onClick}>
      Refresh Balance
    </Button>
  );
}

export default FixedButton;