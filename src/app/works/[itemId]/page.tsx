type Props = {
  params: { itemId: string };
};

const DetailPage = (props: Props) => {
  const { params } = props;
  const { itemId } = params;
  console.log(props);
  return (
    <div>
      <p>{itemId}</p>
    </div>
  );
};

export default DetailPage;
