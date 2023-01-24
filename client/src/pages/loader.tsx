interface LoaderProps {
  isLoading: boolean
  onTransitionEnd: VoidFunction
}

const Loader = ({ isLoading, onTransitionEnd }: LoaderProps) => {
  return (
    <div
      className={`loader ${!isLoading ? 'hidden-styles' : ''}`}
      id="loader"
    ></div>
  )
}

export default Loader
