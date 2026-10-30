import { brand } from '../brand'

type Props = {
  className?: string
}

export default function Wordmark({ className = '' }: Props) {
  const parts = brand.name.split('&')
  const leading = parts[0]
  const trailing = parts.slice(1).join('&')

  return (
    <span className={`wordmark ${className}`.trim()}>
      {leading}
      {parts.length > 1 && <em>&</em>}
      {trailing}
    </span>
  )
}
