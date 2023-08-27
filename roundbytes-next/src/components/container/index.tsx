import { ReactNode } from "react"

interface IContainerProps {
  className?: string
  children: ReactNode
}

const Container = ({ className = '', children }: IContainerProps) => {
  return (
    <div className={`py-64 px-[10%] pb-20 ${className}`}>
      {children}
    </div>
  )
}

export default Container