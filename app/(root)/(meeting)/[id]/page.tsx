'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';



import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '@/components/Alert';


const MeetingPage = () => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);




  return (
    <main className="h-screen w-full">
        <StreamTheme>

        {!isSetupComplete ? (
'Meeting Setup'
) : (
'Metting room'
)}
        </StreamTheme>
    </main>
  );
};

export default MeetingPage;