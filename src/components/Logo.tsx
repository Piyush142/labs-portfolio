type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <img
      src="/2469logo.svg"
      alt="2469 Labs"
      className={className}
      width={113}
      height={45}
      decoding="async"
    />
  )
}
