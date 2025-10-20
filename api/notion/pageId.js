import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pageId } = req.query;
    
    if (!pageId) {
      return res.status(400).json({ error: 'Page ID is required' });
    }
    
    // Check if Notion token is available
    if (!process.env.NOTION_TOKEN) {
      return res.status(503).json({
        error: 'Notion API not configured',
        message: 'NOTION_TOKEN environment variable is not set. Please configure your Notion integration token in Vercel environment variables.'
      });
    }
    
    console.log(`Fetching Notion page: ${pageId}`);
    
    // Fetch page from Notion
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    // Extract title
    let title = 'Untitled';
    if (page.properties?.title?.title?.[0]?.plain_text) {
      title = page.properties.title.title[0].plain_text;
    } else if (page.properties?.Name?.title?.[0]?.plain_text) {
      title = page.properties.Name.title[0].plain_text;
    }
    
    // Get last edited time
    const lastEditedTime = 'last_edited_time' in page ? page.last_edited_time : new Date();
    
    // Fetch the page blocks for content
    const blocks = await notion.blocks.children.list({ block_id: pageId });
    
    // Convert blocks to HTML content
    let htmlContent = `<div class="notion-content">`;
    htmlContent += `<h1>${title}</h1>`;
    
    // Process each block
    for (const block of blocks.results) {
      if (block.type === 'paragraph' && block.paragraph?.rich_text) {
        const text = block.paragraph.rich_text.map(t => t.plain_text).join('');
        if (text.trim()) {
          htmlContent += `<p>${text}</p>`;
        }
      } else if (block.type === 'heading_1' && block.heading_1?.rich_text) {
        const text = block.heading_1.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<h2>${text}</h2>`;
      } else if (block.type === 'heading_2' && block.heading_2?.rich_text) {
        const text = block.heading_2.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<h3>${text}</h3>`;
      } else if (block.type === 'heading_3' && block.heading_3?.rich_text) {
        const text = block.heading_3.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<h4>${text}</h4>`;
      } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item?.rich_text) {
        const text = block.bulleted_list_item.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<li>${text}</li>`;
      } else if (block.type === 'numbered_list_item' && block.numbered_list_item?.rich_text) {
        const text = block.numbered_list_item.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<li>${text}</li>`;
      } else if (block.type === 'quote' && block.quote?.rich_text) {
        const text = block.quote.rich_text.map(t => t.plain_text).join('');
        htmlContent += `<blockquote>${text}</blockquote>`;
      } else if (block.type === 'code' && block.code?.rich_text) {
        const text = block.code.rich_text.map(t => t.plain_text).join('');
        const language = block.code.language || '';
        htmlContent += `<pre><code class="language-${language}">${text}</code></pre>`;
      } else if (block.type === 'image' && block.image) {
        const imageUrl = block.image.type === 'external' 
          ? block.image.external.url 
          : block.image.file?.url;
        const caption = block.image.caption?.map(t => t.plain_text).join('') || '';
        htmlContent += `<figure><img src="${imageUrl}" alt="${caption}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;" /><figcaption style="text-align: center; font-style: italic; color: #666; font-size: 14px;">${caption}</figcaption></figure>`;
      } else if (block.type === 'divider') {
        htmlContent += `<hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />`;
      } else if (block.type === 'callout' && block.callout?.rich_text) {
        const text = block.callout.rich_text.map(t => t.plain_text).join('');
        const icon = block.callout.icon?.emoji || '💡';
        htmlContent += `<div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; margin: 16px 0; border-radius: 0 8px 8px 0;"><div style="display: flex; align-items: flex-start;"><span style="margin-right: 8px; font-size: 18px;">${icon}</span><div>${text}</div></div></div>`;
      }
    }
    
    htmlContent += `</div>`;
    
    res.json({
      id: pageId,
      title,
      content: htmlContent,
      lastEditedTime: typeof lastEditedTime === 'string' ? lastEditedTime : lastEditedTime.toISOString(),
      url: `https://broad-hawthorn-853.notion.site/Chroniques-Birmanes-${pageId}`
    });
    
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Notion content',
      message: error.message 
    });
  }
}
