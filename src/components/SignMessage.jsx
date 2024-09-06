import { useState } from "react";
import { useSignMessage } from "wagmi";

const SignMessage = () => {
  const [message, setMessage] = useState("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    signMessage({ message: message });
    setMessage("");
  };

  return (
    <div>
      <form className="wallet-action-container" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
        />
        <button className="secondary-button" disabled={isLoading} type="submit">
          Sign message
        </button>
      </form>
      {isSuccess && <div className="message-status">Signature: {data}</div>}
      {isError && <div className="message-status">Error signing message</div>}
    </div>
  );
};

export default SignMessage;
