import Link from "next/link";

const Hit = ({ hit }) => {
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
