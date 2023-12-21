type Children = React.ReactElement;

const DetailPageLayout = ({ children }: { children: Children }) => {
  return (
    <div>
      <h1>hello</h1>
      <div>{children}</div>
    </div>
  );
};

export default DetailPageLayout;
