import Spinner from './components/ui/spinner'

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    </div>
  )
}
