"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CodeBlock } from "react-code-block";

function MyCodeBlock({ code, language }: { code: string; language: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyCode = () => {
    // Logic to copy `code`
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <CodeBlock code={code} language={language}>
      <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl text-xs">
        <div className="table-row">
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
      <Button
        className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white"
        radius="sm"
        onClick={copyCode}
      >
        {isCopied ? "Copied!" : "Copy code"}
      </Button>
    </CodeBlock>
  );
}

export default MyCodeBlock;
