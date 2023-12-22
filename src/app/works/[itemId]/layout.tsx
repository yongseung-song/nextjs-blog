type Children = React.ReactNode;

const DetailPageLayout = ({ children }: { children: Children }) => {
  return (
    <div>
      <h1>hello</h1>
      <section>{children}</section>
    </div>
  );
};

export default DetailPageLayout;
