/**
 * IndexNow integration for instant search engine indexing
 * Supports Bing, Yandex, and other IndexNow-enabled search engines
 */

const INDEX_NOW_KEY = 'aac83d34e32f4453b25bd5627098ae7c'
const INDEX_NOW_HOST = 'queue-tech.jp'
const INDEX_NOW_KEY_LOCATION = `https://${INDEX_NOW_HOST}/${INDEX_NOW_KEY}.txt`

interface IndexNowResponse {
  success: boolean
  statusCode?: number
  error?: string
}

/**
 * Submit URLs to IndexNow for instant indexing
 * @param urls Array of URLs to submit for indexing
 * @returns Promise with the result of the submission
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return { success: true }
  }

  // Filter to only include URLs from our domain
  const validUrls = urls.filter(url => url.includes(INDEX_NOW_HOST))

  if (validUrls.length === 0) {
    return { success: true }
  }

  const payload = {
    host: INDEX_NOW_HOST,
    key: INDEX_NOW_KEY,
    keyLocation: INDEX_NOW_KEY_LOCATION,
    urlList: validUrls,
  }

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok || response.status === 200) {
      console.log(`IndexNow: Successfully submitted ${validUrls.length} URL(s) for indexing`)
      return { success: true, statusCode: response.status }
    }

    // Handle specific error codes
    switch (response.status) {
      case 400:
        return { success: false, statusCode: 400, error: 'Invalid format' }
      case 403:
        return { success: false, statusCode: 403, error: 'Key not valid' }
      case 422:
        return { success: false, statusCode: 422, error: 'URLs do not belong to the host or key mismatch' }
      case 429:
        return { success: false, statusCode: 429, error: 'Too many requests' }
      default:
        return { success: false, statusCode: response.status, error: `Unexpected status: ${response.status}` }
    }
  } catch (error) {
    console.error('IndexNow submission failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    }
  }
}

/**
 * Generate full URLs for a blog post in both Japanese and English
 * @param postSlug The post's slug
 * @param hubSlug Optional hub slug
 * @param subHubSlug Optional sub-hub slug
 * @returns Array of full URLs for the post
 */
export function generatePostUrls(
  postSlug: string,
  hubSlug?: string | null,
  subHubSlug?: string | null
): string[] {
  const baseUrl = `https://${INDEX_NOW_HOST}`
  const urls: string[] = []

  if (hubSlug && subHubSlug) {
    // Sub-hub post
    urls.push(`${baseUrl}/blog/${hubSlug}/${subHubSlug}/${postSlug}`)
    urls.push(`${baseUrl}/en/blog/${hubSlug}/${subHubSlug}/${postSlug}`)
  } else if (hubSlug) {
    // Hub post
    urls.push(`${baseUrl}/blog/${hubSlug}/${postSlug}`)
    urls.push(`${baseUrl}/en/blog/${hubSlug}/${postSlug}`)
  } else {
    // Standalone post
    urls.push(`${baseUrl}/blog/${postSlug}`)
    urls.push(`${baseUrl}/en/blog/${postSlug}`)
  }

  // Also include the main blog pages since they list posts
  urls.push(`${baseUrl}/blog`)
  urls.push(`${baseUrl}/en/blog`)

  return urls
}

/**
 * Generate full URLs for a blog hub in both Japanese and English
 * @param hubSlug The hub's slug
 * @returns Array of full URLs for the hub
 */
export function generateHubUrls(hubSlug: string): string[] {
  const baseUrl = `https://${INDEX_NOW_HOST}`
  return [
    `${baseUrl}/blog/${hubSlug}`,
    `${baseUrl}/en/blog/${hubSlug}`,
    `${baseUrl}/blog`,
    `${baseUrl}/en/blog`,
  ]
}

/**
 * Generate full URLs for a blog sub-hub in both Japanese and English
 * @param hubSlug The parent hub's slug
 * @param subHubSlug The sub-hub's slug
 * @returns Array of full URLs for the sub-hub
 */
export function generateSubHubUrls(hubSlug: string, subHubSlug: string): string[] {
  const baseUrl = `https://${INDEX_NOW_HOST}`
  return [
    `${baseUrl}/blog/${hubSlug}/${subHubSlug}`,
    `${baseUrl}/en/blog/${hubSlug}/${subHubSlug}`,
    `${baseUrl}/blog/${hubSlug}`,
    `${baseUrl}/en/blog/${hubSlug}`,
    `${baseUrl}/blog`,
    `${baseUrl}/en/blog`,
  ]
}

/**
 * Submit a single URL for indexing (convenience function)
 * @param url The URL to submit
 * @returns Promise with the result of the submission
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResponse> {
  return submitToIndexNow([url])
}
