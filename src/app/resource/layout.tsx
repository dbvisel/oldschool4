export default function ResourceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<div className="resourcelayout">
			<h4>This is coming from resource layout</h4>
			{children}
		</div>
  );
}
