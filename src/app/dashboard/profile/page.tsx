'use client';

import { useEffect } from "react";

export default function ProfilePage() {
    useEffect(() => {
        console.log('Client Side');
    }, []);
    return (
    <div>
      <h1>Hello Page Profile</h1>
    </div>
  );
}