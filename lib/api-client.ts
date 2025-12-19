// In production, use absolute URLs; in development, use relative
const API_BASE = typeof window !== 'undefined'
  ? window.location.origin
  : process.env.NEXT_PUBLIC_API_BASE || ''

// Helper function for API calls
async function fetchAPI(endpoint: string, options?: RequestInit) {
  const url = `${API_BASE}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json()
}

// Menu Items
export const menuItemsAPI = {
  getAll: () => fetchAPI('/api/menu-items'),
  update: (items: any[]) =>
    fetchAPI('/api/menu-items', {
      method: 'POST',
      body: JSON.stringify(items),
    }),
}

// Hero Buttons
export const heroButtonsAPI = {
  getAll: () => fetchAPI('/api/hero-buttons'),
  update: (buttons: any[]) =>
    fetchAPI('/api/hero-buttons', {
      method: 'POST',
      body: JSON.stringify(buttons),
    }),
}

// Footer Links
export const footerLinksAPI = {
  getAll: () => fetchAPI('/api/footer-links'),
  update: (links: any[]) =>
    fetchAPI('/api/footer-links', {
      method: 'POST',
      body: JSON.stringify(links),
    }),
}

// Events
export const eventsAPI = {
  getAll: () => fetchAPI('/api/events'),
  create: (event: any) =>
    fetchAPI('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
    }),
  updateAll: (events: any[]) =>
    fetchAPI('/api/events', {
      method: 'POST',
      body: JSON.stringify(events),
    }),
}

// About Content
export const aboutAPI = {
  get: () => fetchAPI('/api/about'),
  update: (content: any) =>
    fetchAPI('/api/about', {
      method: 'POST',
      body: JSON.stringify(content),
    }),
}

// Info Cards
export const infoCardsAPI = {
  getAll: () => fetchAPI('/api/info-cards'),
  update: (cards: any[]) =>
    fetchAPI('/api/info-cards', {
      method: 'POST',
      body: JSON.stringify(cards),
    }),
}

// Contact
export const contactAPI = {
  getAll: () => fetchAPI('/api/contact'),
  update: (contacts: any[]) =>
    fetchAPI('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contacts),
    }),
}

// Images
export const imagesAPI = {
  getByCategory: (category: string) =>
    fetchAPI(`/api/images/by-category/${category}`),
  upload: async (file: File, category: string) => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('category', category)

    const response = await fetch(`${API_BASE}/api/images/upload`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to upload image')
    }

    return response.json()
  },
  delete: (id: number) =>
    fetchAPI(`/api/images/${id}`, {
      method: 'DELETE',
    }),
  reorder: (updates: { id: number; order: number }[]) =>
    fetchAPI('/api/images/reorder', {
      method: 'POST',
      body: JSON.stringify({ updates }),
    }),
}

// Footer Settings
export const footerSettingsAPI = {
  get: () => fetchAPI('/api/footer-settings'),
  update: (settings: any) =>
    fetchAPI('/api/footer-settings', {
      method: 'POST',
      body: JSON.stringify(settings),
    }),
}

// Social Links
export const socialLinksAPI = {
  getAll: () => fetchAPI('/api/social-links'),
  update: (links: any[]) =>
    fetchAPI('/api/social-links', {
      method: 'POST',
      body: JSON.stringify(links),
    }),
}

// Footer Buttons
export const footerButtonsAPI = {
  getAll: () => fetchAPI('/api/footer-buttons'),
  update: (buttons: any[]) =>
    fetchAPI('/api/footer-buttons', {
      method: 'POST',
      body: JSON.stringify(buttons),
    }),
}
