import React from 'react';

function Navbar({ children }: { childrenren: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 py-4 bg-[#092032] px-4">
      {children}
      <h2 className="text-lg font-black text-white">NgPad</h2>
    </div>
  );
}

export default Navbar;
