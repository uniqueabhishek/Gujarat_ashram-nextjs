'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, MapPin, Navigation as NavigationIcon, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import { aboutAPI, infoCardsAPI, eventsAPI, menuItemsAPI, heroButtonsAPI, imagesAPI, contactAPI, footerLinksAPI } from '@/lib/api-client'
import { getIconComponent } from '@/lib/iconMapping'
import { ZenPreloader } from '@/components/ZenPreloader'
import { TiltCard } from '@/components/TiltCard'

export default function HomePage() {
  const [aboutContent, setAboutContent] = useState<any>(null)
  const [infoCards, setInfoCards] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])
  const [menuItems, setMenuItems] = useState<any[]>([])
  const [heroButtons, setHeroButtons] = useState<any[]>([])
  const [heroImages, setHeroImages] = useState<any[]>([])
  const [heroMobileImages, setHeroMobileImages] = useState<any[]>([]) // NEW
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [contactInfo, setContactInfo] = useState<any[]>([])
  const [footerLinks, setFooterLinks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Parallax Logic
  const { scrollY } = useScroll()
  const heroTextY = useTransform(scrollY, [0, 500], [0, 200])
  const heroBgY = useTransform(scrollY, [0, 500], [0, 100])

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
      const [about, cards, eventsData, menu, hero, heroImgs, heroMobileImgs, galleryImgs, contact, fLinks] = await Promise.all([
        aboutAPI.get(),
        infoCardsAPI.getAll(),
        eventsAPI.getAll(),
        menuItemsAPI.getAll(),
        heroButtonsAPI.getAll(),

        imagesAPI.getByCategory('hero'),
        imagesAPI.getByCategory('hero-mobile'), // NEW
        imagesAPI.getByCategory('gallery'),
        contactAPI.getAll(),
        footerLinksAPI.getAll(),
      ])

      setAboutContent(about)
      setInfoCards(cards)
      setEvents(eventsData)
      setMenuItems(menu)
      setHeroButtons(hero)
      setHeroImages(heroImgs)
      setHeroMobileImages(heroMobileImgs)
      setGalleryImages(galleryImgs)
      setContactInfo(contact)
      setFooterLinks(fLinks)
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
          <div className="flex items-center gap-2">
            <img
              src="/images/aol-logo-transparent.png"
              alt="Art of Living Logo"
              className={`h-12 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B]">The Art of Living</span>
              <span className={`font-serif font-bold text-xl ${isScrolled ? 'text-ashram-clay' : 'text-white'}`}>Sri Sri Gujarat Ashram</span>
            </div>
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
                    ? 'border-2 border-ashram-clay text-ashram-clay hover:bg-ashram-clay hover:text-white font-bold tracking-wide'
                    : 'border-2 border-white text-white hover:bg-white hover:text-ashram-clay font-bold tracking-wide backdrop-blur-sm'
                } else if (item.variant === 'ghost') {
                  buttonVariant = 'ghost'
                  buttonClassName = isScrolled
                    ? 'text-ashram-stone hover:text-ashram-amber hover:bg-ashram-amber/5 font-semibold'
                    : 'text-white hover:text-ashram-sand hover:bg-white/10 font-semibold'
                } else {
                  buttonClassName = isScrolled
                    ? 'bg-ashram-clay hover:bg-ashram-amber text-white font-bold shadow-md transition-all duration-300'
                    : 'bg-ashram-amber text-white hover:bg-white hover:text-ashram-clay font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5'
                }

                return (
                  <Button
                    key={i}
                    variant={buttonVariant}
                    className={buttonClassName}
                    onClick={() => {
                        if (item.url && item.url.length > 8 && item.url !== 'https://') {
                             window.open(item.url, '_blank')
                        } else {
                            console.warn('Invalid URL:', item.url)
                        }
                    }}
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
                  onClick={() => {
                       if (item.url && item.url.length > 8 && item.url !== 'https://') {
                             window.open(item.url, '_blank')
                        }
                  }}
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
                         onClick={() => {
                            if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                 window.open(item.url, '_blank')
                            }
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  }

                  return (
                    <button
                      key={i}
                      className="text-left text-ashram-stone hover:text-ashram-amber transition-colors py-2"
                       onClick={() => {
                            if (item.url && item.url.length > 8 && item.url !== 'https://') {
                                 window.open(item.url, '_blank')
                            }
                        }}
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
        <motion.div style={{ y: heroBgY }} className="absolute inset-0">
          {/* Desktop Slider (Hidden on Mobile if Mobile Images exist) */}
          <div className={`${heroMobileImages.length > 0 ? 'hidden md:block' : 'block'} h-full w-full`}>
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

          {/* Mobile Slider (Visible only on Mobile if images exist) */}
          {heroMobileImages.length > 0 && (
             <div className="md:hidden h-full w-full">
               <Swiper
                 modules={[EffectFade, Autoplay, Navigation, Pagination]}
                 effect="fade"
                 autoplay={{ delay: 5000, disableOnInteraction: false }}
                 navigation={false}
                 pagination={{ clickable: true, dynamicBullets: true }}
                 loop
                 className="h-full w-full"
               >
                 {heroMobileImages.map((img, i) => (
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
             </div>
          )}
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            style={{ y: heroTextY }}
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
            <h1 className="font-serif font-bold text-white mb-6 drop-shadow-lg text-5xl md:text-7xl lg:text-8xl flex flex-col items-center leading-tight">
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: {
                      y: 0,
                      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  {aboutContent?.heroTitle || 'Art of Living'}
                </motion.span>
              </div>

              <div className="overflow-hidden">
                <motion.span
                  className="italic text-ashram-amber inline-block"
                  variants={{
                    hidden: { y: "110%" },
                    visible: {
                      y: 0,
                      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
                    }
                  }}
                >
                  {aboutContent?.heroSubtitle || 'Sri Sri Gujarat Ashram'}
                </motion.span>
              </div>
            </h1>

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
                  <TiltCard key={card.id}>
                    <motion.div
                        variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="h-full p-8 rounded-2xl border border-ashram-amber/20 bg-ashram-sand/30 hover:bg-white hover:shadow-lg hover:border-ashram-amber/40 transition-all duration-300"
                    >
                        <div className="mb-6 p-4 bg-white rounded-xl w-fit shadow-sm border border-ashram-stone/5">
                        <IconComponent className="w-8 h-8 text-ashram-amber" />
                        </div>
                        <h3 className="text-2xl font-bold text-ashram-clay mb-3 font-serif">
                        {card.title}
                        </h3>
                        <p className="text-ashram-stone leading-relaxed">{card.description}</p>
                    </motion.div>
                  </TiltCard>
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
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(img.path)}
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
                               {/* Use a valid helper here would be better, but inline check is fine for now */}
                               <Button
                                 variant="outline"
                                 size="sm"
                                 className="w-full text-ashram-amber border-ashram-amber/30 hover:bg-ashram-amber/5"
                                 onClick={() => {
                                    if (address.url && address.url.startsWith('http')) {
                                      window.open(address.url, "_blank")
                                    }
                                 }}
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
                             let colorClass = "bg-ashram-amber/10 text-ashram-clay";
                             if (contact.type === 'phone') colorClass = "bg-blue-100 text-blue-700";
                             if (contact.type === 'whatsapp') colorClass = "bg-green-100 text-green-700";
                             if (contact.type === 'email') colorClass = "bg-rose-100 text-rose-700";
                             if (contact.url && contact.url.includes('http')) colorClass = "bg-violet-100 text-violet-700";
                            return (
                              <motion.button
                                key={idx}
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => contact.url && window.open(contact.url, "_blank")}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-ashram-stone/10 hover:border-ashram-amber/50 hover:shadow-md transition-all text-left"
                              >
                                <div className={`p-2 rounded-lg ${colorClass}`}>
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

              {/* Map Embed */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex-1 min-h-[300px] rounded-3xl bg-ashram-sand overflow-hidden shadow-lg border border-ashram-stone/20 relative group"
              >
                 <iframe

                    src={(() => {
                      const mapItem = contactInfo.find(c => c.type === 'map');
                      const defaultMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6576343362677!2d73.0766288759535!3d22.253034944605156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb092d6e35579%3A0x6280463b22337d5c!2sThe%20Art%20of%20Living%20Gujarat%20Ashram!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin";

                      if (!mapItem || !mapItem.value) return defaultMap;

                      const val = mapItem.value.trim();
                      if (val.startsWith('<iframe')) {
                        const match = val.match(/src=["']([^"']+)["']/);
                        return match ? match[1] : defaultMap;
                      }
                      return val;
                    })()}
                   width="100%"
                   height="100%"
                   style={{ border: 0, minHeight: '300px' }}
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="transition-all duration-700 w-full h-full"
                 />
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
      <footer className="bg-ashram-clay text-white pt-10 pb-6 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-ashram-amber rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        {/* Trial 3: Footer Watermark */}
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-20 md:opacity-80">
          <img
            src="/images/ashram-sketch-transparent.png"
            alt="Ashram Watermark"
            className="w-[300px] md:w-[500px] h-auto translate-x-1/4 translate-y-1/4 brightness-0 invert"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                   <img src="/images/aol-logo-transparent.png" alt="Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
                   <div>
                     <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold mb-1">The Art of Living</p>
                     <h3 className="text-3xl font-serif font-bold leading-none">{aboutContent?.footerTitle || 'Sri Sri Gujarat Ashram'}</h3>
                   </div>
                </div>
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
                {footerLinks.map((link: any, i: number) => (
                  <li key={i}>
                    <a href={link.url} className="text-ashram-sand/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support / Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-ashram-amber">Contact</h4>
              <ul className="space-y-3">
                 {contactInfo
                    .filter((c: any) => c.type !== 'map' && c.type !== 'address' && c.isActive !== false)
                    .map((contact: any, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-ashram-sand/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-ashram-amber" />
                      <span className="font-medium text-white/90">{contact.label}:</span>
                       {contact.type === 'phone' || contact.type === 'whatsapp' || contact.type === 'email' ? (
                          <a href={contact.url || '#'} className="hover:text-ashram-amber transition-colors">
                             {contact.value}
                          </a>
                       ) : (
                          <span>{contact.value}</span>
                       )}
                    </li>
                 ))}
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
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-auto h-auto max-w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size"
                className="w-auto h-full max-h-[90vh] object-contain rounded-lg shadow-2xl mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:-top-12 md:-right-12 text-white/70 hover:text-white transition-colors bg-black/50 md:bg-transparent rounded-full p-2 md:p-0"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
