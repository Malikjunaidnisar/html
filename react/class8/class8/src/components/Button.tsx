
interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline'
  }
  
  const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
  }) => {
    const baseClasses =
      'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none'
  
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    }
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </button>
    )
  }
  
  export default Button