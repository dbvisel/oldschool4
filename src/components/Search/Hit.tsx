import Link from "next/link";

interface ResourceRecord {
  title: string;
  slug: string;
}

const Hit = ({ hit }: { hit: any }) => {
  // console.log(hit);
  return (
    <div>
      <p>
        <Link href={`/resource/${hit.slug}`}>{hit.title}</Link>
      </p>
    </div>
  );
};

export default Hit;
