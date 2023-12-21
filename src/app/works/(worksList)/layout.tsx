type Children = React.ReactElement;

const DetailPageLayout = ({ children }: { children: Children }) => {
  return (
    <div className="min-h-screen">
      <h1>layout from Parent</h1>
      <div>{children}</div>
    </div>
  );
};

export default DetailPageLayout;
