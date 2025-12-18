'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Navigation as NavigationIcon, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { aboutAPI, infoCardsAPI, eventsAPI, menuItemsAPI, heroButtonsAPI, imagesAPI, contactAPI } from '@/lib/api-client'
import { getIconComponent } from '@/lib/iconMapping'

export default function HomePage() {
  const [aboutContent, setAboutContent] = useState<any>(null)
  const [infoCards, setInfoCards] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [menuItems, setMenuItems] = useState<any[]>([])
  const [heroButtons, setHeroButtons] = useState<any[]>([])
  const [heroImages, setHeroImages] = useState<any[]>([])
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [contactInfo, setContactInfo] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    loadContent()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const loadContent = async () => {
    try {
      const [about, cards, eventsData, menu, hero, heroImgs, galleryImgs, contact] = await Promise.all([
        aboutAPI.get(),
        infoCardsAPI.getAll(),
        eventsAPI.getAll(),
        menuItemsAPI.getAll(),
        heroButtonsAPI.getAll(),
        imagesAPI.getByCategory('hero'),
        imagesAPI.getByCategory('gallery'),
        contactAPI.getAll(),
      ])

      setAboutContent(about)
      setInfoCards(cards)
      setEvents(eventsData)
      setMenuItems(menu)
      setHeroButtons(hero)
      setHeroImages(heroImgs)
      setGalleryImages(galleryImgs)
      setContactInfo(contact)
    } catch (error) {
      console.error('Error loading content:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ashram-sand">
        <div className="text-2xl text-ashram-clay">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ashram-sand">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-ashram-clay' : 'text-white'}`}>
            Gujarat Ashram
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item, i) => {
              if (item.isSpecial) {
                let buttonVariant: 'default' | 'outline' | 'ghost' = 'default'
                let buttonClassName = ''

                if (item.variant === 'outline') {
                  buttonVariant = 'outline'
                  buttonClassName = isScrolled
                    ? 'border-ashram-stone text-ashram-stone hover:bg-ashram-stone hover:text-white'
                    : 'border-white/40 text-white hover:bg-white hover:text-ashram-clay'
                } else if (item.variant === 'ghost') {
                  buttonVariant = 'ghost'
                  buttonClassName = isScrolled
                    ? 'text-ashram-stone hover:bg-ashram-stone/10'
                    : 'text-white hover:bg-white/10'
                } else {
                  buttonClassName = isScrolled
                    ? 'bg-ashram-amber hover:bg-ashram-amber/90 text-white'
                    : 'bg-white text-ashram-clay hover:bg-white/90'
                }

                return (
                  <Button
                    key={i}
                    variant={buttonVariant}
                    className={buttonClassName}
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    {item.name}
                  </Button>
                )
              }

              return (
                <button
                  key={i}
                  className={`text-sm font-medium tracking-wide hover:text-ashram-amber transition-colors ${
                    isScrolled ? 'text-ashram-stone' : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => window.open(item.url, '_blank')}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-ashram-stone' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-ashram-stone' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-ashram-sand absolute w-full shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {menuItems.map((item, i) => {
                  if (item.isSpecial) {
                    return (
                      <Button
                        key={i}
                        variant={item.variant === 'outline' ? 'outline' : item.variant === 'ghost' ? 'ghost' : 'default'}
                        className="w-full"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        {item.name}
                      </Button>
                    )
                  }

                  return (
                    <button
                      key={i}
                      className="text-left text-ashram-stone hover:text-ashram-amber transition-colors py-2"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Image Carousel */}
      <header className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.length > 0 ? (
            <Swiper
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={false}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop
              className="h-full w-full"
            >
              {heroImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${img.path})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ashram-clay to-ashram-stone">
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="font-serif font-bold text-white mb-6 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {aboutContent?.heroTitle || 'Art of Living'} <br />
              <span className="italic text-ashram-amber">{aboutContent?.heroSubtitle || 'Gujarat Ashram'}</span>
            </motion.h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {aboutContent?.heroDescription || 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.'}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {heroButtons.map((button, i) => {
                let variant: 'default' | 'outline' | 'ghost' = 'default'
                let className = ''

                if (button.variant === 'outline') {
                  variant = 'outline'
                  className = 'border-white/40 text-white hover:bg-white hover:text-ashram-clay'
                } else if (button.variant === 'ghost') {
                  variant = 'ghost'
                  className = 'text-white hover:bg-white/10'
                } else {
                  variant = 'default'
                  className = 'bg-ashram-amber hover:bg-ashram-amber/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all'
                }

                return (
                  <Button
                    key={i}
                    variant={variant}
                    size="lg"
                    className={className}
                    onClick={() => window.open(button.url, '_blank')}
                  >
                    {button.name}
                  </Button>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Info Cards Section */}
      {infoCards.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-ashram-clay mb-12 text-center font-serif">
              Our Offerings
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {infoCards.map((card) => {
                const IconComponent = getIconComponent(card.icon)
                return (
                  <div
                    key={card.id}
                    className="p-6 rounded-lg border-2 border-ashram-amber/20 bg-ashram-sand/50 hover:border-ashram-amber/40 transition-colors"
                  >
                    <div className="mb-4">
                      <IconComponent className="w-12 h-12 text-ashram-amber" />
                    </div>
                    <h3 className="text-2xl font-bold text-ashram-clay mb-3">
                      {card.title}
                    </h3>
                    <p className="text-ashram-stone">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why Visit Section with Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ashram-amber font-medium tracking-wider uppercase text-sm">
              {aboutContent?.aboutBadge || "Discover"}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ashram-clay mt-2 mb-6">
              {aboutContent?.aboutTitle || "Why Visit the Gujarat Ashram?"}
            </h2>
            <p className="text-ashram-stone/70 text-lg leading-relaxed mb-8">
              {aboutContent?.aboutDescription || "Experience a calm environment filled with wisdom and transformative meditation practices. Our programs are designed for all levels, from beginners to advanced practitioners, providing a path to inner silence and outer dynamism."}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.path})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      {events.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-ashram-clay mb-12 text-center font-serif">
              Upcoming Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-6 rounded-lg border-2 border-ashram-amber/20"
                >
                  <h3 className="text-2xl font-bold text-ashram-clay mb-2">
                    {event.title}
                  </h3>
                  <p className="text-ashram-amber mb-3">{event.date}</p>
                  <p className="text-ashram-stone">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-ashram-clay mb-12 text-center font-serif">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${img.path})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Get in Touch */}
      {contactInfo.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Gallery Grid - Same as Why Visit section */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]"
                >
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${img.path})` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Modern Location Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-ashram-sand/30 to-white shadow-2xl border border-ashram-amber/20">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-ashram-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100/50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-br from-ashram-amber to-orange-400 rounded-2xl shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-ashram-clay">Get in Touch</h3>
                      <p className="text-ashram-stone/60 text-sm mt-1">We're here to help you on your journey</p>
                    </div>
                  </div>

                  {/* Address Section - Enhanced */}
                  {contactInfo.filter((info) => info.type === "address").map((address) => (
                    <motion.div
                      key={address.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-ashram-amber/10 hover:border-ashram-amber/30 transition-all hover:shadow-lg group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl group-hover:scale-110 transition-transform">
                          <NavigationIcon className="w-6 h-6 text-ashram-amber" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-ashram-clay mb-1 flex items-center gap-2">
                            {address.label}
                            <span className="text-xs px-2 py-1 bg-ashram-amber/10 text-ashram-amber rounded-full font-medium">Primary</span>
                          </h4>
                          <p className="text-ashram-stone leading-relaxed">{address.value}</p>
                          {address.url && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-3 text-ashram-amber hover:text-ashram-clay hover:bg-ashram-amber/10 gap-2"
                              onClick={() => window.open(address.url, "_blank")}
                            >
                              <NavigationIcon className="w-4 h-4" />
                              Get Directions
                              <ArrowRight className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Contact Methods Grid - Modern Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactInfo
                      .filter((info) => info.type !== "address" && info.type !== "map" && info.isActive)
                      .map((contact, idx) => {
                        const iconConfig: Record<string, {
                          Icon: typeof Phone,
                          gradient: string,
                          bgGradient: string,
                          textColor: string
                        }> = {
                          phone: {
                            Icon: Phone,
                            gradient: "from-blue-500 to-blue-600",
                            bgGradient: "from-blue-50 to-blue-100",
                            textColor: "text-blue-600"
                          },
                          whatsapp: {
                            Icon: Phone,
                            gradient: "from-green-500 to-green-600",
                            bgGradient: "from-green-50 to-green-100",
                            textColor: "text-green-600"
                          },
                          email: {
                            Icon: Mail,
                            gradient: "from-purple-500 to-purple-600",
                            bgGradient: "from-purple-50 to-purple-100",
                            textColor: "text-purple-600"
                          },
                          website: {
                            Icon: NavigationIcon,
                            gradient: "from-orange-500 to-orange-600",
                            bgGradient: "from-orange-50 to-orange-100",
                            textColor: "text-orange-600"
                          },
                          other: {
                            Icon: NavigationIcon,
                            gradient: "from-gray-500 to-gray-600",
                            bgGradient: "from-gray-50 to-gray-100",
                            textColor: "text-gray-600"
                          }
                        };

                        const config = iconConfig[contact.type] || iconConfig.other;
                        const Icon = config.Icon;

                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group cursor-pointer"
                            onClick={() => contact.url && window.open(contact.url, "_blank")}
                          >
                            <div className="h-full p-5 bg-white rounded-xl border-2 border-transparent hover:border-ashram-amber/30 shadow-md hover:shadow-xl transition-all">
                              <div className="flex items-center gap-4">
                                <div className={`p-3 bg-gradient-to-br ${config.bgGradient} rounded-xl group-hover:scale-110 transition-transform`}>
                                  <Icon className={`w-5 h-5 ${config.textColor}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-semibold text-ashram-stone/60 uppercase tracking-wider mb-1">
                                    {contact.label}
                                  </p>
                                  <p className="font-medium text-ashram-clay truncate group-hover:text-ashram-amber transition-colors">
                                    {contact.value}
                                  </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-ashram-stone/30 group-hover:text-ashram-amber group-hover:translate-x-1 transition-all" />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-ashram-clay text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 font-serif">
            {aboutContent?.footerTitle || 'Gujarat Ashram'}
          </h3>
          <p className="text-ashram-sand/80 max-w-2xl mx-auto">
            {aboutContent?.footerDescription || 'A sanctuary for peace and spiritual growth'}
          </p>
        </div>
      </footer>
    </div>
  )
}
