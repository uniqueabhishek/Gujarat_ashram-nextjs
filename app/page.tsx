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
import { ZenPreloader } from '@/components/ZenPreloader'

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
    return <ZenPreloader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-ashram-sand">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-ashram-stone/5 shadow-sm py-3'
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
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.h1
              className="font-serif font-bold text-white mb-6 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              {aboutContent?.heroTitle || 'Art of Living'} <br />
              <motion.span
                className="italic text-ashram-amber inline-block"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
                }}
              >
                {aboutContent?.heroSubtitle || 'Gujarat Ashram'}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              {aboutContent?.heroDescription || 'Discover a sanctuary for inner peace, ancient wisdom, and holistic rejuvenation amidst nature\'s embrace.'}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
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
                  className = 'bg-ashram-amber hover:bg-ashram-amber/90 text-white shadow-lg hover:shadow-xl transition-all'
                }

                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={variant}
                      size="lg"
                      className={className}
                      onClick={() => window.open(button.url, '_blank')}
                    >
                      {button.name}
                    </Button>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Info Cards Section */}
      {infoCards.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl font-bold text-ashram-clay mb-16 text-center font-serif"
            >
              Our Offerings
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {infoCards.map((card) => {
                const IconComponent = getIconComponent(card.icon)
                return (
                  <motion.div
                    key={card.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-8 rounded-2xl border border-ashram-amber/20 bg-ashram-sand/30 hover:bg-white hover:shadow-lg hover:border-ashram-amber/40 transition-all duration-300"
                  >
                    <div className="mb-6 p-4 bg-white rounded-xl w-fit shadow-sm border border-ashram-stone/5">
                      <IconComponent className="w-8 h-8 text-ashram-amber" />
                    </div>
                    <h3 className="text-2xl font-bold text-ashram-clay mb-3 font-serif">
                      {card.title}
                    </h3>
                    <p className="text-ashram-stone leading-relaxed">{card.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Combined Why Visit & Contact Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Why Visit Text + Gallery Grid */}
          <div className="flex flex-col gap-10">
            {/* Why Visit Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-ashram-amber font-medium tracking-wider uppercase text-sm">
                {aboutContent?.aboutBadge || "Discover"}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ashram-clay mt-2 mb-6">
                {aboutContent?.aboutTitle || "Why Visit the Gujarat Ashram?"}
              </h2>
              <p className="text-ashram-stone/70 text-lg leading-relaxed">
                {aboutContent?.aboutDescription || "Experience a calm environment filled with wisdom and transformative meditation practices. Our programs are designed for all levels, from beginners to advanced practitioners, providing a path to inner silence and outer dynamism."}
              </p>
            </motion.div>

            {/* Gallery Grid (4 Images) */}
            {galleryImages.length > 0 && (
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {galleryImages.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                    className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer shadow-md"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.path})` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column: Contact Card + Map Placeholder */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full flex flex-col gap-6"
            >
              {/* Contact Card */}
              {contactInfo.length > 0 && (
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-ashram-sand/30 to-white shadow-xl border border-ashram-amber/20 overflow-visible group hover:shadow-2xl transition-all duration-500">
                   {/* Decorative Elements */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-ashram-amber/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 group-hover:bg-ashram-amber/10 transition-colors duration-500" />

                   <div className="p-8">
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

                    {/* Contact Methods Grid */}
                    <div className="grid grid-cols-1 gap-4">
                       {/* Address */}
                       {contactInfo.filter((info) => info.type === "address").map((address) => (
                         <div key={address.id} className="mb-4">
                           <h4 className="font-bold text-ashram-clay flex items-center gap-2 mb-2">
                             <NavigationIcon className="w-4 h-4 text-ashram-amber" />
                             Visit Us
                           </h4>
                           <p className="text-ashram-stone text-sm leading-relaxed mb-3">{address.value}</p>
                           {address.url && (
                             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                               <Button
                                 variant="outline"
                                 size="sm"
                                 className="w-full text-ashram-amber border-ashram-amber/30 hover:bg-ashram-amber/5"
                                 onClick={() => window.open(address.url, "_blank")}
                               >
                                 Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                               </Button>
                             </motion.div>
                           )}
                         </div>
                       ))}

                      {/* Phone/Email Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                         {contactInfo
                          .filter((info) => info.type !== "address" && info.type !== "map" && info.isActive)
                          .map((contact, idx) => {
                            const Icon = contact.type === 'phone' || contact.type === 'whatsapp' ? Phone : Mail;
                            return (
                              <motion.button
                                key={idx}
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => contact.url && window.open(contact.url, "_blank")}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-ashram-stone/10 hover:border-ashram-amber/50 hover:shadow-md transition-all text-left"
                              >
                                <div className="p-2 rounded-lg bg-ashram-sand text-ashram-clay">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs text-ashram-stone/50 font-medium uppercase">{contact.label}</div>
                                  <div className="text-sm font-semibold text-ashram-clay truncate">{contact.value}</div>
                                </div>
                              </motion.button>
                            )
                          })}
                      </div>
                    </div>
                   </div>
                </div>
              )}

              {/* Map Placeholder Area */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex-1 min-h-[300px] rounded-3xl bg-ashram-sand/50 border-2 border-dashed border-ashram-stone/20 flex items-center justify-center relative overflow-hidden group cursor-pointer"
              >
                 <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/data=LYENz1W1...')] bg-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700"/>
                 <motion.div
                    className="text-center z-10 bg-white/80 p-6 rounded-2xl backdrop-blur-sm shadow-sm"
                    whileHover={{ y: -5 }}
                 >
                    <MapPin className="w-10 h-10 text-ashram-amber mx-auto mb-2" />
                    <span className="text-ashram-clay font-bold">View Detailed Map</span>
                 </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {events.length > 0 && (
        <section className="py-20 px-4 bg-ashram-sand/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12 px-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-ashram-amber font-medium tracking-wider uppercase text-sm block mb-2">Calendar</span>
                <h2 className="text-4xl font-bold text-ashram-clay font-serif">
                  Upcoming Events
                </h2>
              </motion.div>
              <Button variant="ghost" className="hidden md:flex gap-2 text-ashram-stone hover:text-ashram-clay">
                View All Events <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl border border-ashram-stone/10 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="inline-block px-3 py-1 bg-ashram-amber/10 text-ashram-amber rounded-full text-xs font-semibold mb-4">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-ashram-clay mb-3 group-hover:text-ashram-amber transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-ashram-stone mb-6 line-clamp-2">{event.description}</p>
                  <Button className="w-full bg-ashram-clay text-white hover:bg-ashram-clay/90 group-hover:bg-ashram-amber transition-colors">
                    Register Now
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 text-center md:hidden">
               <Button variant="ghost" className="gap-2 text-ashram-stone hover:text-ashram-clay">
                View All Events <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Mega Footer */}
      <footer className="bg-ashram-clay text-white pt-20 pb-10 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-ashram-amber rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 space-y-6">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h3 className="text-4xl font-serif font-bold mb-4">{aboutContent?.footerTitle || 'Gujarat Ashram'}</h3>
                <p className="text-ashram-sand/60 max-w-sm leading-relaxed text-lg">
                  {aboutContent?.footerDescription || 'A sanctuary for peace, meditation, and spiritual growth in the heart of Gujarat.'}
                </p>
              </motion.div>

              {/* Newsletter */}
              <div className="max-w-sm">
                <label className="text-sm font-medium text-ashram-sand/80 mb-2 block uppercase tracking-wider">Join our Newsletter</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex-1 text-white placeholder:text-white/30 focus:outline-none focus:border-ashram-amber transition-colors"
                  />
                  <Button className="bg-ashram-amber hover:bg-ashram-amber/90 text-ashram-clay font-bold">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-ashram-amber">Quick Links</h4>
              <ul className="space-y-3">
                {['Meditation Hall', 'Programs', 'Donate', 'Volunteer'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-ashram-sand/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support / Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-ashram-amber">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-ashram-sand/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-ashram-amber" /> Call
                </li>
                 <li className="flex items-center gap-2 text-ashram-sand/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-ashram-amber" /> WhatsApp
                </li>
                 <li className="flex items-center gap-2 text-ashram-sand/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-ashram-amber" /> Email
                </li>
                 <li className="flex items-center gap-2 text-ashram-sand/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-ashram-amber" /> Map
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ashram-sand/40">
            <p>© 2025 Art of Living Gujarat Ashram. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
