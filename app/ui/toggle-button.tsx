'use client'

import React from 'react'
import { TiThMenu } from "react-icons/ti";



type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ToogleButton({ isOpen, setIsOpen }: Props) {
  return (
    <button
      className=""
      onClick={() => setIsOpen(!isOpen)}
    >
      <TiThMenu />
    </button>
  )
}
 
