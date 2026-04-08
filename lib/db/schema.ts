import { sql } from 'drizzle-orm'
import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core'

export const admin = pgTable('Admin', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  passwordHash: text('passwordHash').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export const menuItem = pgTable('MenuItem', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url').notNull(),
  isSpecial: boolean('isSpecial').default(false).notNull(),
  variant: text('variant').default('default').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const heroButton = pgTable('HeroButton', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url').notNull(),
  variant: text('variant').default('default').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const footerLink = pgTable('FooterLink', {
  id: serial('id').primaryKey(),
  label: text('label').notNull(),
  url: text('url').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const siteImage = pgTable('SiteImage', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(),
  filename: text('filename').notNull(),
  path: text('path').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const event = pgTable('Event', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  date: text('date').notNull(),
  description: text('description').notNull(),
  buttonText: text('buttonText'),
  buttonUrl: text('buttonUrl'),
  isActive: boolean('isActive').default(true).notNull(),
  endDate: text('endDate'),
  category: text('category').default('yoga').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const aboutContent = pgTable('AboutContent', {
  id: serial('id').primaryKey(),
  heroTitle: text('heroTitle').notNull(),
  heroSubtitle: text('heroSubtitle').notNull(),
  heroDescription: text('heroDescription').notNull(),
  aboutBadge: text('aboutBadge'),
  aboutTitle: text('aboutTitle').notNull(),
  aboutDescription: text('aboutDescription').notNull(),
  videoUrl: text('videoUrl'),
  footerTitle: text('footerTitle').notNull(),
  footerDescription: text('footerDescription').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const infoCard = pgTable('InfoCard', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon').notNull(),
  order: integer('order').default(0).notNull(),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const contactInfo = pgTable('ContactInfo', {
  id: serial('id').primaryKey(),
  type: text('type').notNull(),
  label: text('label').notNull(),
  value: text('value').notNull(),
  url: text('url'),
  order: integer('order').default(0).notNull(),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const footerSettings = pgTable('FooterSettings', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const socialLink = pgTable('SocialLink', {
  id: serial('id').primaryKey(),
  platform: text('platform').notNull(),
  url: text('url').notNull(),
  order: integer('order').default(0).notNull(),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})

export const footerButton = pgTable('FooterButton', {
  id: serial('id').primaryKey(),
  label: text('label').notNull(),
  url: text('url').notNull(),
  order: integer('order').default(0).notNull(),
  isActive: boolean('isActive').default(true).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()
    .$onUpdateFn(() => new Date()),
})
