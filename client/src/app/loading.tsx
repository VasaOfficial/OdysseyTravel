import Spinner from './components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 z-50'>
      <div className='flex items-center justify-center'>
        <Spinner />
      </div>
    </div>
  );
}