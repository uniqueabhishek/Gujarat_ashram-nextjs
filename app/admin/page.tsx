'use client'

// AdminDashboard.tsx - Complete admin panel migrated to Next.js App Router
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LogOut,
  Menu,
  Image as ImageIcon,
  Link,
  Upload,
  Calendar,
  FileText,
  Grid3x3,
  Phone,
  Trash2,
  Plus,
  X,
  MapPin,
} from "lucide-react";

import {
  menuItemsAPI,
  heroButtonsAPI,
  footerLinksAPI,
  eventsAPI,
  aboutAPI,
  infoCardsAPI,
  contactAPI,
  imagesAPI,
} from "@/lib/api-client";

// Type definitions
interface MenuItem {
  id: string;
  name: string;
  url: string;
  isSpecial?: boolean;
  variant?: string;
}

interface HeroButton {
  id: string;
  name: string;
  url: string;
  variant: string;
}

interface FooterLink {
  id: string;
  label: string;
  url: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface AboutContent {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutBadge?: string;
  aboutTitle: string;
  aboutDescription: string;
  videoUrl?: string;
  footerTitle: string;
  footerDescription: string;
}

interface InfoCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ContactInfo {
  id: string;
  type: string;
  label: string;
  value: string;
  url?: string;
}

interface Image {
  id: string;
  filename: string;
  path: string;
  category: string;
  alt?: string;
}

// Type definitions for props
interface EditorProps<T> {
  items: T[];
  setItems: React.Dispatch<React.SetStateAction<T[]>>;
}

interface AboutEditorProps {
  content: AboutContent;
  setContent: React.Dispatch<React.SetStateAction<AboutContent>>;
}

interface ImageManagerProps {
  heroImages: Image[];
  galleryImages: Image[];
  onRefresh: () => void;
  onSave: () => Promise<void>;
  imagesToDelete: Set<string>;
  setImagesToDelete: React.Dispatch<React.SetStateAction<Set<string>>>;
}

// ============================================
// MAIN ADMIN DASHBOARD COMPONENT
// ============================================

const AdminDashboard = () => {
  const router = useRouter();
  const [tab, setTab] = useState("menu");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Original content states
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [heroButtons, setHeroButtons] = useState<HeroButton[]>([]);
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);

  // New content states
  const [events, setEvents] = useState<Event[]>([]);
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    id: "default",
    heroTitle: "",
    heroSubtitle: "",
    heroDescription: "",
    aboutTitle: "",
    aboutDescription: "",
    footerTitle: "",
    footerDescription: "",
  });
  const [infoCards, setInfoCards] = useState<InfoCard[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);

  // Images
  const [heroImages, setHeroImages] = useState<Image[]>([]);
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<Set<string>>(new Set());

  // Load all data on component mount
  useEffect(() => {
    loadAllData();
  }, []);

  async function loadAllData() {
    try {
      const [
        menuData,
        heroData,
        footerData,
        eventsData,
        aboutData,
        cardsData,
        contactData,
        heroImgs,
        galleryImgs,
      ] = await Promise.all([
        menuItemsAPI.getAll(),
        heroButtonsAPI.getAll(),
        footerLinksAPI.getAll(),
        eventsAPI.getAll(),
        aboutAPI.get(),
        infoCardsAPI.getAll(),
        contactAPI.getAll(),
        imagesAPI.getByCategory("hero"),
        imagesAPI.getByCategory("gallery"),
      ]);

      setMenuItems(menuData);
      setHeroButtons(heroData);
      setFooterLinks(footerData);
      setEvents(eventsData);
      setAboutContent(aboutData);
      setInfoCards(cardsData);
      setContactInfo(contactData);
      setHeroImages(heroImgs);
      setGalleryImages(galleryImgs);
    } catch (error) {
      console.error("Failed to load data:", error);
      setMessage("Failed to load some data from server");
    }
  }

  // Save handler for current tab
  async function handleSave() {
    setLoading(true);
    setMessage("");

    try {
      let success = false;

      switch (tab) {
        case "menu":
          await menuItemsAPI.update(menuItems);
          success = true;
          break;
        case "hero":
          await heroButtonsAPI.update(heroButtons);
          success = true;
          break;
        case "footer":
          await footerLinksAPI.update(footerLinks);
          success = true;
          break;
        case "events":
          await eventsAPI.updateAll(events);
          success = true;
          break;
        case "about":
          await aboutAPI.update(aboutContent);
          success = true;
          break;
        case "cards":
          await infoCardsAPI.update(infoCards);
          success = true;
          break;
        case "contact":
          // Auto-extract iframe src if user pasted full code
          const cleanedContact = contactInfo.map(item => {
            if (item.type === 'map' && item.value.trim().startsWith('<iframe')) {
              // Extract src URL
              const srcMatch = item.value.match(/src=["']([^"']+)["']/);
              if (srcMatch && srcMatch[1]) {
                console.log("Extracted map URL:", srcMatch[1]);
                return { ...item, value: srcMatch[1] };
              }
            }
            return item;
          });

          // Update local state to show cleaned URL
          setContactInfo(cleanedContact);

          await contactAPI.update(cleanedContact);
          success = true;
          break;
        case "images":
          // Delete marked images
          if (imagesToDelete.size > 0) {
            const deletePromises = Array.from(imagesToDelete).map(id =>
              imagesAPI.delete(Number(id))
            );
            await Promise.all(deletePromises);
            setImagesToDelete(new Set());
            await loadAllData();
            success = true;
          } else {
            success = true;
          }
          break;
      }

      if (success) {
        setMessage(" Changes saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(" Failed to save changes");
      }
    } catch (error) {
      setMessage(" Error: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    // Clear localStorage authentication
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminUser");

    // Navigate to login page
    router.push("/login");
  };

  // Tab configuration
  const tabs = [
    { id: "menu", label: "Menu", icon: Menu },
    { id: "hero", label: "Hero Buttons", icon: ImageIcon },
    { id: "footer", label: "Footer", icon: Link },
    { id: "events", label: "Events", icon: Calendar },
    { id: "about", label: "About", icon: FileText },
    { id: "cards", label: "Info Cards", icon: Grid3x3 },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "images", label: "Images", icon: Upload },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Gujarat Ashram Admin
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage all website content from here
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Status Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-center ${
              message.includes("✅")
                ? "bg-green-100 text-green-700"
                : message.includes("❌")
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white p-2 rounded-lg shadow-sm border flex-wrap">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <Button
                key={t.id}
                variant={tab === t.id ? "default" : "ghost"}
                onClick={() => setTab(t.id)}
                className="flex-1 flex items-center justify-center gap-2 min-w-[120px]"
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </Button>
            );
          })}
        </div>

        {/* Content Editor Panel */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            {/* Menu Items Editor */}
            {tab === "menu" && (
              <MenuEditor items={menuItems} setItems={setMenuItems} />
            )}

            {/* Hero Buttons Editor */}
            {tab === "hero" && (
              <HeroEditor items={heroButtons} setItems={setHeroButtons} />
            )}

            {/* Footer Links Editor */}
            {tab === "footer" && (
              <FooterEditor items={footerLinks} setItems={setFooterLinks} />
            )}

            {/* Events Editor */}
            {tab === "events" && (
              <EventsEditor items={events} setItems={setEvents} />
            )}

            {/* About Content Editor */}
            {tab === "about" && (
              <AboutEditor content={aboutContent} setContent={setAboutContent} />
            )}

            {/* Info Cards Editor */}
            {tab === "cards" && (
              <InfoCardsEditor items={infoCards} setItems={setInfoCards} />
            )}

            {/* Contact Info Editor */}
            {tab === "contact" && (
              <ContactEditor items={contactInfo} setItems={setContactInfo} />
            )}

            {/* Image Manager */}
            {tab === "images" && (
              <ImageManager
                heroImages={heroImages}
                galleryImages={galleryImages}
                onRefresh={loadAllData}
                onSave={handleSave}
                imagesToDelete={imagesToDelete}
                setImagesToDelete={setImagesToDelete}
              />
            )}
          </CardContent>
        </Card>

        {/* Save Button (for all tabs) */}
        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleSave}
            disabled={loading}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// EDITOR COMPONENTS
// ============================================

// Menu Items Editor (existing)
function MenuEditor({ items, setItems }: EditorProps<MenuItem>) {
  const addItem = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: "New Menu Item",
      url: "https://",
      isSpecial: false,
      variant: "default",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: string | boolean) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Navigation Menu Items</h2>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-2 p-3 border rounded-lg bg-gray-50">
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 border rounded"
                placeholder="Menu Name"
                value={item.name}
                onChange={(e) => updateItem(idx, "name", e.target.value)}
              />
              <input
                className="flex-1 px-3 py-2 border rounded"
                placeholder="URL"
                value={item.url}
                onChange={(e) => updateItem(idx, "url", e.target.value)}
              />
              <Button
                variant="outline"
                size="default"
                onClick={() => removeItem(idx)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Special Button Toggle */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.isSpecial || false}
                  onChange={(e) => updateItem(idx, "isSpecial", e.target.checked)}
                  className="w-4 h-4 text-orange-600"
                />
                <span className="text-sm font-medium text-gray-700">
                  Display as Button
                </span>
              </label>

              {/* Show variant selector only if isSpecial is true */}
              {item.isSpecial && (
                <select
                  className="px-3 py-1.5 border rounded text-sm"
                  value={item.variant || "default"}
                  onChange={(e) => updateItem(idx, "variant", e.target.value)}
                >
                  <option value="default">Primary (Solid)</option>
                  <option value="outline">Outline (Bordered)</option>
                  <option value="ghost">Ghost (Text Only)</option>
                </select>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Menu Item
      </Button>
    </div>
  );
}

// Hero Buttons Editor (existing)
function HeroEditor({ items, setItems }: EditorProps<HeroButton>) {
  const addItem = () => {
    const newItem: HeroButton = {
      id: Date.now().toString(),
      name: "New Button",
      url: "https://",
      variant: "default",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Hero Section Buttons</h2>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              className="flex-1 px-3 py-2 border rounded"
              placeholder="Button Text"
              value={item.name}
              onChange={(e) => updateItem(idx, "name", e.target.value)}
            />
            <input
              className="flex-1 px-3 py-2 border rounded"
              placeholder="URL"
              value={item.url}
              onChange={(e) => updateItem(idx, "url", e.target.value)}
            />
            <select
              className="px-3 py-2 border rounded"
              value={item.variant}
              onChange={(e) => updateItem(idx, "variant", e.target.value)}
            >
              <option value="default">Primary</option>
              <option value="outline">Outline</option>
            </select>
            <Button
              variant="outline"
              size="default"
              onClick={() => removeItem(idx)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Hero Button
      </Button>
    </div>
  );
}

// Footer Links Editor (existing)
function FooterEditor({ items, setItems }: EditorProps<FooterLink>) {
  const addItem = () => {
    const newItem: FooterLink = {
      id: Date.now().toString(),
      label: "New Link",
      url: "https://",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Footer Contact Links</h2>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              className="flex-1 px-3 py-2 border rounded"
              placeholder="Label"
              value={item.label}
              onChange={(e) => updateItem(idx, "label", e.target.value)}
            />
            <input
              className="flex-1 px-3 py-2 border rounded"
              placeholder="URL"
              value={item.url}
              onChange={(e) => updateItem(idx, "url", e.target.value)}
            />
            <Button
              variant="outline"
              size="default"
              onClick={() => removeItem(idx)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Footer Link
      </Button>
    </div>
  );
}

// NEW: Events Editor
function EventsEditor({ items, setItems }: EditorProps<Event>) {
  const addItem = () => {
    const newItem: Event = {
      id: Date.now().toString(),
      title: "New Event",
      date: "Date TBD",
      description: "Event description here",
      buttonText: "Register Now",
      buttonUrl: "",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <p className="text-sm text-gray-600 mb-4">
        Manage events that appear on the homepage
      </p>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <Card key={idx} className="p-4">
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Event Title"
                  value={item.title}
                  onChange={(e) => updateItem(idx, "title", e.target.value)}
                />
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => removeItem(idx)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <input
                className="w-full px-3 py-2 border rounded"
                placeholder="Date (e.g., Dec 5 - Dec 7, 2025)"
                value={item.date}
                onChange={(e) => updateItem(idx, "date", e.target.value)}
              />

              <textarea
                className="w-full px-3 py-2 border rounded"
                placeholder="Event Description"
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(idx, "description", e.target.value)}
              />

              <div className="flex gap-2">
                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Button Text"
                  value={item.buttonText || "Register Now"}
                  onChange={(e) => updateItem(idx, "buttonText", e.target.value)}
                />
                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Registration URL (optional)"
                  value={item.buttonUrl || ""}
                  onChange={(e) => updateItem(idx, "buttonUrl", e.target.value)}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Event
      </Button>
    </div>
  );
}

// NEW: About Content Editor
function AboutEditor({ content, setContent }: AboutEditorProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">About & Text Content</h2>
      <p className="text-sm text-gray-600 mb-6">
        Manage all text content across the website - Hero section, About section, and Footer
      </p>

      {/* SECTION 1: Hero Section */}
      <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg">
        <h3 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
          1️⃣ Hero Section (Top of Homepage)
        </h3>
        <p className="text-sm text-orange-700 mb-4">
          This appears at the very top of your homepage with the background image
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Main Title (Line 1)
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Art of Living"
              value={content.heroTitle}
              onChange={(e) =>
                setContent({ ...content, heroTitle: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Subtitle (Line 2 - shown in amber color)
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Gujarat Ashram"
              value={content.heroSubtitle}
              onChange={(e) =>
                setContent({ ...content, heroSubtitle: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Description (Below title)
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Discover a sanctuary for inner peace..."
              rows={2}
              value={content.heroDescription}
              onChange={(e) =>
                setContent({ ...content, heroDescription: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: About / Why Visit Section */}
      <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
        <h3 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
          2️⃣ About Section ("Why Visit")
        </h3>
        <p className="text-sm text-green-700 mb-4">
          This appears in the middle of the homepage next to the gallery images
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Small Badge Text (Optional - shown in amber)
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Discover"
              value={content.aboutBadge || ""}
              onChange={(e) =>
                setContent({ ...content, aboutBadge: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Section Title
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Why Visit the Gujarat Ashram?"
              value={content.aboutTitle}
              onChange={(e) =>
                setContent({ ...content, aboutTitle: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Experience a calm environment filled with wisdom..."
              rows={4}
              value={content.aboutDescription}
              onChange={(e) =>
                setContent({ ...content, aboutDescription: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Video URL (Optional)
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="https://youtube.com/..."
              value={content.videoUrl || ""}
              onChange={(e) =>
                setContent({ ...content, videoUrl: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: Footer Section */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-lg text-blue-900 mb-2 flex items-center gap-2">
          3️⃣ Footer Section (Bottom of Page)
        </h3>
        <p className="text-sm text-blue-700 mb-4">
          This appears at the bottom of every page in the footer area
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Footer Title
            </label>
            <input
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="Gujarat Ashram"
              value={content.footerTitle}
              onChange={(e) =>
                setContent({ ...content, footerTitle: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Footer Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded bg-white"
              placeholder="A sanctuary for peace, meditation, and spiritual growth..."
              rows={3}
              value={content.footerDescription}
              onChange={(e) =>
                setContent({ ...content, footerDescription: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// NEW: Info Cards Editor
function InfoCardsEditor({ items, setItems }: EditorProps<InfoCard>) {
  const addItem = () => {
    const newItem: InfoCard = {
      id: Date.now().toString(),
      title: "New Feature",
      description: "Description here",
      icon: "Home",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const iconOptions = [
    "Home",
    "Users",
    "MapPin",
    "Calendar",
    "Heart",
    "Star",
    "Sun",
    "Moon",
    "Mountain",
    "Trees",
    "Flower",
    "Coffee",
    "ImageIcon",
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Info Cards / Facilities</h2>
      <p className="text-sm text-gray-600 mb-4">
        Manage the feature cards that appear on the homepage. Colors auto-assign in rotation: Orange → Green → Blue.
      </p>

      {/* Add color preview indicator */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          Card Colors
        </h3>
        <p className="text-sm text-blue-800">
          Cards automatically cycle through colors:
          <span className="inline-flex gap-2 ml-2 mt-1 flex-wrap">
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">1st - Orange</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">2nd - Green</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">3rd - Blue</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">4th - Orange</span>
            <span className="text-xs text-blue-700">etc...</span>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <Card key={idx} className="p-4">
            <div className="space-y-3">
              <div className="flex gap-2">
                <select
                  className="px-3 py-2 border rounded"
                  value={item.icon}
                  onChange={(e) => updateItem(idx, "icon", e.target.value)}
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Card Title"
                  value={item.title}
                  onChange={(e) => updateItem(idx, "title", e.target.value)}
                />
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => removeItem(idx)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <textarea
                className="w-full px-3 py-2 border rounded"
                placeholder="Card Description"
                rows={2}
                value={item.description}
                onChange={(e) =>
                  updateItem(idx, "description", e.target.value)
                }
              />
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full">
        <Plus className="w-4 h-4 mr-2" /> Add Info Card
      </Button>
    </div>
  );
}

// NEW: Contact Info Editor
function ContactEditor({ items, setItems }: EditorProps<ContactInfo>) {
  // Separate Map item from others
  const mapItem = items.find(i => i.type === 'map');
  const otherItems = items.filter(i => i.type !== 'map');

  const addMap = () => {
    if (mapItem) return;
    const newMap: ContactInfo = {
      id: Date.now().toString(),
      type: "map",
      label: "Map Location",
      value: "", // Homepage reads 'value' for iframe src
      url: "",
    };
    setItems([newMap, ...items]);
  };

  const addItem = () => {
    const newItem: ContactInfo = {
      id: Date.now().toString(),
      type: "phone",
      label: "New Contact",
      value: "",
      url: "",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const updateItem = (id: string, field: string, value: string) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const typeOptions = [
    { value: "phone", label: "Phone", color: "bg-blue-100 text-blue-800" },
    { value: "whatsapp", label: "WhatsApp", color: "bg-green-100 text-green-800" },
    { value: "email", label: "Email", color: "bg-rose-100 text-rose-800" },
    { value: "website", label: "Website", color: "bg-violet-100 text-violet-800" },
    { value: "address", label: "Address", color: "bg-gray-100 text-gray-800" },
    { value: "other", label: "Other", color: "bg-gray-100 text-gray-800" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      {/* 1. Map Section */}
      <div className="mb-8 p-4 bg-slate-50 border rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <MapPin className="w-5 h-5 text-ashram-clay" />
            Location Map
          </h3>
          {!mapItem && (
            <Button size="sm" onClick={addMap} className="bg-ashram-clay text-white">
              Enable Map
            </Button>
          )}
        </div>

        {mapItem ? (
          <div className="space-y-3">
             <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-blue-900">
               <strong className="block mb-1">How to get this link:</strong>
               <ol className="list-decimal list-inside space-y-1 ml-1 text-blue-800">
                 <li>Go to Google Maps and search for your location</li>
                 <li>Click the <strong>Share</strong> button</li>
                 <li>Select the <strong>Embed a map</strong> tab</li>
                 <li>Click <strong>Copy HTML</strong></li>
                 <li>Paste the full code below (we will protectively extract just the source URL automatically on save, or you can paste just the URL inside src="...").</li>
               </ol>
             </div>

             <p className="text-sm text-gray-500 font-medium">
               Paste Google Maps Embed Source URL:
             </p>
             <div className="flex gap-2">
                <input
                  className="flex-1 px-3 py-2 border rounded font-mono text-sm"
                  placeholder="https://www.google.com/maps/embed?..."
                  value={mapItem.value}
                  onChange={(e) => updateItem(mapItem.id, "value", e.target.value)}
                />
                <Button variant="outline" onClick={() => removeItem(mapItem.id)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
             </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">No map configured. Click 'Enable Map' to add one.</p>
        )}
      </div>

      {/* 2. Contact Channels */}
      <h3 className="font-semibold mb-3">Contact Channels</h3>
      <div className="space-y-3">
        {otherItems.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex gap-2">
                 <select
                  className="px-3 py-2 border rounded w-1/3"
                  value={item.type}
                  onChange={(e) => updateItem(item.id, "type", e.target.value)}
                >
                  {typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>

                {/* Color Hint */}
                {(() => {
                   const opt = typeOptions.find(o => o.value === item.type);
                   return opt ? (
                     <div className={`px-3 py-2 rounded text-xs font-semibold flex items-center ${opt.color}`}>
                       {opt.label} Color
                     </div>
                   ) : null;
                })()}

                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Label (e.g. Office)"
                  value={item.label}
                  onChange={(e) => updateItem(item.id, "label", e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <input
                  className="flex-1 px-3 py-2 border rounded"
                  placeholder="Display Value (e.g. +91 999...)"
                  value={item.value}
                  onChange={(e) => updateItem(item.id, "value", e.target.value)}
                />

                {item.type !== 'address' && (
                  <input
                    className="flex-1 px-3 py-2 border rounded"
                    placeholder="Action URL (tel:, mailto:)"
                    value={item.url || ""}
                    onChange={(e) => updateItem(item.id, "url", e.target.value)}
                  />
                )}

                <Button
                  variant="outline"
                  size="default"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={addItem} variant="outline" className="mt-4 w-full border-dashed">
        <Plus className="w-4 h-4 mr-2" /> Add Channel
      </Button>
    </div>
  );
}

// Image Manager (Enhanced with preview modal, delete marking, and save functionality)
function ImageManager({
  heroImages,
  galleryImages,
  onRefresh,
  imagesToDelete,
  setImagesToDelete,
}: ImageManagerProps) {
  const [uploading, setUploading] = useState(false);
  const heroFileInputRef = useRef<HTMLInputElement>(null);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  // Image preview modal state
  const [previewImage, setPreviewImage] = useState<{ url: string; filename: string } | null>(null);

  // Get API base URL for image paths
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3000';

  // Handle file selection and upload immediately
  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    console.log(`File selected: ${file.name}, Size: ${file.size}, Type: ${file.type}, Category: ${category}`);

    // Check image limit (15 images per category)
    const currentImages = category === "hero" ? heroImages : galleryImages;
    if (currentImages.length >= 15) {
      alert(`Maximum limit of 15 images reached for ${category} category. Please delete some images first.`);
      // Reset file input
      event.target.value = "";
      return;
    }

    setUploading(true);
    try {
      console.log("Starting upload...");
      const uploaded = await imagesAPI.upload(file, category);
      console.log("Upload response:", uploaded);

      if (uploaded) {
        console.log("Upload successful, refreshing images...");
        // Refresh images
        onRefresh();
        // Reset file input
        event.target.value = "";
        alert("Image uploaded successfully!");
      } else {
        console.error("Upload returned null/false");
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Failed to upload image: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setUploading(false);
    }
  };

  // Mark/unmark image for deletion
  const toggleDeleteMark = (id: string) => {
    setImagesToDelete(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Image Management</h2>

      {/* Hero Images */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Hero Slider Images</h3>
          <span className="text-sm text-gray-600">
            {heroImages.length} / 15 images
          </span>
        </div>

        {/* Existing Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {heroImages.map((img) => {
            const isMarkedForDelete = imagesToDelete.has(img.id);
            return (
              <div
                key={img.id}
                className={`relative group cursor-pointer ${isMarkedForDelete ? 'opacity-50' : ''}`}
                onClick={() => setPreviewImage({ url: `${API_BASE}${img.path}`, filename: img.filename })}
              >
                <img
                  src={`${API_BASE}${img.path}`}
                  alt={img.alt || "Hero image"}
                  className={`w-full h-48 object-cover rounded-lg border-2 transition-all ${
                    isMarkedForDelete
                      ? 'border-red-500 grayscale'
                      : 'border-gray-200 group-hover:border-orange-400'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg" />

                {/* Delete X button */}
                <button
                  className={`absolute top-2 right-2 transition-opacity z-10 rounded-md px-2 py-1 text-white font-medium ${
                    isMarkedForDelete
                      ? 'opacity-100 bg-green-600 hover:bg-green-700'
                      : 'opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDeleteMark(img.id);
                  }}
                >
                  {isMarkedForDelete ? (
                    <span className="text-xs">Undo</span>
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                </button>

                {/* Filename overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {isMarkedForDelete && <span className="text-red-400 font-semibold">MARKED FOR DELETE - </span>}
                  {img.filename}
                </div>
              </div>
            );
          })}
        </div>

        {heroImages.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">No hero images uploaded yet</p>
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-4">
          <input
            ref={heroFileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "hero")}
            disabled={uploading}
            className="hidden"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              console.log("Hero upload button clicked");
              console.log("Hero file input ref:", heroFileInputRef.current);
              if (heroFileInputRef.current) {
                heroFileInputRef.current.click();
                console.log("File input click triggered");
              } else {
                console.error("Hero file input ref is null");
              }
            }}
            disabled={uploading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? "Uploading..." : "Add Hero Image"}
          </Button>
        </div>
      </div>

      {/* Gallery Images */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Gallery Images</h3>
          <span className="text-sm text-gray-600">
            {galleryImages.length} / 15 images
          </span>
        </div>

        {/* Existing Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {galleryImages.map((img) => {
            const isMarkedForDelete = imagesToDelete.has(img.id);
            return (
              <div
                key={img.id}
                className={`relative group cursor-pointer ${isMarkedForDelete ? 'opacity-50' : ''}`}
                onClick={() => setPreviewImage({ url: `${API_BASE}${img.path}`, filename: img.filename })}
              >
                <img
                  src={`${API_BASE}${img.path}`}
                  alt={img.alt || "Gallery image"}
                  className={`w-full h-48 object-cover rounded-lg border-2 transition-all ${
                    isMarkedForDelete
                      ? 'border-red-500 grayscale'
                      : 'border-gray-200 group-hover:border-orange-400'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg" />

                {/* Delete X button */}
                <button
                  className={`absolute top-2 right-2 transition-opacity z-10 rounded-md px-2 py-1 text-white font-medium ${
                    isMarkedForDelete
                      ? 'opacity-100 bg-green-600 hover:bg-green-700'
                      : 'opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDeleteMark(img.id);
                  }}
                >
                  {isMarkedForDelete ? (
                    <span className="text-xs">Undo</span>
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                </button>

                {/* Filename overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded opacity-opacity-0 group-hover:opacity-100 transition-opacity">
                  {isMarkedForDelete && <span className="text-red-400 font-semibold">MARKED FOR DELETE - </span>}
                  {img.filename}
                </div>
              </div>
            );
          })}
        </div>

        {galleryImages.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">No gallery images uploaded yet</p>
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-4">
          <input
            ref={galleryFileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "gallery")}
            disabled={uploading}
            className="hidden"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              console.log("Gallery upload button clicked");
              console.log("Gallery file input ref:", galleryFileInputRef.current);
              if (galleryFileInputRef.current) {
                galleryFileInputRef.current.click();
                console.log("File input click triggered");
              } else {
                console.error("Gallery file input ref is null");
              }
            }}
            disabled={uploading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? "Uploading..." : "Add Gallery Image"}
          </Button>
        </div>
      </div>

      {/* Pending Changes Indicator */}
      {imagesToDelete.size > 0 && (
        <div className="mt-6 p-3 bg-amber-50 border-2 border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            ⚠️ {imagesToDelete.size} image(s) marked for deletion. Click "Save Changes" button below to confirm.
          </p>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setPreviewImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={previewImage.url}
              alt={previewImage.filename}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white text-sm">
              {previewImage.filename}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
