import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { type BilingualText } from '@/lib/types';

interface MarkdownContentProps {
    content: BilingualText;
    language: 'en' | 'zh';
    className?: string;
}

export default function MarkdownContent({ content, language, className = '' }: MarkdownContentProps) {
    const text = content[language];

    return (
        <div className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Custom styling for markdown elements
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-6 first:mt-0">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-5">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4">
                            {children}
                        </h3>
                    ),
                    p: ({ children }) => (
                        <p className="mb-6 leading-relaxed">
                            {children}
                        </p>
                    ),
                    br: () => (
                        <br className="mb-2" />
                    ),
                    strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900 dark:text-white">
                            {children}
                        </strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic text-gray-800 dark:text-gray-200">
                            {children}
                        </em>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc list-outside mb-4 space-y-1 pl-4">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-outside mb-4 space-y-1 pl-4">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className="leading-relaxed">
                            {children}
                        </li>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 italic text-gray-700 dark:text-gray-300">
                            {children}
                        </blockquote>
                    ),
                    code: ({ children }) => (
                        <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono">
                            {children}
                        </code>
                    ),
                    pre: ({ children }) => (
                        <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 whitespace-pre-wrap break-words">
                            {children}
                        </pre>
                    ),
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),
                    hr: () => (
                        <hr className="my-6 border-gray-300 dark:border-gray-600" />
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto mb-4">
                            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                                {children}
                            </table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {children}
                        </td>
                    ),
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    );
}
