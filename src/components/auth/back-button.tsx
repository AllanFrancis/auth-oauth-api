"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button asChild className="font-normal w-full" size="sm" variant="link">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;