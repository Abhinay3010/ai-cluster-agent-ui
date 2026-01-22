import { useState } from "react";

export default function AgentPanel() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const analyze = () => {
    // TEMP: mock response
    setOutput(
      "Agent analysis:\nThis looks like a Kubernetes-related issue. Further inspection required."
    );
  };

  return (
    <div className="panel">
      <textarea
        placeholder="Describe your cluster issue..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={analyze}>Analyze</button>
      <pre>{output}</pre>
    </div>
  );
}
