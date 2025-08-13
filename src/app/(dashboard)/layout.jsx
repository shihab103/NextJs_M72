import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 w-full">
        {/* side nav */}
        <div className="col-span-3">
            <ul>
                <li>User list</li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
