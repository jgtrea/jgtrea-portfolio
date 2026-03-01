import React from 'react';

// Content Container
const Layout = () => {
  return (
    <main className="flex-1 w-full overflow-x-hidden overflow-y-auto flex flex-col">
      <div className="w-full flex flex-col items-center justify-center">        
        <div className="mx-auto w-full @container max-w-[1200px] px-4 @lg:px-6 @xl:px-10">        
          <>
            <h1>Hello World</h1>
          </>
        </div>
      </div>
    </main>
  );
};

export default Layout;