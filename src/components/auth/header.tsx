import React from "react";

interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 py-0 items-center justify-center">
      <h1 className="text-3xl font-semibold">Tatame PRO</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;