export default function ResourceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="resourcelayout">{children}</div>;
}
