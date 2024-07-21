import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts: defineTable({
        views: v.number(),
        author: v.string(),
        user: v.id('users'),
        authorId: v.string(),
        voiceType: v.string(),
        voicePrompt: v.string(),
        imagePrompt: v.string(),
        podcastTitle: v.string(),
        audioDuration: v.number(),
        authorImageUrl: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()),
        imageUrl: v.optional(v.string()),
        audioStorageId: v.optional(v.id('_storage')),
        imageStorageId: v.optional(v.id('_storage')),
    })
        .searchIndex('search_author', { searchField: 'author' })
        .searchIndex('search_title', { searchField: "podcastTitle" })
        .searchIndex('search_body', { searchField: 'podcastDescription' }),

    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    })
})