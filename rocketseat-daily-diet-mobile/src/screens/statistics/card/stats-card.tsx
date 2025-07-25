import React from 'react'
import { Card } from './stats-card.style'
import { TDietStyle } from '../../../components/global.styles'

interface IStatsCardProps {
  variant: TDietStyle
  info: {
    title: string
    description: string
  }
}

export function StatsCard({
  variant,
  info: { title, description },
}: IStatsCardProps) {
  return (
    <Card.Wrapper variant={variant}>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card.Wrapper>
  )
}
