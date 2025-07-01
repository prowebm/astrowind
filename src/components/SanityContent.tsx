import { PortableText } from '@portabletext/react';

export default function SanityContent({ value }: { value: any }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <PortableText value={value} />
    </div>
  );
}
