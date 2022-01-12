import React from 'react';

import NumberTwoBase64 from '../components/number-two-base64';
import NumberTwoPluginImage from '../components/number-two-plugin-image';

const Page = () => {
  return (
    <main className="relative">
      <div className="min-h-full h-[500px] bg-brand-background">
        <div className="flex flex-cols mx-auto max-w-section h-full items-center justify-center">
          <NumberTwoBase64 />
          <NumberTwoPluginImage />
        </div>
      </div>
    </main>
  );
};

export default Page;
