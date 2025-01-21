'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bir Hata Oluştu
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.
        </p>
        <div className="space-x-4">
          <Button
            onClick={reset}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Tekrar Dene
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    </div>
  );
} 