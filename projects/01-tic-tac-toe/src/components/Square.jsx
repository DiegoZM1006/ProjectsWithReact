export const Square = ({children, isSelected, updateBoard, style, index }) => {
    const className = `${style} ${isSelected ? 'text-[#fff] bg-[#2ff]' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }