import React, { useEffect } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Prism from 'prismjs';

type CodeProps = {
    node: CodeNodeProps & BlockNodeProps;
};

type CodeNodeProps = {
    language: string;
    code: string;
};

type BlockNodeProps = {
    children: any;
};

export const serializers = {
    types: {
        block: ({ node }: CodeProps) => {
            return node.children.map((c: any, i: number) => <span key={i}>{c.text}</span>);
        },
        code: ({ node }: CodeProps) => {
            useEffect(() => {
                Prism.highlightAll();
            }, []);
            return (
                <pre style={{ borderRadius: 4 }}>
                    <code className={`language-${node.language}`}>{node.code}</code>
                </pre>
            );
        },
    },
};
