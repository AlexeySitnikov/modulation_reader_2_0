/* eslint-disable import/no-mutable-exports */
/* eslint-disable react/function-component-definition */
// import React from 'react'
import { DownloadFile } from '../DownloadFile/DownloadFile'

export function Header({ setSelectedFile }) {
  return <DownloadFile setSelectedFile={setSelectedFile} />
}
