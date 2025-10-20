/**
 * Notion API integration for blog posts
 * Handles fetching and caching Notion content
 */

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import MarkdownIt from 'markdown-it';

// Initialize Notion client (not used directly, but required for markdown converter)
const notion = new Client({ 
  auth: 'dummy' // Not used since we proxy through server/Vercel API
});

// Initialize markdown converter
const n2m = new NotionToMarkdown({ notionClient: notion });
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export interface NotionPage {
  id: string;
  title: string;
  content: string;
  lastEditedTime: string;
  url: string;
}

// Cache for Notion content to avoid repeated API calls
const notionCache = new Map<string, { data: NotionPage; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch Notion page content by page ID
 */
export async function fetchNotionPage(pageId: string): Promise<NotionPage> {
  // Check cache first
  const cached = notionCache.get(pageId);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    console.log(`Serving Notion page ${pageId} from cache`);
    return cached.data;
  }

  try {
    // Fetch page from Notion via API route (works in both dev and production)
    console.log('Fetching page from Notion API...');
    const apiUrl = `/api/notion/pageId?pageId=${pageId}`;
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const notionPage: NotionPage = await response.json();
    console.log('Page retrieved successfully via proxy:', { pageId, title: notionPage.title });

    // Cache the result
    notionCache.set(pageId, {
      data: notionPage,
      timestamp: Date.now()
    });

    console.log(`Successfully fetched Notion page ${pageId}`);
    return notionPage;
  } catch (error) {
    console.error(`Error fetching Notion page ${pageId}:`, error);
    
    // Fallback to mock data on error
    console.log('Falling back to mock data due to error');
    return getMockNotionPage(pageId);
  }
}

/**
 * Extract title from Notion page
 */
function extractPageTitle(page: any): string {
  if (page.properties?.title?.title?.[0]?.plain_text) {
    return page.properties.title.title[0].plain_text;
  }
  if (page.properties?.Name?.title?.[0]?.plain_text) {
    return page.properties.Name.title[0].plain_text;
  }
  return 'Untitled';
}

/**
 * Get mock Notion page data as fallback
 */
function getMockNotionPage(pageId: string): NotionPage {
  const mockData: NotionPage = {
    id: pageId,
    title: 'Chroniques Birmanes',
    content: `
      <div class="notion-content">
        <h1>Chroniques Birmanes</h1>
        <p><em>Un voyage à travers le Myanmar</em></p>
        
        <h2>Introduction</h2>
        <p>Ce blog raconte mon voyage au Myanmar, un pays fascinant où tradition et modernité se rencontrent.</p>
        
        <h2>Les Temples de Bagan</h2>
        <p>Les milliers de temples de Bagan offrent un spectacle inoubliable au lever du soleil.</p>
        
        <h2>La Culture Locale</h2>
        <p>Rencontrer les habitants du Myanmar a été l'une des expériences les plus enrichissantes de mon voyage.</p>
        
        <h2>Conclusion</h2>
        <p>Le Myanmar reste un pays mystérieux et captivant, à découvrir absolument.</p>
        
        <div class="notion-fallback-notice" style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0; color: #0369a1; font-size: 14px;">
            <strong>Note:</strong> This content is using mock data. To see real Notion content, please add your Notion API token to the environment variables.
          </p>
        </div>
      </div>
    `,
    lastEditedTime: new Date().toISOString(),
    url: `https://broad-hawthorn-853.notion.site/Chroniques-Birmanes-${pageId}`
  };

  // Cache the mock data
  notionCache.set(pageId, {
    data: mockData,
    timestamp: Date.now()
  });

  return mockData;
}


/**
 * Get cache statistics
 */
export function getNotionCacheStats() {
  return {
    size: notionCache.size,
    entries: Array.from(notionCache.keys())
  };
}

/**
 * Clear Notion cache (useful for development)
 */
export function clearNotionCache(): void {
  notionCache.clear();
}
