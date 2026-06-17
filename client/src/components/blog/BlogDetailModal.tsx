import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { getBilingualText } from "@/lib/utils";
import { type Language } from "@/lib/types";
import { type BlogPost, BLOG_POST_TYPES, getBlogPostSlug } from "@/lib/blog";
import BlogDetailComposer from "@/components/blog/BlogDetailComposer";
import { useNavigate } from "react-router-dom";

interface BlogDetailModalProps {
    post: BlogPost;
    isOpen: boolean;
    onClose: () => void;
    language: Language;
}

export default function BlogDetailModal({
    post,
    isOpen,
    onClose,
    language
}: BlogDetailModalProps) {
    const navigate = useNavigate();

    const handleViewFullPage = () => {
        const slug = getBlogPostSlug(post.id);
        onClose(); // Close modal first
        navigate(`/blog/${slug}`);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-7xl max-h-[95vh] w-[95vw] p-0 flex flex-col">
                {/* Header - Fixed */}
                <div className="flex items-center justify-between p-6 border-b bg-white dark:bg-gray-900 flex-shrink-0 sticky top-0 z-10">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        {/* Post Type Badge */}
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${post.type === BLOG_POST_TYPES.static
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600'
                            : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-600'
                            }`}>
                            {post.type === BLOG_POST_TYPES.static ? 'Static Post' : 'Notion Post'}
                        </div>

                        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white truncate">
                            {getBilingualText(post.title, language)}
                        </DialogTitle>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleViewFullPage}
                            className="hover-elevate"
                        >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {getBilingualText({ en: 'View Full Page', zh: '查看完整页面' }, language)}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onClose}
                            className="p-2"
                            aria-label={getBilingualText({ en: 'Close modal', zh: '关闭弹窗' }, language)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 min-h-0">
                    <div className="max-w-6xl mx-auto p-6">
                        <DialogDescription className="sr-only">
                            {getBilingualText(post.excerpt, language)}
                        </DialogDescription>
                        <BlogDetailComposer
                            post={post}
                            language={language}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
