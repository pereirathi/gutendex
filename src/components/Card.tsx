import * as S from './styles'
import React from 'react'

interface CardProps {
  id: string
  children: React.ReactNode
}

export const Card = ({ id, children }: CardProps) => {
  return <S.Card id={id}>{children}</S.Card>
}
