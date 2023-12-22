type Children = React.ReactNode;

const DetailPageLayout = ({ children }: { children: Children }) => {
  return (
    <div className="min-h-screen">
      <h1>layout from Parent</h1>
      <section>{children}</section>
    </div>
  );
};

export default DetailPageLayout;
