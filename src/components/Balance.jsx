import { useBalance } from "wagmi";

const Balance = ({ address }) => {
  const { data, isError, isLoading, error } = useBalance({
    address,
  });

  if (isLoading) return <div>Fetching balance...</div>;
  if (isError){
    console.log(`Error fetching balance for ${address}:`, error, );
    return <div>Error fetching balance</div>
  };
  return (
    <div className="message-status">
      Balance: {data?.formatted || ""} {data?.symbol || ""}
    </div>
  );
};

export default Balance;
