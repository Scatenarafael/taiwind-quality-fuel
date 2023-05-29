import React, { ReactNode } from 'react'
import { MarkerEngine } from './MarkerEngine';

interface IMarkerInterfaeProps {
    map: any;
    position: any;
    children: ReactNode;
}

export function Marker({map, position, children}: IMarkerInterfaeProps) {
  return (
    <MarkerEngine map={map} position={position}>{children}</MarkerEngine>
  )
}
