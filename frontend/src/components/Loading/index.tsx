import { FC } from 'react';

const Loading: FC = () => {
  return (
    <>
      <div className="fixed z-50 w-full h-full top-0 left-0 flex flex-col items-center justify-center bg-black/20">
        <div className="loading loading-spinner text-title w-20 h-20"></div>
        <span className="text-3xl font-bold text-title animate-pulse">Waiting...</span>
      </div>
    </>
  );
};

export default Loading;
